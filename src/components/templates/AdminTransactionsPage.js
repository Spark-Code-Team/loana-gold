"use client"
const AdminTransactions = () =>{

    const users = [
        { 
        id: 1,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        typeOftransaction: "واریز",
        costOftransaction: " 300/000/000 تومان ",
        dateOftransaction: "14/12/11",
        situation: "موفق"
     },
     { 
        id: 2,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        typeOftransaction: "واریز",
        costOftransaction: " 300/000/000 تومان ",
        dateOftransaction: "14/12/11",
        situation: "موفق"
     },
     { 
        id: 3,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        typeOftransaction: "واریز",
        costOftransaction: " 300/000/000 تومان ",
        dateOftransaction: "14/12/11",
        situation: "موفق"
     },
     { 
        id: 4,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        typeOftransaction: "واریز",
        costOftransaction: " 300/000/000 تومان ",
        dateOftransaction: "14/12/11",
        situation: "موفق"
     },
     { 
        id: 5,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        typeOftransaction: "واریز",
        costOftransaction: " 300/000/000 تومان ",
        dateOftransaction: "14/12/11",
        situation: "موفق"
     },
     { 
        id: 6,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        typeOftransaction: "واریز",
        costOftransaction: " 300/000/000 تومان ",
        dateOftransaction: "14/12/11",
        situation: "موفق"
     },
     { 
        id: 7,
        name: "مهدی جعفرپور", 
        title: " شارژ کیف پول ", 
        typeOftransaction: "واریز",
        costOftransaction: " 300/000/000 تومان ",
        dateOftransaction: "14/12/11",
        situation: "موفق"
     },
    
      ];

    return(
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
         mt-6 
         overflow-hidden 
         rounded-xl
         border-[1px]
        ">

           <table className="w-full">
                    <thead className="border-b-[1px]">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3 border-x-[1px]">نام و نام خانوادگی</th>
                            <th className="p-3">عنوان</th>
                            <th className="p-3 border-x-[1px]"> نوع تراکنش </th>
                            <th className="p-3">مبلغ تراکنش</th>
                            <th className="p-3">تاریخ تراکنش</th>
                            <th className="p-3 border-x-[1px]">  وضعیت </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {users.map((user, index) => (
                            <tr key={user.id} className="text-center hover:bg-gray-100">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 border-x-[1px]">{user.name}</td>
                                <td className="p-3">{user.title}</td>
                                <td className="p-3 border-x-[1px]">{user.typeOftransaction}</td>
                                <td className="p-3 border-x-[1px]">{user.costOftransaction}</td>
                                <td className="p-3 border-x-[1px]">{user.dateOftransaction}</td>
                                <td className="p-3">{user.situation}</td>
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
      



        </div>



            
        </div>
    )
}
export default AdminTransactions;