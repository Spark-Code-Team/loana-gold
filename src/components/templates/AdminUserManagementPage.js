"use client"

import { useEffect, useState } from "react";
import Pagination from "../elements/Pagination";
import {  deleteUser, getAllUsers, updateUser } from "@/service/adminUsers";
const AdminUserManagementPage = () => {

  const [users , setUsers] = useState()
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    const getUsers = async () => {
      const {response , error} = await getAllUsers()
        if(response){
         setUsers(response.data)
        }else{
          console.log(error)
        }
    }
    getUsers()
  },[loading])


  const deleteAccount = async (id) => {
    const {response , error} = await deleteUser(id)
    if(response){
      setLoading(prev=>!prev)
    }else{
      console.log(error)
    }
  }




  const updateAccount = async (data) => {
    console.log(data , 'this is new log')
    const {response ,error} = await updateUser(data)
    if(response){
      setLoading(prev=>!prev)
    }else{
      console.log(error)
    }
  }



      const [selectedUser, setSelectedUser] = useState(null);
    //   const [currentPage, setCurrentPage] = useState(1);
    //   const usersPerPage = 5;
    
    //   const indexOfLastUser = currentPage * usersPerPage;
    //   const indexOfFirstUser = indexOfLastUser - usersPerPage;
    //   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    //   const totalPages = Math.ceil(users.length / usersPerPage);

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
                            <th className="p-3 border-x-[1px]">موجودی نقدی</th>
                            <th className="p-3 border-x-[1px]">موجودی طلا (گرم)</th>
                            <th className="p-3 border-x-[1px]">موجودی نقره (گرم)</th>
                            <th className="p-3 border-x-[1px]">شماره تلفن</th>
                            <th className="p-3">تنظیمات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {users?.results.map((user, index) => (
                            <tr key={user.id} className="text-center hover:bg-gray-100">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 border-x-[1px]">{user.first_name} {user.last_name}</td>
                                <td className="p-3 border-x-[1px]" >{user.cash_wallet}</td>
                                <td className="p-3 border-x-[1px]" >{user.gold_wallet}</td>
                                <td className="p-3 border-x-[1px]" >{user.silver_wallet}</td>
                                <td className="p-3 border-x-[1px]">{user.phone_number}</td>
                                <td className="p-3">

                                    <button className="px-2 py-1 border rounded-lg mx-1" 
                                    onClick={() => setSelectedUser(user)}>✏️</button>

                                    <button className="px-2 py-1 border rounded-lg"
                                      onClick={()=>{deleteAccount(user.id)}}>🗑</button>

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
            w-max
            transition-transform
             ${
          selectedUser ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {selectedUser && (
          <div 
            className="overflow-y-auto h-screen pl-5 pb-5 "
          >
            <h2 className="mb-4 text-base">ویرایش کاربر</h2>

            <label className="block mb-2">نام:</label>
            <input
              type="text"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.first_name}
              onChange={(e) => setSelectedUser({ ...selectedUser, first_name: e.target.value })}
            />

            <label className="block mb-2"> نام خانوادگی:</label>
            <input
              type="text"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.last_name}
              onChange={(e) => setSelectedUser({ ...selectedUser, last_name: e.target.value })}
            />

            <label className="block mb-2"> شماره تلفن:</label>
            <input
              type="number"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.phone_number}
              onChange={(e) => setSelectedUser({ ...selectedUser, phone_number: e.target.value })}
            />

            <label className="block mb-2">شبا:</label>
            <input
              type="number"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.sheba}
              onChange={(e) => setSelectedUser({ ...selectedUser, sheba: e.target.value })}
            />

            <label className="block mb-2">کد ملی:</label>
            <input
              type="number"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.national_code}
              onChange={(e) => setSelectedUser({ ...selectedUser, national_code: e.target.value })}
            />

            <label className="block mb-2">ایمیل:</label>
            <input
              type="email"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.email}
              onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
            />

            <label className="block mb-2">نقش کاربر:</label>
            <input
              type="number"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.role}
              onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
            />

            <label className="block mb-2">نام بانک:</label>
            <input
              type="text"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.bank_name}
              onChange={(e) => setSelectedUser({ ...selectedUser, bank_name: e.target.value })}
            />

            <label className="block mb-2">موجودی طلا:</label>
            <input
              type="number"
              className="border text-base p-2 w-full mb-2"
              value={selectedUser.gold_wallet}
              onChange={(e) => setSelectedUser({ ...selectedUser, gold_wallet: e.target.value })}
            />

            <label className="block mb-2">موجودی نقره:</label>
            <input
              type="number"
              className="border p-2 w-full mb-2"
              value={selectedUser.silver_wallet}
              onChange={(e) => setSelectedUser({ ...selectedUser, silver_wallet: e.target.value })}
            />

            <label className="block mb-2"> موجودی نقدی:</label>
            <input
              type="number"
              className="border-[1px] p-2 w-full mb-4"
              value={selectedUser.cash_wallet}
              onChange={(e) => setSelectedUser({ ...selectedUser, cash_wallet: e.target.value })}
            />

            <button 
              onClick={()=>{updateAccount(selectedUser)}}
              className="bg-green-500 text-white px-4 py-2 rounded w-full">
              ذخیره تغییرات
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded w-full mt-2"
              onClick={() => setSelectedUser(null)}
            >
              بستن
            </button>
          </div>
        )}
      </div>
    </div>
  
    </div>

    {/* <div className="hidden md:block">
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        />
    </div> */}

      
  {/* <div>
  {users.map((user, index) => (
    <div
      key={index}
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
        <p>{user.name}</p>
        <div>
          <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1]">1</button>
          <button className="w-12 h-12 rounded-xl border-[1px] border-[#E1E1E1] mr-4">2</button>
        </div>
      </div>

      <p>{user.phone}</p>

      <p className="mt-6">موجودی طلا: {user.balance}</p>
    </div>
  ))}
</div> */}

</div>
    )
}
export default AdminUserManagementPage;