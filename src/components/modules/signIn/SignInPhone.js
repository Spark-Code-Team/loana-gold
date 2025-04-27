import Link from "next/link";
import PhoneLogin from "../../../../public/icons/PhoneLogin";
import AuthPageStruct from "./AuthPageStruct";
import { useState } from "react";
import { otp } from "@/service/auth";
import axios from "axios";
const SignInPhone =({ setLoginState }) =>{

    const [phoneNumber, setPhoneNumber] = useState()
    const [okay, setOkay] = useState(false)

    const handleSendData = () => {
        console.log(phoneNumber)
        loginOtp(phoneNumber)
    }

    const SendPhoneNumber = async () =>{
      try {
        let phoneNumber = document.getElementById("phoneNumber").value;
        const response = await axios.post("https://api.example.com/send-phone-number",
        {phoneNumber: phoneNumber},
        {headers: {"Content-Type": "application/json",Authorization: `Bearer ${localStorage.getItem("accessToken")}`,},});
        const data = await response.json();
        console.log(data);
        setOkay(data.okay);
        
      } catch (error) {
        
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
                id="phoneNumber"
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
                    SendPhoneNumber()
                    setLoginState("verification")
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
            onClick={() => setLoginState("forgetPassword")}
            >
            فراموشی رمزعبور
            </button>

            <div className="
            text-xl
            md:text-base
            flex">
            ثبت نام نکرده اید؟  

            <button
            onClick={() => setLoginState(0)}
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