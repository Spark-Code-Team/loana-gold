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
            setTicket({
                title:"",
                body:""
            })            
        }else{
            toast.error(error.response.data.error)}
    }
     
    return(
        <div className="
        w- full
        h-max
        border-[1px]
        border-[#CBCED7]
        rounded-2xl
        p-3
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
               w-full
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
            w-full
            h-[330px]
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
            w-full
            h-max
            rounded-lg
            border-[1px]
            border-[#E1E1E1] 
            p-4
            mt-20
            mb-7
            ">
             

                    <p className="font-bold">
                    لیست تیکت ها
                    </p>
                    {weHaveData ? (
  allTickets.length > 0 ? (
    <>
      {allTickets.map((p, index) => (
        <Link href={`/dashboard/ticket-conversation/${p.id}`} key={index}>
          <div className="border border-gray-300 hover:ring-2 hover:ring-primary transition duration-300 p-4 mb-4 rounded-lg">
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                gap-4
              "
            >
              <div className="break-words">
                <p className="font-bold mb-2">موضوع</p>
                <p>{p.title}</p>
              </div>

              <div className="break-words">
                <p className="font-bold mb-2">متن درخواست</p>
                <p>{p.body}</p>
              </div>

              <div>
                <p className="font-bold mb-2">زمان</p>
                <p>{convertToJalali(p.created_at)}</p>
              </div>

              <div>
                <p className="font-bold mb-2">وضعیت</p>
                <p>
                  {p.messages.length === 0 ? "در انتظار پاسخ" : "پاسخ داده شده"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  ) : (
    <>تیکتی ثبت نشده است</>
  )
) : (
  <div className="w-full flex justify-center py-10">
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="primary"
      radius="9"
      ariaLabel="three-dots-loading"
    />
  </div>
)}





                    

                
             
            </div>

                    

            

        </div>
    )
}
export default TicketDashboardPage;