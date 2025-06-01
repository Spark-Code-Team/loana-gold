"use client"

import DashboardLeft from "../elements/DashboardLeft";
import React, { useState , useEffect } from "react";
import { transactionsList } from "@/service/finance";
import { convertToJalali , convertToTime } from "@/utils/setTime";
import { Bounce, toast } from "react-toastify";
import UpArrow from "../../../public/icons/upArrow";
import DownArrow from "../../../public/icons/downArrow";


const AdminTransactions = () => {

  

  const [ transaction , setTransaction ] = useState()

        useEffect(()=>{
          const transactions = async () => {
            const {response , error} = await transactionsList()
            if(response){
              setTransaction(response.data.results)
            }else{
              toast.error(error.response?.data.error || "مشکلی پیش آمده") 
            }
          }
          transactions()
        }, [])

        const [openIndex, setOpenIndex] = useState(null);
      
        const toggleAccordion = (index) => {
          setOpenIndex(openIndex === index ? null : index);
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
      <div className="
               flex
         flex-col
         justify-center
         items-center">
                <div className="
            w-full
            h-max
            mb-6
            md:flex
            flex-row
            justify-around
            border-[1px]
            rounded-xl
            items-center
            hidden
            ">
            <div className="
            w-[155px] 
                justify-center 
                flex 
                items-center
            "
            >فیلترها</div>

                <div className="
                border-x-[1px] 
                h-[56px] 
                w-[155px] 
                justify-center 
                flex 
                items-center
                ">  عنوان  </div>

                <div className="
                border-l-[1px]
                w-[155px]
                h-[56px]
                flex 
                justify-center 
                items-center
                "
                >  نوع تراکنش </div>

                <div className="
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center
                "> تاریخ تراکنش </div>

                <div className="
                border-x-[1px] 
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center

                "
                >  وضعیت تراکنش </div>

            <div className="  
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center 
                text-[#E90000]">حذف همه فیلترها</div>
    </div>
      <div className="
         w-[912px] 
         h-full
         bg-white
         border-[1px]
         rounded-xl        
         border-[#CBCED7]
         flex
         flex-col
         justify-center
         items-center
        ">

             <DashboardLeft
                title="تراکنش ها"
            />

            <div className="
            w-[848px]
            h-full
            mt-8
            ">
                <div>

                <table className="w-full">
          <thead>
            <tr>
              <th className="p-3 border-b-[1px] border-[#EDEDED]">نوع تراکنش</th>
              <th className="p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">مبلغ</th>
              <th className="p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">شناسه تراکنش</th>
              <th className="p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">زمان تراکنش</th>
              <th className="p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0"></th>
            </tr>
          </thead>
          <tbody>
            {transaction?.map((transaction, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{transaction.description}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{transaction.amount}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{transaction.id}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{convertToJalali(transaction.created_at)}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0 text-center">
                    <button
                      
                    onClick={() => toggleAccordion(index)}>
                      {openIndex === index ? <UpArrow/> : <DownArrow/>}
                    </button>
                  </td>
                </tr>
                {openIndex === index && (
                 <tr className="bg-gray-50 transition-all">
                 <td colSpan="5" className="p-4 border-[#EDEDED] rounded-lg">
                   <div className="grid grid-cols-3 gap-4">
                     <div>
                       <strong>نوع پرداخت:</strong> {type(transaction.type)}
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
                       <strong>زمان :</strong>{convertToTime(transaction.created_at)}
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
            </div>
        </div>
      </div>
 
    )
};

export default AdminTransactions;
