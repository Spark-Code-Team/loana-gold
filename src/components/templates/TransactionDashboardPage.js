"use client"

import DashboardLeft from "../elements/DashboardLeft";
import React, { useState , useEffect } from "react";
import { transactionsList } from "@/service/finance";
import { convertToJalali , convertToTime } from "@/utils/setTime";
import { Bounce, toast } from "react-toastify";
import UpArrow from "../../../public/icons/upArrow";
import DownArrow from "../../../public/icons/downArrow";
import { ThreeDots } from "react-loader-spinner";

const TransactionDashboardPage = () =>{

  const [ isLoading , setIsLoading ] = useState(true)
  const [ transaction , setTransaction ] = useState()

        useEffect(()=>{
          const transactions = async () => {
            const {response , error} = await transactionsList()
            if(response){
              setTransaction(response.data.results)
              setIsLoading(false)
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
         w-full 
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


            <div className="
            w-full
            h-full
            mt-8
         mx-3
         px-3
            ">             
            <p className="            
            text-2xl
            font-bold
            border-b-[1px]
            pr-7
            pb-7
            mb-7
            border-[#CBCED7]
            ">تراکنش ها</p>
                <div>

                {isLoading? <div className='mb-7' ><ThreeDots
                      visible={true}
                      height="10"
                      width="80"
                      color="#D2AB67"   
                      radius="9"
                      ariaLabel="three-dots-loading"
                      /></div> :<>  
                     <div className="overflow-x-auto">
  {transaction.length === 0 ? (
    <p className="text-center p-4">تراکنشی وجود ندارد</p>
  ) : (
    <>
      <table className="w-full hidden md:table">
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
          {transaction.map((transaction, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="p-3 text-center border-b-[1px] border-[#EDEDED]">{transaction.description}</td>
                <td className="p-3 text-center border-b-[1px] border-[#EDEDED]">{transaction.amount}</td>
                <td className="p-3 text-center border-b-[1px] border-[#EDEDED]">{transaction.id}</td>
                <td className="p-3 text-center border-b-[1px] border-[#EDEDED]">{convertToJalali(transaction.created_at)}</td>
                <td className="p-3 text-center border-b-[1px] border-[#EDEDED] ">
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

      <div className="md:hidden space-y-4">
        {transaction.map((transaction, index) => (
          <div key={index} className="border border-[#EDEDED] rounded-lg mb-7 p-4 shadow-sm">
            <div>
              <p className="mb-1"><strong>مبلغ:</strong> {transaction.amount} تومان</p>
              <p className="mb-1"><strong>شناسه تراکنش:</strong> {transaction.id}</p>
              <p className="mb-1"><strong>زمان تراکنش:</strong> {convertToJalali(transaction.created_at)}</p>
              <p><strong>نوع پرداخت:</strong> {type(transaction.type)}</p>

            </div>
          </div>
        ))}
      </div>
    </>
  )}
</div>
                      </>
                     
                            }


                   
                </div>

            </div>



        </div>
    )
}
export default TransactionDashboardPage;