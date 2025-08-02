import DashboardLeft from "../elements/DashboardLeft";
import Image from "next/image";

const OrdersDashboardPage = () => {
    return(
        <div 
            className="
               md:w-[912px]
               mx-auto
               w-[90%]
               h-[1017px]
               border-[1px]
               border-[#CBCED7]
               rounded-2xl
            "
        >
            
             <DashboardLeft
                title="سفارش ها"
            />

            <div 
               className="
                  md:w-[910px]
                  md:h-[45px]
                  bg-[#FAFAFA]
                  pr-6
                  md:overflow-auto
                  overflow-x-scroll
               "
            >
             <div 
               className="
                  py-2
                  w-full
               "
            >
                <ul className="
                  flex
                  items-center
                  flex-row
                  gap-x-8
                  justify-around
                ">
                  <li 
                     className="
                        font-bold
                        min-w-max
                        cursor-pointer
                     "
                  >
                        مرتب سازی
                  </li>
                  <li
                     className="
                        min-w-max
                        cursor-pointer
                     "
                  >
                     سفارش های اخیر 
                  </li>
                  <li
                     className="
                        min-w-max
                        cursor-pointer
                     "
                  >
                     طلا اب شده 
                  </li>
                  <li
                     className="
                        min-w-max
                        cursor-pointer
                     "
                  >
                     طلا ساخته شده 
                  </li>
                </ul>

             </div>

            </div>

             <div className="
             w-[848px]
             h-[260px]
             mx-auto 
             border-[1px]
             border-[#EDEDED]   
             rounded-xl
             mt-8
             py-4         
             ">
                <div className="
                flex
                flex-row
                border-b-[1px]
                h-[130px]
                ">
                    <Image 
                     src="/images/dashboardgold.png" 
                     alt="dashboardgold" 
                     width={108 } 
                     height={108 }
                     className="
                     w-[108]
                     h-[108]
                     "
                     />

                     <div className="
                     flex
                     flex-col
                     gap-y-1">
                     <p className="
                     font-bold
                     text-[#3B3B3B]
                     ">
                     قطعه طلا آب شده 10.1 گرم
                     </p>
                     <p>
                        24 عیار
                     </p>
                     <p>
                     وزن: 10.1 گرم
                     </p>
                     <p className="
                     text-black
                     font-bold">
                     1,807,790,874 تومان
                     </p>
                     </div>
                    

                </div>

                <div>

                </div>

                <div className="
                flex
                flex-row
                pr-4
                pt-4
                ">
                     <div className="
                     flex
                     flex-col
                     gap-y-1">
                     <p>
                        کد رهگیری:87563109 
                     </p>
                     <p>
                        تاریخ ثبت سفارش: 1403/04/10 _ 15:23
                     </p>
                     <p>
                        وضعیت: در انتظار تایید توسط فروشگاه
                     </p>
                    
                     </div>
                    
                </div>

             </div>

             <div className="
             w-[848px]
             h-[260px]
             mx-auto 
             border-[1px]
             border-[#EDEDED]   
             rounded-xl
             mt-8
             py-4         
             ">
                <div className="
                flex
                flex-row
                border-b-[1px]
                h-[130px]
                ">
                    <Image 
                     src="/images/ringm.png" 
                     alt="dashboardgold" 
                     width={108 } 
                     height={108 }
                     className="
                     mx-4
                     w-[108]
                     h-[108]
                     "
                     />

                     <div className="
                     flex
                     flex-col
                     gap-y-1">
                     <p className="
                     font-bold
                     text-[#3B3B3B]
                     ">
                     انگشتر طلا نگین دار 7 میلی متری
                     </p>
                     <p>
                        18 عیار
                     </p>
                     <p>
                     وزن: 10.1 گرم
                     </p>
                     <p className="
                     text-black
                     font-bold">
                     1,807,790,874 تومان
                     </p>
                     </div>
                    

                </div>

                <div>

                </div>

                <div className="
                flex
                flex-row
                pr-4
                pt-4
                ">
                     <div className="
                     flex
                     flex-col
                     gap-y-1">
                     <p>
                        کد رهگیری:87563109 
                     </p>
                     <p>
                        تاریخ ثبت سفارش: 1403/04/10 _ 15:23
                     </p>
                     <p>
                        وضعیت: 
                        <span className="text-base pr-1 text-[#2FA766]">
                        ثبت شده
                        </span>
                     </p>
                    
                     </div>

                </div>
                
             </div>

             <div className="
             w-[848px]
             h-[260px]
             mx-auto 
             border-[1px]
             border-[#EDEDED]   
             rounded-xl
             mt-8
             py-4         
             ">
                <div className="
                flex
                flex-row
                border-b-[1px]
                h-[130px]
                ">
                    <Image 
                     src="/images/ringring.png" 
                     alt="dashboardgold" 
                     width={108 } 
                     height={108 }
                     className="
                     w-[108]
                     h-[108]
                     mx-4
                     "
                     />

                     <div className="
                     flex
                     flex-col
                     gap-y-1">
                     <p className="
                     font-bold
                     text-[#3B3B3B]
                     ">
                     انگشتر طلا نگین دار 7 میلی متری
                     </p>
                     <p>
                        24 عیار
                     </p>
                     <p>
                     وزن: 10.1 گرم
                     </p>
                     <p className="
                     text-black
                     font-bold">
                     1,807,790,874 تومان
                     </p>
                     </div>
                    

                </div>

                <div>

                </div>

                <div className="
                flex
                flex-row
                pr-4
                pt-4
                ">
                     <div className="
                     flex
                     flex-col
                     gap-y-1">
                     <p>
                        کد رهگیری:87563109 
                     </p>
                     <p>
                        تاریخ ثبت سفارش: 1403/04/10 _ 15:23
                     </p>
                     <p>
                        وضعیت: 
                        <span className="text-base pr-1 text-[#E90000]">
                        لغو شده
                        </span>
                     </p>
                    
                     </div>
                    
                </div>
                
             </div>
        
        </div>
    )
}
export default OrdersDashboardPage;