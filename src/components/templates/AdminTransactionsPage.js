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

  const [titleFilter, setTitleFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');


  const fetchFilteredTransactions = async () => {
    let query = '?';
    if (titleFilter) query += `type=${titleFilter}&`; 
    if (typeFilter) query += `transaction_type=${typeFilter}&`; 
    if (statusFilter) query += `status=${statusFilter}&`;
    if (dateFilter) query += `date=${dateFilter}&`;
  
    setLoading(true);
    
    console.log("Filtering with query:", query);
  
    const { response, error } = await AdminTransactionApi(query);
    if (response) {
      setAllTransactions(response.data.results);
    } else {
      toast.error(error?.response?.data?.error || "خطا در دریافت اطلاعات");
    }
    setLoading(false);
  };
  

  useEffect(() => {
    fetchFilteredTransactions();
  }, [titleFilter, typeFilter, dateFilter, statusFilter]);



    
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
                flex-col
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
                value={titleFilter}
                onChange={(e) => setTitleFilter(e.target.value)}
                >
                  <option className="
                  bg-white
                  appearance-none
                  "> عنوان </option>
                  <option value="charge">شارژ کیف پول</option>
                  <option value="credit">درخواست اعتبار</option>
                  <option value="installment">پرداخت قسط</option>
                </select>
                </div>

                <div className="
                border-l-[1px]
                w-[155px]
                h-[56px]
                flex 
                justify-center 
                items-center
                "
                > 
                 <select className="
                border-none
                focus:outline-none 
                focus:ring-2 
               focus:ring-white
                hover:cursor-pointer
                w-36
                "
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option className="
                  bg-white
                  appearance-none
                  "> نوع تراکنش </option>
                  <option value="incremental">واریز</option>
                  <option value="decremental">برداشت</option>
                </select>

                </div>

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
                >  

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
                  <option className="
                  bg-white
                  appearance-none
                  "> وضعیت تراکنش </option>
                  <option value="successful">موفقیت</option>
                  <option value="unsuccessful">ناموفق</option>
                  <option value="unknown">در انتظار</option>
                </select>

                </div>

            <div className="  
                h-[56px] 
                w-[155px] 
                flex 
                justify-center 
                items-center 
                text-[#E90000]
                hover:cursor-pointer"
                onClick={() => {
                  setTitleFilter('');
                  setTypeFilter('');
                  setStatusFilter('');
                  setDateFilter('');
                }}
                >حذف همه فیلترها
            </div>

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
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED]">{AllTransactions.user_full_name || "—"}</td>
                  <td className="w-1/7 p-3 border-b-[1px] border-[#EDEDED] border-r last:border-r-0">{AllTransactions.type || "—"}</td>
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
