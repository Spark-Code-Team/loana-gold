"use client"
import { useState , useEffect } from "react";
import Pagination from "../elements/Pagination";
import Image from "next/image";
import OrderSuccess from "../modules/buying/OrderSu";
import OrderUns from "../modules/buying/OrderUns";
import Sana from "../modules/receivingCredit/Sana";
import PhoneSana from "../modules/receivingCredit/PhoneSana";
import SanaRes from "../modules/receivingCredit/SanaRes";
import { getTickets } from "@/service/tickets";
import { convertToJalali } from "@/utils/setTime";

const AdminTicketPage = () =>{

    const [ allTickets , setAllTickets ] = useState()


    useEffect(()=>{
         const myTickets = async () => {
             const {response , error} = await getTickets() 
             if(response){ 
                 setAllTickets(response.data)
             }else{
                 toast.error(error.response.data.error)}
         }
         myTickets()
 
     } , [])


    return (
        <div className="
        md:w-[1016px] 
        md:h-full
        md:rounded-xl
        ">
            <div className="
            w-[843px]
            h-[56px]
            md:flex
            flex-row
            justify-around
            border-[1px]
            rounded-xl
            items-center
            hidden
            ">
                
                <div className="">فیلترها</div>

                <div className="
                border-[1px] 
                h-[56px] 
                w-[203px] 
                justify-center 
                flex 
                items-center
                ">مرتب سازی بر اساس</div>

                <div>موضوع تیکت</div>

                <div className="
                border-[1px] 
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center
                ">تاریخ دریافت</div>

                <div className="text-[#E90000]">حدف همه فیلترها</div>

            </div>

        <div className="
        md:w-[1016px]
        md:h-full 
        md:border-[1px]
        md:rounded-xl
        md:mt-6
        ">
       <div className="
       md:hidden 
       flex 
       mb-6 
       w-[375px] 
       mr-2 
       flex-row 
       justify-between
       ">
        <p className="font-bold">تیکت های پشتیبانی</p>
        <p>فیلترها</p>
        </div>

        <div className="
         md:flex
         ">
           <table className="md:w-full w-[375px] ">
                    <tbody>
                        {allTickets?.map((p, index) => (
                            <tr key={p.id} className=" flex flex-col text-sm border-b-[1px]">
                                <td className="p-2 ">موضوع : {p.title}</td>
                                <td className="p-2">تاریخ : {convertToJalali(p.created_at)}</td>
                                <td className="
                                p-2 
                                md:max-w-[900px] 
                                max-w-[350px] 
                                overflow-hidden 
                                ">
                                متن پیام : {p.message}
                                </td>
                                <td className="p-2 ">
                                وضعیت : {p.replies.length == 0? 
                                <>
                                در انتظار پاسخ
                                </>:<>
                                پاسخ داده شده
                                </> }</td>
                            </tr>
                        ))}
                    </tbody>
            </table>

        </div>
        
        {/* <div className="mt-10">
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        />
        </div> */}
       


        </div>
    
        </div>
        
    )
}
export default AdminTicketPage;