"use client"
import { useEffect, useState } from "react";
import Pagination from "../elements/Pagination";
import AdminLoansApi from "@/service/AdminLoans";
import { ThreeDots } from "react-loader-spinner";
import { convertToJalali } from "@/utils/setTime";

const AdminDealingPage = () =>{

    const [AllLoans , setAllLoans] = useState()
    const [loading , setLoading] = useState(true)

    useEffect (()=>{
        const LoansAdminPanel = async () => {
            const {response , error} = await AdminLoansApi() 
            if(response){ 
             setAllLoans(response.data.results)
                setLoading(false)
            }else{
                toast.error(error.response.data.error)}
        }
        LoansAdminPanel()
    },[])

    const getStatusText = (status) => {
        switch (status?.toLowerCase()) {
          case "in_progress":
            return "درحال بررسی";
          case "completed":
            return "تمام";
          case "cancelled":
            return " کنسل شده ";
        
        }
      };
    
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
             {loading ? (
                    <div className="
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    h-[300px]
                    ">
                      <ThreeDots
                      visible={true}
                      height="10"
                      width="80"
                      color="#3B82F6"   
                      radius="9"
                      ariaLabel="three-dots-loading"
                      />
                    </div>
            
                    ) : (

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
                        {AllLoans.map((AllLoans, index) => (
                            <tr key={AllLoans.id} className="text-center hover:bg-gray-100">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 border-x-[1px]">{AllLoans.user}</td>
                                <td className="p-3">{getStatusText(AllLoans.status)}</td>
                                <td className="p-3 border-x-[1px]">{AllLoans.amount}</td>
                                <td className="p-3 border-x-[1px]">{AllLoans.total_amount_due}</td>
                                <td className="p-3 border-x-[1px]">{convertToJalali(AllLoans.created_at)}</td>
                              
                            </tr>
                        ))}
                    </tbody>
            </table>
                      )}

        </div>
       
       <div className="
       hidden
       md:block
       ">
       <Pagination
       
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


       </div>
        
      
    </div>
    )
}
export default AdminDealingPage;