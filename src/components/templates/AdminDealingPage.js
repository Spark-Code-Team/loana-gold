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

  
    const [dateFilter, setDateFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [MinFilter, setMinFilter] = useState('');
    const [MaxFilter, setMaxFilter] = useState('');

  
  
    const fetchFilteredLoans = async () => {
      let query = '?';
      if (MinFilter) query += `min_amount=${MinFilter}&`; 
      if (MaxFilter) query += `max_amount=${MaxFilter}&`; 
      if (statusFilter) query += `status=${statusFilter}&`;
      if (dateFilter) query += `date=${dateFilter}&`;
    
      setLoading(true);
      
      console.log("Filtering with query:", query);
    
      const { response, error } = await AdminLoansApi(query);
      if (response) {
        setAllLoans(response.data.results);
      } else {
        toast.error(error?.response?.data?.error || "خطا در دریافت اطلاعات");
      }
      setLoading(false);
    };
    
  
    useEffect(() => {
      fetchFilteredLoans();
    }, [MinFilter, MaxFilter, dateFilter, statusFilter]);




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
            w-full
            h-[56px]
            md:flex
            flex-row
            justify-between
            border-[1px]
            rounded-xl
            items-center
            hidden
            ">
            <div className="
            w-[155px] 
            h-full 
            justify-center 
            flex 
            items-center
            ">فیلترها</div>

                <div className="
                border-r-[1px] 
                h-[56px] 
                w-[155px] 
                justify-center 
                flex 
                items-center
                ">
                <select className="
                border-none
                focus:outline-none 
                focus:ring-2 
               focus:ring-white
                hover:cursor-pointer
                w-36
                "
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                >
                        <option>وضعیت معامله</option>
                        <option value="in_progress"> درحال بررسی </option>
                        <option value="cancelled"> کنسل شده </option>
                        <option value="completed"> تمام </option>
                    </select>
                </div>


                <div className="
                border-[1px] 
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center
                "> تاریخ معامله </div>

<div className="
flex 
items-center 
space-x-2 
border-l-[1px] 
h-full 
">

<div className="
flex
flex-row
w-[260px]
">
 <input
    type="number"
    placeholder="حداقل قیمت"
    className="
    border-[1px] 
    border-[#e5e7eb] 
    p-2 
    rounded-md 
    w-[120px] 
    focus:outline-none 
    focus:ring-0 
    focus:border-none
    "
    value={MinFilter}
    onChange={(e) => setMinFilter(e.target.value)}
  />
  <input
    type="number"
    placeholder="حداکثر قیمت"
    className="
    border-[1px] 
    border-[#e5e7eb] 
    p-2 
    rounded-md 
    w-[120px] 
    mr-2 
    focus:outline-none 
    focus:ring-0 
    focus:border-none
    "
    value={MaxFilter}
    onChange={(e) => setMaxFilter(e.target.value)}
  />
</div>
 
  {/* <button
    onClick={fetchFilteredLoans}
    className="bg-primary text-white px-4 py-2 rounded-md "
  >
    فیلتر
  </button> */}

</div>

            <div className="
            w-[155px] 
            h-full 
            justify-center 
            flex 
            items-center
            text-[#E90000]
            "
           
            >
            <button  
            onClick={() => {
                setMinFilter('');
                setMaxFilter('');
                setStatusFilter('');
                setDateFilter('');
                fetchFilteredLoans();
              }}>
            حدف همه فیلترها 
            </button>
            </div>

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