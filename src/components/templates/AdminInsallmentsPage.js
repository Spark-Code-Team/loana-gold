"use client"
import { useEffect, useState } from "react";
import Pagination from "../elements/Pagination";
import AdminInsallmentsApi from "@/service/AdminInsallments";
import { ThreeDots } from "react-loader-spinner";


const AdminInsallmentsPage = () =>{

   
     const [AllInsallments , setAllInsallments] = useState()
     const [loading , setLoading] = useState(true)


     
     useEffect(()=>{
      const InsallmentsAdminPanel = async () => {
          const {response , error} = await AdminInsallmentsApi() 
          if(response){ 
           setAllInsallments(response.data.results)
              setLoading(false)
          }else{
              toast.error(error.response.data.error)}
      }
      InsallmentsAdminPanel()

  } , [])

   

    return (
        <div className="
        md:w-[1016px] 
        md:h-[1000]
        md:rounded-xl
        ">
           


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
          color="#D2AB67"   
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
                            <th className="p-3">اقساط پرداخت شده</th>
                            <th className="p-3 border-x-[1px]">  اقساط پرداخت نشده </th>
                            <th className="p-3"> مبلغ قسط این ماه </th>
                            <th className="p-3 border-x-[1px]"> موعد پرداخت این ماه </th>
                            <th className="p-3 ">  جریمه </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {AllInsallments.map((AdminInsallments, index) => (
                            <tr key={AdminInsallments.id} className="text-center hover:bg-gray-100">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 border-x-[1px]">{AdminInsallments.full_name}</td>
                                <td className="p-3">{AdminInsallments.paid_count}</td>
                                <td className="p-3 border-x-[1px]">{AdminInsallments.unpaid_count}</td>
                                <td className="p-3 border-x-[1px]">{AdminInsallments.amount_due}</td>
                                <td className="p-3 border-x-[1px]">{AdminInsallments.due_date}</td>
                                <td className="p-3">{AdminInsallments.penalty}</td>
                              
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
      //   currentPage={currentPage}
      //   totalPages={totalPages}
      //   onPageChange={(page) => setCurrentPage(page)}
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

      {/* {AllInsallments.map((item, index) => (
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
      ))} */}

      </div>

        </div>
    )
}
export default AdminInsallmentsPage;