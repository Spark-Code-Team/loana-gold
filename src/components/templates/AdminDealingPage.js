const AdminDealingPage = () =>{

    const users = [
        { 
        id: 1,
        name: "مهدی جعفرپور", 
        typeOfDealing: " شارژ کیف پول ", 
        gold: "واریز",
        cost: " 300/000/000 تومان ",
        date: "14/12/11",
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
                        {users.map((user, index) => (
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
      
        </div>
    )
}
export default AdminDealingPage;