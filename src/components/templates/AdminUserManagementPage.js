"use client"

import { useState } from "react";
import Pagination from "../elements/Pagination";
const AdminUserManagementPage = () => {

    const users = [
        { id: 1, name: "مهدی جعفرپور", balance: "۸ گرم", phone: "09158112345" },
        { id: 2, name: "فائقه کریمی", balance: "۷.۵ گرم", phone: "09158456789" },
        { id: 3, name: "علیرضا قاسم زاده", balance: "۵ گرم", phone: "09151234567" },
        { id: 4, name: "سازان قانعی منفرد", balance: "۳.۲۵ گرم", phone: "09157896543" },
        { id: 5, name: "حمید محمدی", balance: "۴ گرم", phone: "09151237654" },
        { id: 6, name: "مهدی جعفرپور", balance: "۸ گرم", phone: "09158112345" },
        { id: 7, name: "فائقه کریمی", balance: "۷.۵ گرم", phone: "09158456789" },
        { id: 8, name: "علیرضا قاسم زاده", balance: "۵ گرم", phone: "09151234567" },
        { id: 9, name: "سازان قانعی منفرد", balance: "۳.۲۵ گرم", phone: "09157896543" },
        { id: 10, name: "حمید محمدی", balance: "۴ گرم", phone: "09151237654" },
      ];
      const [selectedUser, setSelectedUser] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 5;
    
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
      const totalPages = Math.ceil(users.length / usersPerPage);

    return(

    <div>

    <div className="
        md:w-[1016px] w-full
        md:h-10
        md:flex
        flex-col
        md:flex-row
        md:justify-between
        md:items-center
        ">
            <div>
                <input 
                type="search"
                placeholder="جستجو"
                className="
                md:w-96 w-[375px]
                h-10
                rounded-xl
                border-[#A6A6A6]
                focus:border-[#A6A6A6]
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:mr-0
                mr-2
                "
                />
            </div>

            <div>
                <button className="
                md:w-[156px] w-[375px]
                h-10
                mt-4
                md:mt-0
                rounded-xl
                border-[1px]
                border-primary
                focus:border-parimary
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                text-primary
                md:mr-0
                mr-2
                ">
                     + ثبت کاربر جدید
                </button>
            </div>

    </div>

    <div className="
         md:w-[1016px] w-[375px]
         mt-6 
         md:overflow-hidden 
         rounded-xl
         border-[1px]
         hidden
         md:block
        ">

           <table className="md:w-full w-[375px] ">
                    <thead className="border-b-[1px]">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3 border-x-[1px]">نام و نام خانوادگی</th>
                            <th className="p-3">موجودی طلا (گرم)</th>
                            <th className="p-3 border-x-[1px]">شماره تلفن</th>
                            <th className="p-3">تنظیمات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {currentUsers.map((user, index) => (
                            <tr key={user.id} className="text-center hover:bg-gray-100">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 border-x-[1px]">{user.name}</td>
                                <td className="p-3">{user.balance}</td>
                                <td className="p-3 border-x-[1px]">{user.phone}</td>
                                <td className="p-3">

                                    <button className="px-2 py-1 border rounded-lg mx-1" 
                                    onClick={() => setSelectedUser(user)}>✏️</button>

                                    <button className="px-2 py-1 border rounded-lg">🗑</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

   


    <div className="flex">
      <div
        className={`
            fixed 
            left-0 
            top-0 
            h-full 
            bg-white 
            shadow-md 
            p-4 
            w-80 
            transition-transform
             ${
          selectedUser ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {selectedUser && (
          <>
            <h2 className="mb-4 text-base">ویرایش کاربر</h2>
            <label className="block mb-2">نام و نام خانوادگی:</label>
            <input
              type="text"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.name}
              onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
            />
            <label className="block mb-2">موجودی طلا:</label>
            <input
              type="text"
              className="border p-2 w-full mb-2"
              value={selectedUser.balance}
              onChange={(e) => setSelectedUser({ ...selectedUser, balance: e.target.value })}
            />
            <label className="block mb-2">شماره تلفن:</label>
            <input
              type="text"
              className="border-[1px] p-2 w-full mb-4"
              value={selectedUser.phone}
              onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
              ذخیره تغییرات
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded w-full mt-2"
              onClick={() => setSelectedUser(null)}
            >
              بستن
            </button>
          </>
        )}
      </div>
    </div>
  
    </div>

    <div className="hidden md:block">
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        />
    </div>

       
      <div>
        <div
          className="
            md:hidden
            w-[375px]
            h-[144px]
            mr-2
            mt-6
            border-b-[1px]
            border-[#CBCED7]
          "
        >
          <div className="flex flex-row justify-between">
            <p>مهدی جعفر پور</p>
            <div>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1]"> 1 </button>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1] mr-4"> 2 </button>
            </div>
          </div>

            <p>
            09125981035
            </p>

            <p className="mt-6">
            موجودی طلا: 8 گرم
            </p>
          
        </div>

        <div
          className="
            md:hidden
            w-[375px]
            h-[144px]
            mr-2
            mt-6
            border-b-[1px]
            border-[#CBCED7]
          "
        >
          <div className="flex flex-row justify-between">
            <p>مهدی جعفر پور</p>
            <div>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1]"> 1 </button>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1] mr-4"> 2 </button>
            </div>
          </div>

            <p>
            09125981035
            </p>

            <p className="mt-6">
            موجودی طلا: 8 گرم
            </p>
          
        </div>

        <div
          className="
            md:hidden
            w-[375px]
            h-[144px]
            mr-2
            mt-6
            border-b-[1px]
            border-[#CBCED7]
          "
        >
          <div className="flex flex-row justify-between">
            <p>مهدی جعفر پور</p>
            <div>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1]"> 1 </button>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1] mr-4"> 2 </button>
            </div>
          </div>

            <p>
            09125981035
            </p>

            <p className="mt-6">
            موجودی طلا: 8 گرم
            </p>
          
        </div>

        <div
          className="
            md:hidden
            w-[375px]
            h-[144px]
            mr-2
            mt-6
            border-b-[1px]
            border-[#CBCED7]
          "
        >
          <div className="flex flex-row justify-between">
            <p>مهدی جعفر پور</p>
            <div>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1]"> 1 </button>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1] mr-4"> 2 </button>
            </div>
          </div>

            <p>
            09125981035
            </p>

            <p className="mt-6">
            موجودی طلا: 8 گرم
            </p>
          
        </div>

        <div
          className="
            md:hidden
            w-[375px]
            h-[144px]
            mr-2
            mt-6
            border-b-[1px]
            border-[#CBCED7]
          "
        >
          <div className="flex flex-row justify-between">
            <p>مهدی جعفر پور</p>
            <div>
              <button className="
              w-12 
              h-12 
              rounded-xl 
              border-[1px] 
              border-[#E1E1E1]
              "> 1 </button>
              <button className="
              w-12 
              h-12 
              rounded-xl 
              border-[1px] 
              border-[#E1E1E1] 
              mr-4
              "> 2 </button>
            </div>
          </div>

            <p>
            09125981035
            </p>

            <p className="mt-6">
            موجودی طلا: 8 گرم
            </p>
          
        </div>

        <div
          className="
            md:hidden
            w-[375px]
            h-[144px]
            mr-2
            mt-6
          "
        >
          <div className="flex flex-row justify-between">
            <p>مهدی جعفر پور</p>
            <div>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1]"> 1 </button>
              <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1] mr-4"> 2 </button>
            </div>
          </div>

            <p>
            09125981035
            </p>

            <p className="mt-6">
            موجودی طلا: 8 گرم
            </p>
          
        </div>

      </div>
       

    </div>
    )
}
export default AdminUserManagementPage;