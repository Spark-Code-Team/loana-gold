"use client"

import DashboardLeft from "@/components/elements/DashboardLeft";
import api from "@/config/api";
import { useEffect } from "react";
import { useState } from "react";
import { creditPayment } from "@/service/finance"; 
import { convertToShamsi } from "@/utils/setTime";
import { userInstallments } from "@/service/finance";
import { UserProfile } from "@/stores/profileStore";

const Settled = () => {
    const [installmentStatus, setInstallmentStatus] = useState("paid")
    const [ installments , setInstallments] = useState([])

    const profileStore = UserProfile()

    useEffect(()=>{
        const loadInstallment = async () => {
            const { response, error } = await userInstallments(installmentStatus);
            if (response) {
                console.log(response);
                
                setInstallments(response.data)
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
        <div className="
        w-[912px]
        h-full
        border-[1px]
        border-[#CBCED7]
        rounded-2xl
        ">
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
                onClick={()=>setInstallmentStatus('unpaid')}
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
                onClick={()=>setInstallmentStatus('paid')}
                >تسویه شده
                </button>

            </div>

            {
                installments.length !== 0 ? <>
                {installmentStatus !== 'paid' ? 
                    <>
                        {
                            installments.map((p, index) => {
                                // نوشته شده A.S این  خط پایین از کد توسط
                                if(p.status === "unpaid" && index == 0){
                                    return(                            
                                    <div key={index} className="..."> 
                                        <div className="
                                        w-[848px]
                                        h- full
                                        rounded-lg
                                        border-[1px]
                                        border-[#EDEDED]
                                        m-8
                                        ">
                                            <div className="
                                            pr-4
                                            py-4
                                            ">
                                                <div className="flex flex-col gap-y-3">
                                                
                                                <p>
                                                    {p.period == "0 از 4 قسط " ? <div>
                                                        دوره : پیش قسط
                                                    </div>:<div> دوره: {p.period}</div>}
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
                            
                                                <div className="
                                                mt-4
                                                flex
                                                justify-end
                            
                                                ">
                                                    <button 
                                                        onClick={()=>payinstallment(p.id)}
                                                        className="
                                                            w-20
                                                            h-10
                                                            bg-primary
                                                            rounded-lg
                                                            ml-5
                                                            text-white
                                                            ">
                                                        پرداخت
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        
                                        </div>
                                    </div>
            )
                                }
                        })
                        }
                    </>:<>
                       {
                            installments.map((p, index) => {
                                if(p.status === "paid"){
                                    return (
                                        <div key={index} className="...">
                                        <div className="
                                        w-[848px]
                                        h-full
                                        rounded-lg
                                        border-[1px]
                                        border-[#EDEDED]
                                        mx-8
                                        mt-8
                                        "
                                        >
                                            <div className="
                                            pr-4
                                            py-4
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
                    </>
                    }
                    </>:<div className="m-4" >
                    رکوردی موجود نمی باشد</div>
            }

            

        </div>
    )
}
export default Settled;