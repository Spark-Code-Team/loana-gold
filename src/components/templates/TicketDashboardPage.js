"use client"
import DashboardLeft from "../elements/DashboardLeft";

const TicketDashboardPage = () =>{
    return(
        <div className="
        w-[912px]
        h-[1200px]
        border-[1px]
        border-[#CBCED7]
        rounded-2xl
        ">
            <DashboardLeft
            title="ارسال تیکت"
            />

            <div className="
            h-12
            w-full
            flex
            flex-row
            items-center
            mt-5
            ">
               <input
               type="text"
               placeholder=" موضوع تیکت"
               className="
               w-[848px]
               h-[40px]
               focus:outline-none 
               focus:border-[#E1E1E1] 
               focus:ring-0
               border-[1px] 
               border-[#E1E1E1] 
               rounded-xl
               mx-auto 
               "
               
               />

            </div>

            <div className="
            w-[848px]
            h-[330px]
            mx-8
            mt-4
            ">
                 <textarea
                    className="
                    w-full 
                    h-[352px]
                    p-2 
                    mt-1 
                    focus:outline-none 
                    focus:border-[#E1E1E1] 
                    focus:ring-0
                    border-[1px] 
                    border-[#E1E1E1] 
                    rounded-xl
                    "
                    required
                ></textarea>

                <div className="
                flex
                justify-end
                ">
                <button className="
                w-[98px]
                h-8
                bg-[#EDEDED]
                rounded-xl
                text-sm
                text-[#7A7A7A]
                ">
                    ارسال تیکت
                </button>
                </div>

                
             
            </div>

            <div className="
            w-[848px]
            h-[600px]
            rounded-lg
            border-[1px]
            border-[#EDEDED]
            mx-8
            pr-4
            pt-4
            mt-20
            ">
             

                    <p className="font-bold">
                    لیست تیکت ها
                    </p>

                    <div>

                    <div className="
                    w-[800px]
                    h-80
                    grid
                    grid-cols-4
                    gap-x-6
                    gap-y-4
                    pt-4
                    ">
                        <p className="font-bold">
                            موضوع
                        </p>
                        <p className="font-bold">
                            متن درخواست
                        </p>
                        <p className="font-bold">
                            زمان
                        </p>
                        <p className="font-bold">
                            وضعیت
                        </p>

                        <p>
                        شارژ کیف پول
                        </p>
                        <p>
                        با عرض سلام و خسته نباشید من دو روزه که میخوام کیف پولم رو شارژ کنم اما وارد پروسه پرداخت که میشم با پیغام خطا از سمت سامانه شما مواجه میشم، لطفا من رو راهنمایی کنید، سپاس
                        </p>
                        <p>
                        1403/02/25
                        </p>
                        <p>
                            پاسخ داده شده
                        </p>

                    </div>

                    <div className="border-b-[1px]">
                        <p className="text-[#595959]">
                        پاسخ پشتیبانی: سلام وقت بخیر مثلا پرداخت مشکل داشت و الان برطرف شده لطفا دوباره امتحان کنید
                        </p>
                    </div>
                    
                    <div className="
                    w-[800px]
                    grid
                    grid-cols-4
                    gap-x-6
                    gap-y-4
                    pt-10
                    ">
                        <p>
                        دریافت طلا 
                        </p>
                        <p>
                        با عرض سلام و خسته نباشید من میخوام ادرس تغییر بدم برای دریافت طلا اما فیلد بسته هست نمیشه تغییر داد
                        </p>
                        <p>
                        1378/08/24
                        </p>
                        <p>
                            در انتظار پاسخ
                        </p>


                    </div>

                    
                </div>
                
             
            </div>

            

        </div>
    )
}
export default TicketDashboardPage;