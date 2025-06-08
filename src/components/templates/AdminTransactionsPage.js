// "use client"
// import DashboardLeft from "../elements/DashboardLeft";
// import React, { useState, useEffect } from "react";
// import { convertToJalali, convertToTime } from "@/utils/setTime";
// import { Bounce, toast } from "react-toastify";
// import AdminTransactionApi from "@/service/AdminTransaction";
// import { ThreeDots } from "react-loader-spinner";

// const AdminTransactions = () => {
//   const [AllTransactions, setAllTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filters, setFilters] = useState({ transaction_type: "", status: "", title: "" });
//   const [page, setPage] = useState(1);

//   const fetchTransactions = async () => {
//     setLoading(true);
//     const query = new URLSearchParams();

//     if (filters.transaction_type) query.append("transaction_type", filters.transaction_type);
//     if (filters.status) query.append("status", filters.status);
//     if (filters.title) query.append("title", filters.title);
//     query.append("page", page);

//     const { response, error } = await AdminTransactionApi(`?${query.toString()}`);
//     if (response) {
//       setAllTransactions(response.data.results);
//     } else {
//       toast.error(error.response?.data?.error || "خطایی رخ داده است");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, [page]);

//   const applyFilters = () => {
//     setPage(1);
//     fetchTransactions();
//   };

//   const getStatusText = (status) => {
//     switch (status?.toLowerCase()) {
//       case "successful": return "موفقیت";
//       case "unsuccessful": return "ناموفق";
//       case "pending": return "در انتظار";
//       default: return "نامشخص";
//     }
//   };

//   const getTransactionType = (transaction_type) => {
//     switch (transaction_type?.toLowerCase()) {
//       case "decremental": return "برداشت";
//       case "incremental": return "واریز";
//       default: return "-";
//     }
//   };

//   const type = (type) => {
//     switch (type) {
//       case 'installment': return 'پرداخت قسط';
//       case "credit": return "درخواست اعتبار";
//       case "charge": return "شارژ کیف پول";
//       default: return "-";
//     }
//   };

//   return (
//     <div className="
//     flex 
//     flex-col 
//     justify-center 
//     items-center
//     ">
//       <div className="
//       w-full 
//       max-w-5xl 
//       p-4 
//       flex 
//       flex-col 
//       gap-3 
//       bg-white 
//       rounded-xl 
//       shadow-sm 
//       border 
//       border-gray-200
//       ">
//         <div className="
//         grid 
//         grid-cols-1 
//         sm:grid-cols-2 
//         md:grid-cols-3 
//         gap-4
//         ">
//           <input
//             type="text"
//             placeholder="عنوان"
//             className="
//             border 
//             border-gray-300 
//             rounded-lg 
//             px-4 
//             py-2 
//             focus:outline-none 
//             focus:ring-2 
//             focus:ring-primary
//             "
//             value={filters.title}
//             onChange={(e) => setFilters(prev => ({ ...prev, title: e.target.value }))}
//           />
//           <select
//             className="
//             border 
//             border-gray-300 
//             rounded-lg 
//             px-4 
//             py-2 
//             bg-white 
//              focus:outline-none 
//             focus:ring-2 
//             focus:ring-primary
//             hover:cursor-pointer
//             "
//             value={filters.transaction_type}
//             onChange={(e) => setFilters(prev => ({ ...prev, transaction_type: e.target.value }))}
//           >
//             <option >نوع تراکنش</option>
//             <option value="incremental">واریز</option>
//             <option value="decremental">برداشت</option>
//           </select>
//           <select
//             className="
//             border 
//             border-gray-300 
//             rounded-lg 
//             px-4 
//             py-2 
//             bg-white 
//             focus:outline-none 
//             focus:ring-2 
//             focus:ring-primary
//             hover:cursor-pointer
//             "
//             value={filters.status}
//             onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
//           >
//             <option>وضعیت</option>
//             <option value="successful" className="hover:bg-primary appearance: none focus:outline-none">موفق</option>
//             <option value="unsuccessful">ناموفق</option>
//             <option value="pending">در انتظار</option>
//           </select>
//         </div>
//         <div className="flex gap-3 mt-2">
//           <button
//             onClick={applyFilters}
//             className="
//             bg-primary 
//             hover:border-[1px] 
//             hover:border-primary 
//             hover:bg-white 
//             transition 
//             text-black
//             px-4 
//             py-2 
//             rounded-lg"
//           >
//             اعمال فیلتر
//           </button>
//           <button
//             onClick={() => {
//               setFilters({ transaction_type: "", status: "", title: "" });
//               setPage(1);
//               fetchTransactions();
//             }}
//             className="
//             bg-primary 
//             hover:border-[1px] 
//             hover:border-primary 
//             hover:bg-white 
//             transition 
//             text-black 
//             px-4 
//             py-2 
//             rounded-lg
//             "
//           >
//             حذف همه فیلترها
//           </button>
//         </div>
//       </div>

