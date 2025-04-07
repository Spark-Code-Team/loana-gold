"use client"
import { useState } from "react";
import Pagination from "../elements/Pagination";
const AdminInsallmentsPage = () =>{

    const users = [
        { 
        id: 1,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 2,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 3,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 4,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 

     { 
        id: 5,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 6,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 7,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 8,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     },
     
     { 
        id: 9,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 10,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 11,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
     { 
        id: 12,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        settlesInsallments: "واریز",
        unSettlesInsallments: " 300/000/000 تومان ",
        constInsallments: "14/12/11",
        dateInsallments: "موفق",
        penalty: "جریمه"
     }, 
      ];

      const installments = [
         {
           name: "محسن پورپاک",
           amount: "900,0000,00000",
           date: "1401/2/1",
           paid: 3,
           unpaid: 1,
           penalty: "ندارد",
         },
         {
           name: "محسن پورپاک",
           amount: "900,0000,00000",
           date: "1401/2/1",
           paid: 3,
           unpaid: 1,
           penalty: "ندارد",
         },
         {
           name: "محسن پورپاک",
           amount: "900,0000,00000",
           date: "1401/2/1",
           paid: 3,
           unpaid: 1,
           penalty: "ندارد",
         },
         {
            name: "محسن پورپاک",
            amount: "900,0000,00000",
            date: "1401/2/1",
            paid: 3,
            unpaid: 1,
            penalty: "ندارد",
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
        w-[1016px]
        mt-6 
        overflow-hidden 
        rounded-xl
        border-[1px]
        hidden
        md:block
        ">

           <table className="w-full">
                    <thead className="border-b-[1px]">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3 border-x-[1px]">نام و نام خانوادگی</th>
                            <th className="p-3">اقساط پرداخت شده</th>
                            <th className="p-3 border-x-[1px]">  اقساط پرداخت نشده </th>
                            <th className="p-3"> مبلغ قسط این ماه </th>
                            <th className="p-3 border-x-[1px]"> موعد پرداخت این ماه </th>
                            <th className="p-3 ">  جریمه </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {currentUsers.map((user, index) => (
                            <tr key={user.id} className="text-center hover:bg-gray-100">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 border-x-[1px]">{user.name}</td>
                                <td className="p-3">{user.settlesInsallments}</td>
                                <td className="p-3 border-x-[1px]">{user.unSettlesInsallments}</td>
                                <td className="p-3 border-x-[1px]">{user.constInsallments}</td>
                                <td className="p-3 border-x-[1px]">{user.dateInsallments}</td>
                                <td className="p-3">{user.penalty}</td>
                              
                            </tr>
                        ))}
                    </tbody>
            </table>

        </div>

        <div className="
        hidden
        md:block
        ">
         <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        />
        </div>

        <div className="
        md:hidden
        w-[375px]
        h-[839px]
        mr-2
        ">
         <p className="font-bold text-xl">
            اقساط
         </p>

      {installments.map((item, index) => (
      <div key={index} className="border-b-[1px] pb-2">
      <div>
      <p>{item.name}</p>
      </div>
      <p>مبلغ قسط این ماه: {item.amount} تومان</p>
      <p>موعد پرداخت: {item.date}</p>
      <p>اقساط پرداخت شده: {item.paid}</p>
      <p>اقساط پرداخت نشده: {item.unpaid}</p>
      <p>جریمه: {item.penalty}</p>
      </div>
      ))}

      </div>

        </div>
    )
}
export default AdminInsallmentsPage;