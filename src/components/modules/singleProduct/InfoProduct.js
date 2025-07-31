"use client"

import { Profile } from "@/service/profile";
import { UserProfile } from "@/stores/profileStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";


const InfoProduct = () => {

    const profile = UserProfile()
    const router = useRouter()
    
    useEffect(() => {  
        if(!profile.data.role){
            const fetchProfile = async () => {
            const {response , error} = await Profile()
            if (response){
                profile.setProfile(response.data); 
            }
        }

            fetchProfile()
        }
    }, [profile.data.role]);  

    return(
        
        <div className="w-1/2 ">

            <div className="flex flex-col">
            <h1 className="text-xl font-bold pb-6">انگشتر طلا نگین دار 7 میلی متری</h1>
              <p className="text-lg mt-2">عیار: 24</p>
              <p className="text-lg mt-2">وزن: 10.1 گرم</p>
              <p className="text-lg mt-2">این محصول بدون اجرت است</p>
              <p className="text-lg mt-2">   موجود در انبار - ارسال از 15 بهمن </p>
              <p className="text-lg mt-2">  </p>
            </div>
            

            <div>
            <select className="
               focus:outline-none 
               focus:ring-0 
               focus:border-gray-400
               w-[600px] 
               h-14 
               border-[1px] 
               border-[#E1E1E1] 
               p-2 
               rounded-xl 
               mt-6 
               ">
                <option className="
                ">
                رنگ را انتخاب کنید</option>
                <option className="
                ">طلایی</option>
                <option className="
                ">نقره‌ای</option>
              </select>

              <select className="
               focus:outline-none 
               focus:ring-0 
               focus:border-gray-400
               w-[600px] 
               h-14 
               border-[1px] 
               border-[#E1E1E1] 
               p-2 
               rounded-xl 
               mt-6 
               ">
                <option className="
                ">
                سایز را انتخاب کنید
                </option>

                <option className="
                ">10 
                </option>

                <option className="
                ">10
                </option>

              </select>

              <select className="
               focus:outline-none 
               focus:ring-0 
               focus:border-gray-400
               w-[600px] 
               h-14 
               border-[1px] 
               border-[#E1E1E1] 
               p-2 
               rounded-xl 
               mt-6 
               ">
                <option className="
                ">
                 وزن طلا قابل انتخاب   
                </option>

                <option className="
                ">10گرم
                </option>

                <option className="
                ">20گرم
                </option>

              </select>

             

            </div>
              
            <div className="
             mt-4 
             w-[600px]
             justify-between
             flex 
             h-12
             ">
                <div>
                <p className="
                 text-xl 
                 font-bold 
                 ">
                    قیمت: ۱۸,۸۷۹,۸۷۴ تومان
                </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <button 
                    className="
                      bg-[#f0c884]
                      hover:bg-[#D2AB67] 
                      rounded-lg 
                      w-fit
                      px-3
                      h-12
                      transition-all
                    "
                    onClick={() => {
                      if(profile.data.role) {
                        router.push("/dashboard/gold-artifacts")
                      } else {
                        toast.info("برای خرید ابتدا باید ورود کنید")
                        router.push("/Sign-in")
                      }
                    }}
                  >
                    خرید قسطی
                  </button>
                  <button 
                    onClick={() => {
                      toast.success("خرید شما با موفقیت انجام شد")
                      router.push("/Shop")
                    }}
                    className="
                      bg-[#f0c884]
                      hover:bg-[#D2AB67] 
                      rounded-lg 
                      w-fit
                      px-3
                      h-12
                      transition-all
                    "
                  >
                    خرید نقدی
                  </button>
                </div>
            </div>

            <div className="
            h-[105px]
            rounded-xl
            w-[600px]
            mt-8
            border-[1px]
            border-[#E1E1E1]
            ">
                <p className="
                pr-2
                mt-4">
                پرداخت قسطی
                </p>

                <div className="
                flex
                mt-4
                justify-between
                px-2
                ">
                    <p > هر قسط: 3,173,489 تومان </p>
                    <p> ۴ قسط ماهانه. بدون سود، چک و ضامن. </p>

                </div>

            </div>


            </div>
    )
}
 export default InfoProduct;