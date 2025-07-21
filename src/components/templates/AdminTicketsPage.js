"use client"
import { useState , useEffect } from "react";
import Pagination from "../elements/Pagination";
import Image from "next/image";
import OrderSuccess from "../modules/buying/OrderSu";
import OrderUns from "../modules/buying/OrderUns";
import Sana from "../modules/receivingCredit/Sana";
import PhoneSana from "../modules/receivingCredit/PhoneSana";
import SanaRes from "../modules/receivingCredit/SanaRes";
import { convertToJalali } from "@/utils/setTime";
import { toast } from "react-toastify";
import { getAllTickets, paginatedGetTickets } from "@/service/adminTickets";
import Link from "next/link";

const AdminTicketPage = () =>{

    const [ allTickets , setAllTickets ] = useState()
    const [loading , setLoading] = useState(false)
    const [weHaveData , setWeHaveData] = useState(false)
      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 5;
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = allTickets?.results.slice(indexOfFirstUser, indexOfLastUser);
      const totalPages = Math.ceil(allTickets?.count / usersPerPage);

    useEffect(()=>{
         const myTickets = async () => {
             const {response , error} = await getAllTickets() 
             if(response){ 
                 setAllTickets(response.data)
                 setLoading(prev=>!prev)
                 setWeHaveData(true)
             }else{
                 toast.error(error.response?.data.error)}
         }
         myTickets()
 
     } , [])

     const changePage = (pageNum) =>{ 
        let param = `?limit=${usersPerPage}&offset=${pageNum*usersPerPage-usersPerPage}`
        onPageChange(param)
     }

// این تیکه آزمایشیه و باید حذف بشه در آینده موقع قرار دادن روی سرور یا اینکه آدرس لوکال هاست زیر به آدرس سایت تغییر کنه
     function getPathAndQueryPart(url) {
        const urlObj = new URL(url, 'http://localhost:8000');
        const search = urlObj.search; 
        return search;
      }

     const onPageChange = async (url) => {
        const {response , error} = await getAllTickets(url)
        if(response){ 
            setAllTickets(response.data)
            setLoading(prev=>!prev)
        }else{
            toast.error(error.response.data.error)}
     }


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

                <div className="text-[#E90000]">حذف همه فیلترها</div>

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
           <table className="w-full ">
                    <tbody>
                    {
                        allTickets?.results.map((p , index) => {
                            return(
                                
                                <Link href={`/admin/ticket-conversation/${p.id}`}> 
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
                                                    {p.is_closed? 
                                                    <>
                                                    بسته شده
                                                    </>:
                                                    <>
                                                    در جریان
                                                    </>}
                                            </p>
                                            </tr>
                                            </td>
                                        </div>
                                        </div>    
                                </Link>

                            )
                        })
                     }
                    </tbody>
            </table>

        </div>

        <div className="flex justify-center items-center gap-2 mt-4">
                    <button
                        disabled ={allTickets?.previous? false : true}
                        onClick={async() => {
                            await onPageChange(getPathAndQueryPart(allTickets?.previous))
                            setCurrentPage(currentPage-1)
                        }}
                        className={`
                            w-10 
                            h-10
                            flex 
                            items-center 
                            justify-center 
                            rounded-lg 
                            border-[1px]
                            text-primary 
                            ${allTickets?.previous? 'border-primary':'bg-gray-200'}
                          `}
                       >
                            {'<'}
                        </button>


                <div className="hidden md:block">
                    <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                        changePage(page)
                        setCurrentPage(page)}}
                    />
                </div>

                    <button
                        disabled ={allTickets?.next? false : true}
                        onClick={async () => {
                            await onPageChange(getPathAndQueryPart(allTickets?.next))
                            setCurrentPage(currentPage+1)
                        }}
                        className={`
                            w-10 
                            h-10 
                            flex 
                            items-center 
                            justify-center 
                            rounded-lg 
                            border-[1px]
                            text-primary 
                            ${allTickets?.next? 'border-primary':'bg-gray-200'}
                          `}
                        >
                            {'>'}
                        </button>



        </div>
        

       


        </div>
    
        </div>
        
    )
}
export default AdminTicketPage;