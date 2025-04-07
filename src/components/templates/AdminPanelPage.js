"use client"
import Image from "next/image";
import PintUp from "../../../public/icons/PointUp";
import Pagination from "../elements/Pagination";
import { useState } from "react";
const AdminPanelPage = () => {

    const users = [
        { id: 1, name: "مهدی", title: "شارژ", typeOftransaction: "واریز", costOftransaction: "100", dateOftransaction: "1403/01/01", situation: "موفق" },
        { id: 2, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 3, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 4, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 5, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 6, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 7, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 8, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 9, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 10, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 11, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 12, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 13, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 14, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 15, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 16, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 17, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 18, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 19, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
        { id: 20, name: "سارا", title: "خرید طلا", typeOftransaction: "برداشت", costOftransaction: "200", dateOftransaction: "1403/01/02", situation: "در انتظار" },
    
      ];
    
      const transactions = [
        {
          title: "برداشت از کیف پول نقدی",
          amount: "9,000,000,000 تومان",
          type: "برداشت",
          status: "موفق",
          time: "14:21",
          date: "1403/27/5",
        },
        {
          title: "برداشت از کیف پول نقدی",
          amount: "9,000,000,000 تومان",
          type: "برداشت",
          status: "موفق",
          time: "14:21",
          date: "1403/27/5",
        },
        {
          title: "برداشت از کیف پول نقدی",
          amount: "9,000,000,000 تومان",
          type: "برداشت",
          status: "موفق",
          time: "14:21",
          date: "1403/27/5",
        },
        {
          title: "برداشت از کیف پول نقدی",
          amount: "9,000,000,000 تومان",
          type: "برداشت",
          status: "موفق",
          time: "14:21",
          date: "1403/27/5",
        },
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 5;
    
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
      const totalPages = Math.ceil(users.length / usersPerPage);




    return (
        <div className="">
            <div className="
            w-[1016px]
            flex
            flex-col
            
            ">
                <div className="
                flex 
                flex-row 
                justify-between
                ">
                <div className="
                w-[290px]
                h-[161px]
                rounded-xl
                bg-white
                shadow-xl
                flex
                flex-col
                justify-center
                items-center
                space-y-4
                ">
                    <div className="
                    w-[245px]
                    h-[72px]
                    ">

                    <div className="
                    flex
                    flex-row
                    justify-between
                    ">
                        <div className="flex flex-col justify-between">
                        <p >
                        میزان طلای فروخته شده
                        </p>
                        <p className="font-bold">
                        480 Kg
                        </p>
                        </div>
                        <Image
                        src="/images/pinkii.png"
                        alt="icon"
                        width={70}
                        height={70}
                        />
                        </div> 
                    </div>
                    

                    <div className="
                    w-[245px]
                    h-[24px]
                    flex
                    flex-row
                    justify-evenly
                    ">
                        <span>
                            3.7%
                        </span>
                        <p>
                        افزایش در 7 روز گذشته
                        </p>
                        
                        <p>
                            <PintUp/>
                        </p>


                    </div>

                </div>

                <div className="
                w-[290px]
                h-[161px]
                rounded-xl
                bg-white
                shadow-xl
                flex
                flex-col
                justify-center
                items-center
                space-y-4
                ">
                    <div className="
                    w-[245px]
                    h-[72px]
                    ">

                    <div className="
                    flex
                    flex-row
                    justify-between
                    ">
                        <div className="flex flex-col justify-between">
                        <p >
                        میزان طلای فروخته شده
                        </p>
                        <p className="font-bold">
                        480 Kg
                        </p>
                        </div>
                        <Image
                        src="/images/greny.png"
                        alt="icon"
                        width={70}
                        height={70}
                        />
                        </div> 
                    </div>
                    

                    <div className="
                    w-[245px]
                    h-[24px]
                    flex
                    flex-row
                    justify-evenly
                    ">
                        <span>
                            3.7%
                        </span>
                        <p>
                        افزایش در 7 روز گذشته
                        </p>
                        
                        <p>
                            <PintUp/>
                        </p>


                    </div>

                </div>

                <div className="
                w-[290px]
                h-[161px]
                rounded-xl
                bg-white
                shadow-xl
                flex
                flex-col
                justify-center
                items-center
                space-y-4
                ">
                    <div className="
                    w-[245px]
                    h-[72px]
                    ">

                    <div className="
                    flex
                    flex-row
                    justify-between
                    ">
                        <div className="flex flex-col justify-between">
                        <p >
                        میزان طلای فروخته شده
                        </p>
                        <p className="font-bold">
                        480 Kg
                        </p>
                        </div>
                        <Image
                        src="/images/browny.png"
                        alt="icon"
                        width={70}
                        height={70}
                        />
                        </div> 
                    </div>
                    

                    <div className="
                    w-[245px]
                    h-[24px]
                    flex
                    flex-row
                    justify-evenly
                    ">
                        <span>
                            3.7%
                        </span>
                        <p>
                        افزایش در 7 روز گذشته
                        </p>
                        
                        <p>
                            <PintUp/>
                        </p>


                    </div>

                </div>

                </div>
              

                <div className="
                shadow-md
                ">
                <Image
                src="/Images/picnem.png"
                alt="icon"
                width={1016}
                height={494}
                className="
                
                "
                />
                </div>

            </div>

            <div className="
            mt-6
            ">
                <p>
                تاریخچه تراکنش ها
                </p>

                <div>
                <div className="
                mt-6
                 w-[1016px] 
                 rounded-xl
                 ">

    <div className="
        w-[1016px]
        mt-6 
        overflow-hidden 
        rounded-xl
        border-[1px]
        md:block
        hidden
        ">

        <table className="w-full">
        <thead>
          <tr>
            <th className="p-2">#</th>
            <th className="p-2 border-x-[1px]">نام و نام خانوادگی</th>
            <th className="p-2">عنوان</th>
            <th className="p-2 border-x-[1px]">نوع تراکنش</th>
            <th className="p-2">مبلغ تراکنش</th>
            <th className="p-2 border-x-[1px]">تاریخ تراکنش</th>
            <th className="p-2">وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} className="text-center border-t">
              <td className="p-2">{indexOfFirstUser + index + 1}</td>
              <td className="p-2 border-x-[1px]">{user.name}</td>
              <td className="p-2">{user.title}</td>
              <td className="p-2 border-x-[1px]">{user.typeOftransaction}</td>
              <td className="p-2">{user.costOftransaction}</td>
              <td className="p-2 border-x-[1px]">{user.dateOftransaction}</td>
              <td className="p-2">{user.situation}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>


<div className="md:hidden w-[375px] mr-2">

  <p className="font-bold">تراکنش ها</p>

  {transactions.map((tx, index) => (
    <div key={index}>
      <div className="space-y-2">
        <p>{tx.title}</p>
        <p>{tx.amount}</p>
        <p>نوع تراکنش: {tx.type}</p>
      </div>

      <div className="
      flex 
      flex-row 
      justify-between 
      mt-2 
      border-b-[1px]
      border-[#E1E1E1] 
      pb-3
      ">
        <p>وضعیت: {tx.status}</p>
        <p>
          {tx.time} {tx.date}
        </p>
      </div>
    </div>
  ))}
</div>

   

    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

    </div>
                </div>



            </div>

            
        </div>
    )
}
export default AdminPanelPage;