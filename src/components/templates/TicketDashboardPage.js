"use client"
import DashboardLeft from "../elements/DashboardLeft";
import { useState ,useEffect } from "react";
import { getTickets, sendTicket } from "@/service/tickets";
import { convertToJalali } from "@/utils/setTime";
import { Bounce, toast } from "react-toastify";
import Link from "next/link";
import { ThreeDots } from "react-loader-spinner";


const TicketDashboardPage = () =>{

    const [ ticket , setTicket ] = useState({
        title:"",
        body:""
    })


    const [reload, setReload] = useState(false)
    const [ allTickets , setAllTickets ] = useState()
    const [weHaveData, setWeHaveData] = useState(false);


    useEffect(()=>{
        const myTickets = async () => {
            const {response , error} = await getTickets() 
            if(response){ 
                setAllTickets(response.data)
                setWeHaveData(true)
            }else{
                toast.error(error.response.data.error)}
        }
        myTickets()

    } , [reload])


    const snedData = async () => {
        const { response , error } = await sendTicket(ticket)
        if(response){
            console.log(response);
            setReload(prev => !prev)            
        }else{
            toast.error(error.response.data.error)}
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
                    value={ticket.body}
                    onChange={(e) => {
                     setTicket(prev => ({
                       ...prev,
                       body: e.target.value
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
                    { weHaveData?<>
                        {
                        allTickets.length>0?<>                     {
                            allTickets?.map((p , index) => {
                                return(
                                    <Link href={`/dashboard/ticket-conversation/${p.id}`}>   
                                            <div key={index} className="border-[1px] p-4 m-4 rounded-lg" >
    
                                            <div className="
                                            w-full
                                            h-full
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
                                                    {p.title}
                                                </p>
                                                </tr>
                                                </td>
    
                                                <td>
                                                <p className="font-bold mb-[12px]">
                                                    متن درخواست
                                                </p>
                                                <tr>
                                                <p>
                                                    {p.body}
                                                </p>
                                                </tr>
                                                </td>
    
                                                <td>
                                                <p className="font-bold mb-[12px]">
                                                    زمان
                                                </p>
                                                <tr>
                                                <p>
                                                    {convertToJalali(p.created_at)}
                                                </p>
                                                </tr>
                                                </td>
    
                                                <td>
                                                <p className="font-bold mb-[12px]">
                                                    وضعیت
                                                </p>
                                                <tr>
                                                <p>
                                                        {p.messages.length == 0? 
                                                        <>
                                                        در انتظار پاسخ
                                                        </>:<>
                                                        پاسخ داده شده
                                                        </> }
                                                </p>
                                                </tr>
                                                </td>
                                            </div>
                                                
    
    
                                            </div>    
                                    </Link>
    
                                )
                            })
                         }</>:<>تیکت ثبت شده ای وجود ندارد</>
                     }</>:<>
                <ThreeDots
                    visible={true}
                    top="5"
                    height="10"
                    width="80"
                    color="primary"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                /></>}





                    

                
             
            </div>

                    

            

        </div>
    )
}
export default TicketDashboardPage;