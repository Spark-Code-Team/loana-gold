"use client"

import DashboardLeft from "@/components/elements/DashboardLeft";
import api from "@/config/api";
import { useEffect } from "react";
import { useState } from "react";
import { creditPayment } from "@/service/finance"; 
import { convertToShamsi } from "@/utils/setTime";
import { userInstallments } from "@/service/finance";
import { UserProfile } from "@/stores/profileStore";
import { ThreeDots } from "react-loader-spinner";

const Settled = () => {


    const [installmentStatus, setInstallmentStatus] = useState("paid")
    const [ installments , setInstallments] = useState([])
    const [ isLoading , setIsLoading ] = useState(true)
    const profileStore = UserProfile()

    useEffect(()=>{
        const loadInstallment = async () => {
            const { response, error } = await userInstallments(installmentStatus);
            if (response) {
                setInstallments(response.data)
                setIsLoading(false)
            }
          };
        loadInstallment()
    }, [installmentStatus , profileStore])

    const payinstallment = async (id) => {
        const { response, error } = await creditPayment(id);
            if(response){
                setInstallmentStatus('paid')
            }else{
                toast.error(error.response?.data.non_field_errors[0] || "مشکلی پیش آمده", { 
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            }

    }

    return(
        <div className={`
        w-full
        h-full
        border-[1px]
        border-[#CBCED7]
        ${installmentStatus=="paid"&!installments?"pb-7":"pb-0"}
        rounded-2xl
        `}>
            <DashboardLeft
            title="اقساط"
            />

            <div className="
            h-12
            w-full
            flex
            flex-row
            items-center
            mt-5
            mx-3
            ">
                <button  className={
                     `
                    w-[101]
                    h-8
                  ${installmentStatus === 'paid' ? 'bg-[#F6F6F6]':'bg-[#D1DDF1]'}
                    rounded-xl
                    mx-8
                    text-sm
                    font-bold`
                }
                onClick={()=>{setInstallmentStatus('unpaid')
                    setIsLoading(true)}
                }
                >تسویه نشده
                </button>

                <button className={
                     `
                    w-[101]
                    h-8
                  ${installmentStatus === 'paid' ? 'bg-[#D1DDF1]':'bg-[#F6F6F6]'}
                    rounded-xl
                    mx-8
                    text-sm
                    font-bold`
                }
                onClick={()=>{setInstallmentStatus('paid')
                    setIsLoading(true)
                }}
                >تسویه شده
                </button>

            </div>


            {isLoading? <div className='m-7' ><ThreeDots
                      visible={true}
                      height="10"
                      width="80"
                      color="#D2AB67"   
                      radius="9"
                      ariaLabel="three-dots-loading"
                      /></div> : <>
 
            {
                installments.length !== 0 ? <>
                {installmentStatus !== 'paid' ? 
                    <>
                        {
                            installments.map((p, index) => {
                                // نوشته شده A.S این  خط پایین از کد توسط
                                if(p.status === "unpaid" && index == 0){
                                    return (
                                        <div key={index} className="w-full px-4 md:px-8 my-4 flex justify-center">
                                          <div className="
                                            w-full
                                            md:w-[848px]
                                            rounded-lg
                                            border-[1px]
                                            border-[#EDEDED]
                                            p-4
                                            md:p-8
                                            shadow-sm
                                          ">
                                            <div className="py-4">
                                              <div className="flex flex-col gap-y-3 text-sm md:text-base">
                                                <p>
                                                  {p.period === "0 از 4 قسط " ? (
                                                    <div>دوره : پیش قسط</div>
                                                  ) : (
                                                    <div>دوره: {p.period}</div>
                                                  )}
                                                </p>
                                      
                                                <p>
                                                  تاریخ: {convertToShamsi(p.due_date)}
                                                </p>
                                      
                                                <p>
                                                  مبلغ قابل پرداخت: {p.amount_due}
                                                </p>
                                      
                                                <p>
                                                  کل بدهی: {p.debt}
                                                </p>
                                      
                                                <p>
                                                  وضعیت:
                                                  <span className="text-[#be2e2e] px-1">
                                                    تسویه نشده
                                                  </span>
                                                </p>
                                              </div>
                                      
                                              <div className="mt-4 flex justify-end">
                                                <button
                                                  onClick={() => payinstallment(p.id)}
                                                  className="
                                                    w-24
                                                    md:w-20
                                                    h-10
                                                    bg-primary
                                                    rounded-lg
                                                    text-white
                                                    transition
                                                    hover:bg-primary-dark
                                                  "
                                                >
                                                  پرداخت
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                }
                        })
                        }
                    </>:<div >
                       {
                            installments.map((p, index) => {
                                if(p.status === "paid"){
                                    return (
                                        <div key={index} className=" 
                                        w-full
                                        m-auto
                                        ">
                                        <div className="
                                        h-full
                                        rounded-lg
                                        border-[1px]
                                        border-[#EDEDED]
                                        hover:border-[2px]
                                        hover:border-primary
                                        transition
                                        duration-500
                                        mx-8
                                        mt-8
                                        "
                                        >
                                            <div className="
                                            p-4
                                            ">
                                                <div className="flex flex-col gap-y-3">
                            
                                                <p>
                                                دوره: {p.period}
                                                </p>
                
                                                <p>
                                                تاریخ سر رسید: {p.due_date}
                                                </p>
                
                                                <p>مبلغ پرداخت شده: {p.amount_due}</p>
                
                                                <p>
                                                تسویه نشده: 
                                                {p.debt?p.debt:'0'}
                                                </p>
                                                
                                                <p>
                                                وضعیت:
                                                <span className="text-[#096D39] px-1">
                                                تسویه شده
                                                </span>
                                                </p>
                            
                                                </div>
                                                
                                            </div>
                                         
                                        </div>
                                    </div>
                                    )
                                }
                            })
                        
                       } 
                    </div>
                    }
                    </>:<div className="m-4" >
                    رکوردی موجود نمی باشد</div>
            }</>}

            

        </div>
    )
}
export default Settled;