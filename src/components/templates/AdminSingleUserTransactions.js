"use client"

import { getSingleUserTransactions } from "@/service/adminSingleUserData";
import { convertToJalali, convertToTime } from "@/utils/setTime";
import React, { useEffect, useState } from "react";

const AdminSingleUserTransactions = ({id}) =>{

    const [transactions , setTransactions] = useState()

    const [loading , setLoading] = useState(true)
    const [openIndex, setOpenIndex] = useState(null);


    useEffect(()=>{
        const getTransactions = async () => {
            const {response , error} = await getSingleUserTransactions(id) 
            if(response){ 
                console.log(response.data)
                setTransactions(response.data)
            }else{
                toast.error(error.response?.data.error)}
        }
        getTransactions()

    },[])

    const getTransactionType = (transaction_type) =>{
        switch (transaction_type?.toLowerCase()) {
          case "decremental":
            return "برداشت";
          case "incremental":
            return "واریز";
        }
      }

    const getStatusText = (status) => {
    switch (status?.toLowerCase()) {
        case "successful":
        return "موفقیت";
        case "unsuccessful":
        return "ناموفق";
        case "pending":
        return "در انتظار";
        default:
        return "نامشخص";
    }
    };

    const type = (type) => {
        switch(type) {
          case 'installment':
            return 'پرداخت قسط'
          case "credit":
            return "درخواست اعتبار"
          case "charge":
            return "شارژ کیف پول"
        }
      }
    
    return(
        <div className=" border-[1px] rounded-xl w-[1024px]">
            
                      <table className="w-full table-auto">
                      <thead className="w-full">
                        <tr>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED]"> نام و نام خانوادگی </th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0"> عنوان </th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">نوع تراکنش</th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0"> مبلغ تراکنش </th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">شناسه تراکنش</th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-x last:border-r-0"> تاریخ تراکنش</th>
                          <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">وضعیت</th>
                        </tr>
                      </thead>
                      <tbody className="w-full">
                        {transactions?.results.map((transactions, index) => (
                          <React.Fragment key={index}>
                            <tr className="w-full">
                              <td className="w-1/7 p-3 border-t-[1px] border-[#EDEDED]">{transactions.user_full_name || "—"}</td>
                              <td className="w-1/7 p-3 border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{transactions.type || "—"}</td>
                              <td className="w-1/7 p-3 border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{getTransactionType(transactions.transaction_type)}</td>
                              <td className="w-1/7 p-3 border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{transactions.amount}</td>
                              <td className="w-1/7 p-3 border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{transactions.id}</td>
                              <td className="w-1/7 p-3 border-t-[1px] border-[#EDEDED] border-r last:border-r-0">{convertToJalali(transactions.created_at)}</td>
                              <td className="w-1/  p-3 border-t border-[#EDEDED] border-r last:border-r-0">{getStatusText(transactions.status)}</td>
                              <td className="w-1/7 p-3 border-t-[1px] border-[#EDEDED] border-r last:border-r-0 "></td>
                            </tr>
                            {openIndex === index && (
                             <tr className="bg-gray-50 transition-all">
                             <td colSpan="5" className="p-4 border-[#EDEDED] rounded-lg">
                               <div className="grid grid-cols-3 gap-4">
                                 <div>
                                   <strong>نوع پرداخت:</strong> {type(transactions.transaction_type)}
                                 </div>
                                 {/* <div>
                                   <strong>مبلغ بدهی:</strong> {transaction.debtAmount}
                                 </div> */}
                                 {/* <div>
                                   <strong>پرداخت از کارت:</strong> {transaction.cardUsed}
                                 </div> */}
                                 {/* <div>
                                   <strong>کد رهگیری:</strong> {transaction.trackingCode}
                                 </div> */}
                                 <div>
                                   <strong>زمان :</strong>{convertToTime(transactions.created_at)}
                                 </div>
                               </div>
                             </td>
                           </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
        </div>
    )
}
export default AdminSingleUserTransactions;