//       <div className="w-full max-w-5xl mt-6">
//         <DashboardLeft title="تراکنش ها" />

//         {loading ? (
//           <div className="
//           flex 
//           flex-col 
//           items-center 
//           justify-center 
//           h-[300px]
//           ">
//             <ThreeDots 
//             visible={true} 
//             height="10" 
//             width="80" 
//             color="#3B82F6" 
//             radius="9" 
//             ariaLabel="three-dots-loading
//             "/>
//           </div>
//         ) : (
//           <table className="w-full table-auto mt-4">
//             <thead>
//               <tr>
//                 <th className="p-3 border-b">نام و نام خانوادگی</th>
//                 <th className="p-3 border-b">عنوان</th>
//                 <th className="p-3 border-b">نوع تراکنش</th>
//                 <th className="p-3 border-b">مبلغ</th>
//                 <th className="p-3 border-b">شناسه</th>
//                 <th className="p-3 border-b">تاریخ</th>
//                 <th className="p-3 border-b">وضعیت</th>
//               </tr>
//             </thead>
//             <tbody>
//               {AllTransactions.map((item, index) => (
//                 <tr key={index}>
//                   <td className="p-3 border-b">{item.full_name || "—"}</td>
//                   <td className="p-3 border-b">{item.title || "—"}</td>
//                   <td className="p-3 border-b">{getTransactionType(item.transaction_type)}</td>
//                   <td className="p-3 border-b">{item.amount}</td>
//                   <td className="p-3 border-b">{item.id}</td>
//                   <td className="p-3 border-b">{convertToJalali(item.created_at)}</td>
//                   <td className="p-3 border-b">{getStatusText(item.status)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminTransactions;




"use client"
import DashboardLeft from "../elements/DashboardLeft";
import React, { useState , useEffect } from "react";
import { convertToJalali , convertToTime } from "@/utils/setTime";
import { Bounce, toast } from "react-toastify";
import AdminTransactionApi from "@/service/AdminTransaction";
import { ThreeDots } from "react-loader-spinner";


