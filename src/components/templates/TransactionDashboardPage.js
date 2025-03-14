"use client"
import DashboardLeft from "../elements/DashboardLeft";
import React, { useState } from "react";

const transactions = [
    {
    id: "TW8790741",
    type: "خرید نقدی خودرو",
    amount: "۲,۰۰۰,۰۰۰ تومان",
    date: "۱۴۰۲/۰۹/۱۲ - ۱۹:۳۰",
    paymentType: "کارت بانکی",
    debtAmount: "۱,۵۰۰,۰۰۰ تومان",
    cardUsed: "**** ۶۰۳۷",
    trackingCode: "456123789",
    time:"12:21"
    },
    {
    id: "QW8325741",
    type: "افزایش اعتبار کیف پول",
    amount: "۱,۰۰۰,۰۰۰ تومان",
    date: "۱۴۰۲/۰۹/۱۲ - ۱۹:۴۰",
    paymentType: "کارت بانکی",
    debtAmount: "۱,۵۰۰,۰۰۰ تومان",
    cardUsed: "**** ۶۰۳۷",
    trackingCode: "456123789",
    time:"12:21"
    },
    {
    id: "AY8745741",
    type: "پرداخت قسط",
    amount: "۳,۰۰۰,۰۰۰ تومان",
    date: "۱۴۰۲/۰۹/۱۲ - ۱۹:۵۰",
    paymentType: "کارت بانکی",
    debtAmount: "۱,۵۰۰,۰۰۰ تومان",
    cardUsed: "**** ۶۰۳۷",
    trackingCode: "456123789",
    time:"12:21"
    },
  ];
  

const TransactionDashboardPage = () =>{

        const [openIndex, setOpenIndex] = useState(null);
      
        const toggleAccordion = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };
      

    return(
        <div className="
         w-[912px] 
         h-[800px]
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
            h-[651px]
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
            {transactions.map((transaction, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{transaction.type}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{transaction.amount}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{transaction.id}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED]">{transaction.date}</td>
                  <td className="p-3 border-b-[1px] border-[#EDEDED] text-center">
                    <button onClick={() => toggleAccordion(index)}>
                      {openIndex === index ? "^" : " v "}
                    </button>
                  </td>
                </tr>
                {openIndex === index && (
                 <tr className="bg-gray-50 transition-all">
                 <td colSpan="5" className="p-4 border-[#EDEDED] rounded-lg">
                   <div className="grid grid-cols-3 gap-4">
                     <div>
                       <strong>نوع پرداخت:</strong> {transaction.paymentType}
                     </div>
                     <div>
                       <strong>مبلغ بدهی:</strong> {transaction.debtAmount}
                     </div>
                     <div>
                       <strong>پرداخت از کارت:</strong> {transaction.cardUsed}
                     </div>
                     <div>
                       <strong>کد رهگیری:</strong> {transaction.trackingCode}
                     </div>
                     <div>
                       <strong>زمان :</strong> {transaction.time}
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