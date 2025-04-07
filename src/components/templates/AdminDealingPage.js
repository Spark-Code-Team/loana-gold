"use client"
import { useState } from "react";
import Pagination from "../elements/Pagination";

const AdminDealingPage = () =>{
    
    const userss=[
        { 
        id: 1,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "1 گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    }, 
    { 
        id: 2,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "1 گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 1,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "1 گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    }, 
    { 
        id: 2,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "1 گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    ]
    const users = [
    { 
        id: 1,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "1 گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    }, 
    { 
        id: 2,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "1 گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 3,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "2گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 4,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "3گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 5,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "5گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 6,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "8گرم",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 7,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "واریز",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 8,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "واریز",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 9,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "واریز",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 10,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "واریز",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
    { 
        id: 11,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "واریز",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
    },
     
      ];

    
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);
    
    return(
        
        <div className="
        w-[1016px] 
        h-[1000]
        rounded-xl
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
                ">  نوع معامله </div>

                <div> مقدار طلا </div>

                <div className="
                border-[1px] 
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center
                "> تاریخ معامله </div>

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
                            <th className="p-3"> نوع معامله </th>
                            <th className="p-3 border-x-[1px]">    مقدار طلا </th>
                            <th className="p-3"> مبلغ    </th>
                            <th className="p-3 border-x-[1px]">   تاریخ  </th>
                            
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {currentUsers.map((user, index) => (
                            <tr key={user.id} className="text-center hover:bg-gray-100">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 border-x-[1px]">{user.name}</td>
                                <td className="p-3">{user.typeOfDealing}</td>
                                <td className="p-3 border-x-[1px]">{user.gold}</td>
                                <td className="p-3 border-x-[1px]">{user.cost}</td>
                                <td className="p-3 border-x-[1px]">{user.date}</td>
                              
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
       h-[720px]
       mr-2
       "> 
        <p className="font-bold text-xl">
        تاریخچه معاملات
        </p>

      {userss.map((item, index) => (
      <div key={index} className="border-b-[1px] pb-2">
      <div>
      <p>{item.name}</p>
      </div>
      <p>  نوع معامله:  {item.typeOfDealing} تومان</p>
      <p> مقدار طلا: {item.gold}</p>
      <p>  مبلغ:: {item.cost}</p>
      <p>  تاریخ معامله: {item.date}</p>
      </div>
      ))}

       </div>
        
      
        </div>
    )
}
export default AdminDealingPage;