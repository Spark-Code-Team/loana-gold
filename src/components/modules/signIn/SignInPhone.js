import Link from "next/link";
import PhoneLogin from "../../../../public/icons/PhoneLogin";
import AuthPageStruct from "./AuthPageStruct";
import { useState } from "react";
import { login } from "@/service/auth";
import { otp } from "@/service/auth";
import { setCookie } from "@/utils/cookies";
import { Bounce, toast } from "react-toastify";

const SignInPhone =({ loginState, setLoginState }) =>{

    const [phoneNumber, setPhoneNumber] = useState()

    const handleSendData = async () => {
        const {response , error} = await login(phoneNumber)    
        if (response) {
            document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
            setLoginState({state:"verification", phoneNumber:phoneNumber, is_2fa:response.data.is_2fa})
        }
        else{
            console.log("44444444444444444",error);
            
            toast.error(error.response?.data.error || "مشکلی پیش آمده", { 
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  }
                )         
            }
    }

    return(
    <AuthPageStruct>

     <div className="
     gap-y-8
     md:gap-y-5
     flex
     flex-col
     mt-16
     md:justify-center
     md:items-center
     ">
        <div className="
        md:w-[616px]
        leading-10
        ">
        <p className="
        text-2xl
        font-bold
        md:text-base
        ">
            ورود
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        text-xl
        md:text-base
        ">
        لطفا اطلاعات زیر را تکمیل کنید
        </p>
        </div>
  
        <div className="
                flex
                items-center
                md:w-[616px] w-full
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]"
                >
                <span className="
                mr-3
                ">
                    <PhoneLogin/>
                </span>

                <input
                className="
                rounded-xl
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[616px] w-full
                text-xl
                md:text-base
                "
                placeholder=" شماره موبایل* "
                type="text"
                name="firstname"
                onChange={(e) => {setPhoneNumber(e.target.value)}}
                />
        </div>

        <div>
            <button className="
                hover:bg-primary
                hover:text-black
                 md:w-[616px] w-full
                 h-12 
                 bg-[#EDEDED] 
                 rounded-xl 
                 text-[#7A7A7A]
                 text-xl
                 md:text-base
                 "
                 onClick={() => {
                    handleSendData()
                    
                 }}
                 >
                    ارسال کد
            </button>
        </div>


        <div  className="
        w-[616px]
        md:leading-9
        leading-10
        ">
             <button
             className="
            text-xl
            md:text-base
             "
            onClick={() => setLoginState({state:"forgetPassword", phoneNumber:phoneNumber, is_2fa:loginState.is_2fa})}
            >
            فراموشی رمزعبور
            </button>

            <div className="
            text-xl
            md:text-base
            flex">
            ثبت نام نکرده اید؟  

            <button
            onClick={() => setLoginState({state:0, phoneNumber:phoneNumber, is_2fa:loginState.is_2fa})}
            >
             <Link href="/Login">
             <p className="mr-1 text-primary">
                ثبت نام
            </p>  
             </Link>
            </button>
          
            </div>

        </div>
        
     </div>

     </AuthPageStruct>

    )
}
export default SignInPhone;