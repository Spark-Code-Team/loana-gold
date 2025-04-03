"use client"
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
      ];

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
                            <th className="p-3">اقساط پرداخت شده</th>
                            <th className="p-3 border-x-[1px]">  اقساط پرداخت نشده </th>
                            <th className="p-3"> مبلغ قسط این ماه </th>
                            <th className="p-3 border-x-[1px]"> موعد پرداخت این ماه </th>
                            <th className="p-3 ">  جریمه </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {users.map((user, index) => (
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
      
        </div>
    )
}
export default AdminInsallmentsPage;