const AdminTransactions = () => {

  const [AllTransactions , setAllTransactions] = useState()
  const [loading , setLoading] = useState(true)
  const [ transaction , setTransaction ] = useState()

    
        useEffect(()=>{
                 const TransactionAdminPanel = async () => {
                     const {response , error} = await AdminTransactionApi() 
                     if(response){ 
                      setAllTransactions(response.data.results)
                         setLoading(false)
                     }else{
                         toast.error(error.response.data.error)}
                 }
                 TransactionAdminPanel()
         
             } , [])

        const [openIndex, setOpenIndex] = useState(null);
      
        const getStatusText = (status) => {
          switch (status?.toLowerCase()) {
            case "successful":
              return "موفقیت";
            case "unsuccessful":
              return "ناموفق";
            case "pending":
              return "در انتظار";
            default:
              return "نامشخص";
          }
        };

        const getTransactionType = (transaction_type) =>{
          switch (transaction_type?.toLowerCase()) {
            case "decremental":
              return "برداشت";
            case "incremental":
              return "واریز";
          }
        }
        
        
        const type = (type) => {
          switch(type) {
            case 'installment':
              return 'پرداخت قسط'
            case "credit":
              return "درخواست اعتبار"
            case "charge":
              return "شارژ کیف پول"
          }
        }

        
      

    return(
      <div className="
               flex
         flex-col
         justify-center
         items-center">
                <div className="
            w-full
            h-max
            mb-6
            md:flex
            flex-row
            justify-around
            border-[1px]
            rounded-xl
            items-center
            hidden
            ">
            <div className="
            w-[155px] 
                justify-center 
                flex 
                items-center
            "
            >فیلترها</div>

                <div className="
                border-x-[1px] 
                h-[56px] 
                w-[155px] 
                justify-center 
                flex 
                items-center
                ">  عنوان  </div>

                <div className="
                border-l-[1px]
                w-[155px]
                h-[56px]
                flex 
                justify-center 
                items-center
                "
                >  نوع تراکنش </div>

                <div className="
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center
                "> تاریخ تراکنش </div>

                <div className="
                border-x-[1px] 
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center

                "
                >  وضعیت تراکنش </div>

            <div className="  
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center 
                text-[#E90000]">حذف همه فیلترها</div>
    </div>
      <div className="
         w-[912px] 
         h-full
         bg-white
         border-[1px]
         rounded-xl        
         border-[#CBCED7]
         flex
         flex-col
         justify-center
         items-center
        ">

             <DashboardLeft
                title="تراکنش ها"
            />

            <div className="
            w-full
            h-full
            ">
            <div>




        {loading ? (
        <div className="flex flex-col items-center justify-center h-[300px]">
          <ThreeDots
          visible={true}
          height="10"
          width="80"
          color="#3B82F6" // رنگ دلخواه
          radius="9"
          ariaLabel="three-dots-loading"
          />
        </div>

        ) : (

          <table className="w-full table-auto">
          <thead className="w-full">
            <tr>
              <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED]"> نام و نام خانوادگی </th>
              <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0"> عنوان </th>
              <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">نوع تراکنش</th>
              <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0"> مبلغ تراکنش </th>
              <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">شناسه تراکنش</th>
              <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-x last:border-r-0"> تاریخ تراکنش</th>
              <th className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">وضعیت</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {AllTransactions?.map((AllTransactions, index) => (
              <React.Fragment key={index}>
                <tr className="w-full">
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED]">{AllTransactions.full_name || "—"}</td>
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{AllTransactions.title || "—"}</td>
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{getTransactionType(AllTransactions.transaction_type)}</td>
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{AllTransactions.amount}</td>
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{AllTransactions.id}</td>
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{convertToJalali(AllTransactions.created_at)}</td>
                  <td className="w-1/  p-3 border-b border-[#EDEDED] border-r last:border-r-0">{getStatusText(AllTransactions.status)}</td>
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0 "></td>
                </tr>
                {openIndex === index && (
                 <tr className="bg-gray-50 transition-all">
                 <td colSpan="5" className="p-4 border-[#EDEDED] rounded-lg">
                   <div className="grid grid-cols-3 gap-4">
                     <div>
                       <strong>نوع پرداخت:</strong> {type(AllTransactions.transaction_type)}
                     </div>
                     {/* <div>
                       <strong>مبلغ بدهی:</strong> {transaction.debtAmount}
                     </div> */}
                     {/* <div>
                       <strong>پرداخت از کارت:</strong> {transaction.cardUsed}
                     </div> */}
                     {/* <div>
                       <strong>کد رهگیری:</strong> {transaction.trackingCode}
                     </div> */}
                     <div>
                       <strong>زمان :</strong>{convertToTime(AllTransactions.created_at)}
                     </div>
                   </div>
                 </td>
               </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        )}


                </div>
            </div>
        </div>
      </div>
 
    )
};

export default AdminTransactions;
