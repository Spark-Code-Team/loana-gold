"use client"
import DashboardLeft from "../elements/DashboardLeft";
import { useState ,useEffect } from "react";
import { sendTicket } from "@/service/tickets";
import TicketCoversation from "../modules/ticketDashboard/TicketConversation";
import TicketConversationPage from "./TicketConversationPage";
import Link from "next/link";

const TicketDashboardPage = () =>{

    const [ ticket , setTicket ] = useState({
        title:"",
        message:""
    })

    const [ myTickets , setMyTickets ] = useState()

    useEffect(()=>{
        
    } , [])

    const snedData = async () => {
        const { response , error } = await sendTicket(ticket)
        if(response){
            console.log(response);
            
        }else{
            console.log(error)
        }
    }
     
    return(
        <div className="
        w-[912px]
        h-max
        border-[1px]
        border-[#CBCED7]
        rounded-2xl
        ">
            <DashboardLeft
            title="ارسال تیکت"
            />

            <div className="
            h-12
            w-full
            flex
            flex-row
            items-center
            mt-5
            ">
               <input
               type="text"
               placeholder=" موضوع تیکت"
               className="
               w-[848px]
               h-[40px]
               focus:outline-none 
               focus:border-[#E1E1E1] 
               focus:ring-0
               border-[1px] 
               border-[#E1E1E1] 
               rounded-xl
               mx-auto 
               "
               value={ticket.title}
               onChange={(e) => {
                setTicket(prev => ({
                  ...prev,
                  title: e.target.value
                }));}}
               />

            </div>

            <div className="
            w-[848px]
            h-[330px]
            mx-8
            mt-4
            ">
                 <textarea
                    className="
                    w-full 
                    h-[352px]
                    p-2 
                    mt-1 
                    focus:outline-none 
                    focus:border-[#E1E1E1] 
                    focus:ring-0
                    border-[1px] 
                    border-[#E1E1E1] 
                    rounded-xl
                    "
                    value={ticket.message}
                    onChange={(e) => {
                     setTicket(prev => ({
                       ...prev,
                       message: e.target.value
                     }));}}
                    required
                ></textarea>

                <div className="
                flex
                justify-end
                ">
                <button className="
                hover:bg-primary
                hover:text-[#EDEDED]
                w-[98px]
                h-8
                bg-[#EDEDED]
                rounded-xl
                text-sm
                text-[#7A7A7A]
                "
                onClick={snedData} 
                >
                    ارسال تیکت
                </button>
                </div>

                
             
            </div>

            <div className="
            w-[848px]
            h-max
            rounded-lg
            border-[1px]
            border-[#E1E1E1] 
            mx-8
            p-4
            mt-20
            ">
             

                    <p className="font-bold">
                    لیست تیکت ها
                    </p>

                    <div className="border-[1px] p-4 m-4 rounded-lg" >

                    <div className="
                    w-[800px]
                    h-80
                    grid
                    grid-cols-4
                    gap-x-6
                    gap-y-4
                    py-4
                    ">
                        <td>
                        <p className="font-bold mb-[12px] ">
                            موضوع
                        </p>
                        <tr>
                        <p>
                         کیف پول
                        </p>
                        </tr>
                        </td>

                        <td>
                        <p className="font-bold mb-[12px]">
                            متن درخواست
                        </p>
                        <tr>
                        <p>
                        با عرض سلام و خسته نباشید من دو روزه که میخوام کیف پولم رو شارژ کنم اما وارد پروسه پرداخت که میشم با پیغام خطا از سمت سامانه شما مواجه میشم، لطفا من رو راهنمایی کنید، سپاس
                        </p>
                        </tr>
                        </td>

                        <td>
                        <p className="font-bold mb-[12px]">
                            زمان
                        </p>
                        <tr>
                        <p>
                        1403/02/25
                        </p>
                        </tr>
                        </td>

                        <td>
                        <p className="font-bold mb-[12px]">
                            وضعیت
                        </p>
                        <tr>
                        <p>
                            پاسخ داده شده
                        </p>
                        </tr>
                        </td>
                    </div>

                    <div className="border-[1px] rounded-lg m-[12px] p-[12px] ">
                        <p className="text-[#595959]">
                        پاسخ پشتیبانی: سلام وقت بخیر مثلا پرداخت مشکل داشت و الان برطرف شده لطفا دوباره امتحان کنید
                        </p>
                    </div>

                <Link href="http://localhost:3000/dashboard/ticket-conversation">
                <button className="
                    bg-slate-700
                    "
                    >
                        الکی
                    </button>
                </Link>
                   
                    

                    
                    </div>
                
             
            </div>

            

        </div>
    )
}
export default TicketDashboardPage;