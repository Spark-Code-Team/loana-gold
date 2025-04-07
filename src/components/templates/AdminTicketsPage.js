"use client"
import { useState } from "react";
import Pagination from "../elements/Pagination";

const AdminTicketPage = () =>{

    const users = [
        { 
        id: 1,
        problem: "  1 مشکلات فنی ", 
        date: " 1403/12/1", 
        description: "سلام، می‌خواهم به شما اطلاع دهم که در حین استفاده از سرویس شما، با چند مسئله فنی مواجه شده‌ام که برای من مشکلاتی ایجاد کرده است. اما با این حال، بببببببببببببببببببببببببببببببببببببببببببببببببببب می‌دانم که د. ",
        situation: " در انتطار پاسخ",
     },

     { 
        id: 2,
        problem: " مشکلات فنی ", 
        date: " 1403/12/1", 
        description: "سلام، می‌خواهم به شما اطلاع دهم که در حین استفاده از سرویس شما، با چند مسئله فنی مواجه شده‌ام که برای من مشکلاتی ایجاد کرده است. اما ب د. ",
        situation: " در انتطار پاسخ",
     },
     { 
        id: 3,
        problem: " مشکلات فنی ", 
        date: " 1403/12/1", 
        description: "سلام، می‌خواهم به شما اطلاع دهم که در حین استفاده از سرویس شما، با چند مسئله فنی مواجه شده‌ام که برای من مشکلاتی ایجاد کرده است. اما د د. ",
        situation: " در انتطار پاسخ",
     },
     { 
        id: 4,
        problem: " مشکلات فنی ", 
        date: " 1403/12/1", 
        description: "سلام، می‌خواهم به شما اطلاع دهم که در حین استفاده از سرویس شما، با چند مسئله فنی مواجه شده‌ام که برای من مشکلاتی ایجاد کرده است. اما با این حال،  تلاش می‌کنید تا . ",
        situation: " در انتطار پاسخ",
     },
     { 
        id: 5,
        problem: " مشکلات فنی ", 
        date: " 1403/12/1", 
        description: "سلام، می‌خواهم به شما اطلاع دهم که در حین استفاده از سرویس شما، با چند مسئله فنی مواجه شده‌ام که برای من مشکلاتی ایجاد کرده است. اما با این حال،  تلاش می‌کنید تا . ",
        situation: " در انتطار پاسخ",
     },
     { 
        id: 6,
        problem: " مشکلات فنی ", 
        date: " 1403/12/1", 
        description: "سلام، می‌خواهم به شما اطلاع دهم که در حین استفاده از سرویس شما، با چند مسئله فنی مواجه شده‌ام که برای من مشکلاتی ایجاد کرده است. اما با این حال،  تلاش می‌کنید تا . ",
        situation: " در انتطار پاسخ",
     },
    
      ];

      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 5;
    
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
      const totalPages = Math.ceil(users.length / usersPerPage);

    return (
        <div className="
        md:w-[1016px] 
        md:h-[1000]
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
        md:h-[860px] 
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
                        {currentUsers.map((user, index) => (
                            <tr key={user.id} className=" flex flex-col text-sm border-b-[1px]">
                                <td className="p-2 hidden">{index + 1}</td>
                                <td className="p-2 ">{user.problem}</td>
                                <td className="p-2">{user.date}</td>
                                <td className="
                                p-2 
                                md:max-w-[900px] 
                                max-w-[350px] 
                                truncate 
                                overflow-hidden 
                                whitespace-nowrap 
                                cursor-pointer
                                ">{user.description}</td>
                                <td className="p-2 ">{user.situation}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>

        </div>
        
        <div className="mt-10">
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        />
        </div>
       


            </div>
        </div>
        
    )
}
export default AdminTicketPage;