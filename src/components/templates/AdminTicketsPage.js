"use client"
import { useState } from "react";
import Pagination from "../elements/Pagination";

const AdminTicketPage = () =>{

    const users = [
        { 
        id: 1,
        problem: "  1 مشکلات فنی ", 
        date: " 1403/12/1", 
        description: "سلام، می‌خواهم به شما اطلاع دهم که در حین استفاده از سرویس شما، با چند مسئله فنی مواجه شده‌ام که برای من مشکلاتی ایجاد کرده است. اما با این حال، می‌دانم که همیشه تلاش می‌کنید تا بهترین خدمات را به مشتریانتان ارائه دهید. بنابراین، امیدوارم مشکلات فنی رفع شود و تجربه استفاده از سرویس شما برایم بهتر شود. ",
        situation: " در انتطار پاسخ",
     },

     { 
        id: 2,
        problem: " مشکلات فنی ", 
        date: " 1403/12/1", 
        description: "سلام، می‌خواهم به شما اطلاع دهم که در حین استفاده از سرویس شما، با چند مسئله فنی مواجه شده‌ام که برای من مشکلاتی ایجاد کرده است. اما با این حال، می‌دانم که همیشه تلاش می‌کنید تا بهترین خدمات را به مشتریانتان ارائه دهید. بنابراین، امیدوارم مشکلات فنی رفع شود و تجربه استفاده از سرویس شما برایم بهتر شود. ",
        situation: " در انتطار پاسخ",
     },
      ];

      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 1;
    
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
      const totalPages = Math.ceil(users.length / usersPerPage);

    return (
        <div className="
        w-[1016px] 
        h-[1000]
        rounded-xl
        ">
            <div className="
            w-[843px]
            h-[56px]
            flex
            flex-row
            justify-around
            border-[1px]
            rounded-xl
            items-center
            
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
            w-[1016px]
            h-[860px]
            border-[1px]
            rounded-xl
            mt-6
            ">



        <div className="
         flex
         ">
           <table className="w-full">
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={user.id} className=" flex flex-col">
                                <td className="p-3 hidden">{index + 1}</td>
                                <td className="p-3">{user.problem}</td>
                                <td className="p-3">{user.date}</td>
                                <td className="p-3">{user.description}</td>
                                <td className="p-3 border-b-[1px] ">{user.situation}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>

        </div>

        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        />







                {/* <div className="
                w-[1009px]
                h-[148px]
                border-b-[1px]
                space-y-3
                pr-4
                mt-6
                ">
                    <p>
                    مشکلات فنی
                    </p>
                    <p>
                    1403/12/1
                    </p>
                    <p>
                    سلام، می‌خواهم به شما اطلاع دهم که
                     در حین استفاده از سرویس شما، با چند مسئله فنی مواجه
                     شده‌ام که برای من مشکلاتی ایجاد کرده است.   
                    </p>
                    <p className="text-[#2FA766]">
                    #پاسخ داده شده
                    </p>
                </div>

                <div className="
                w-[1009px]
                h-[148px]
                border-b-[1px]
                space-y-3
                pr-4
                mt-6
                ">
                    <p>
                    مشکلات فنی
                    </p>
                    <p>
                    1403/12/1
                    </p>
                    <p>
                    سلام، می‌خواهم به شما اطلاع دهم که
                     در حین استفاده از سرویس شما، با چند مسئله فنی مواجه
                     شده‌ام که برای من مشکلاتی ایجاد کرده است.   
                    </p>
                    <p className="text-[#2FA766]">
                    #پاسخ داده شده
                    </p>
                </div>

                <div className="
                w-[1009px]
                h-[148px]
                border-b-[1px]
                space-y-3
                pr-4
                mt-6
                ">
                    <p>
                    مشکلات فنی
                    </p>
                    <p>
                    1403/12/1
                    </p>
                    <p>
                    سلام، می‌خواهم به شما اطلاع دهم که
                     در حین استفاده از سرویس شما، با چند مسئله فنی مواجه
                     شده‌ام که برای من مشکلاتی ایجاد کرده است.   
                    </p>
                    <p className="text-[#ECB000]">
                    #در انتظار پاسخ
                    </p>
                </div>

                <div className="
                w-[1009px]
                h-[148px]
                border-b-[1px]
                space-y-3
                pr-4
                mt-6
                ">
                    <p>
                    مشکلات فنی
                    </p>
                    <p>
                    1403/12/1
                    </p>
                    <p>
                    سلام، می‌خواهم به شما اطلاع دهم که
                     در حین استفاده از سرویس شما، با چند مسئله فنی مواجه
                     شده‌ام که برای من مشکلاتی ایجاد کرده است.   
                    </p>
                    <p className="text-[#2FA766]">
                    #پاسخ داده شده
                    </p>
                </div>

                <div className="
                w-[1009px]
                h-[148px]
                space-y-3
                pr-4
                mt-6
                ">
                    <p>
                    مشکلات فنی
                    </p>
                    <p>
                    1403/12/1
                    </p>
                    <p>
                    سلام، می‌خواهم به شما اطلاع دهم که
                     در حین استفاده از سرویس شما، با چند مسئله فنی مواجه
                     شده‌ام که برای من مشکلاتی ایجاد کرده است.   
                    </p>
                    <p className="text-[#2FA766]">
                    #پاسخ داده شده
                    </p>
                </div> */}

            </div>
        </div>
        
    )
}
export default AdminTicketPage;