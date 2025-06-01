"use client"

import DashboardLeft from "../elements/DashboardLeft";
import React, { useState , useEffect } from "react";
import { transactionsList } from "@/service/finance";
import { convertToJalali , convertToTime } from "@/utils/setTime";
import { Bounce, toast } from "react-toastify";
import UpArrow from "../../../public/icons/upArrow";
import DownArrow from "../../../public/icons/downArrow";

const TransactionDashboardPage = () =>{


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
              <th className="p-3 border-b-[1px] border-[#EDEDED]">مبلغ</th>
              <th className="p-3 border-b-[1px] border-[#EDEDED]">شناسه تراکنش</th>
              <th className="p-3 border-b-[1px] border-[#EDEDED]">زمان تراکنش</th>
              <th className="p-3 border-b-[1px] border-[#EDEDED]"></th>
            </tr>
          </thead>
          <tbody>
            {transaction?.map((transaction, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{transaction.description}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{transaction.amount}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{transaction.id}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{convertToJalali(transaction.created_at)}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED] text-center">
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
    )
}
export default TransactionDashboardPage;