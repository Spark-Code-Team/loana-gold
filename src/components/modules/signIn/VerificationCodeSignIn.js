"use client"

import AuthPageStruct from "./AuthPageStruct";
import { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "@/utils/cookies";
import { setCookie } from "@/utils/cookies";
import { Bounce, toast } from "react-toastify";
import { loginOtp } from "@/service/auth";
import { login } from "@/service/auth"; 
import { useRouter } from "next/navigation";
import { Profile } from "@/service/profile";
import { UserProfile } from "@/stores/profileStore";

const VerificationCodeSignIn = ({ setLoginState , loginState }) => {
          const [otpObj, setOtpObj] = useState({phoneNumber: loginState.phoneNumber, otp: ''  });  
          const [expired, setExpired] = useState(false);
          const [remainingTime, setRemainingTime] = useState(0);  
          const router = useRouter()
          const profileStore = UserProfile()
          

      useEffect(() => {
        const inputTime = getCookie('expire_time');
        const expirationDate = new Date(inputTime);
        const now = new Date();
        let diffMs = expirationDate - now;
        const totalSeconds = Math.floor(diffMs / 1000);
    
        if (totalSeconds <= 0) {
          setExpired(true);
          setRemainingTime(0);
          return;
        }
        setRemainingTime(totalSeconds);

        const timer = setInterval(() => {
          setRemainingTime((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              setExpired(true);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
    
        return () => clearInterval(timer); 
      });

      const handleSendLoginAgain = async ()=>{
        if (expired){
                const {response , error} = await login(loginState.phoneNumber)    
                if (response) {
                    document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
                    setLoginState({state:"verification", phoneNumber:loginState.phoneNumber, is_2fa:loginState.is_2fa})
                    setExpired(false)
                }
                else if (error){
                    toast.error(error.response.data.error, { 
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
        
      }


      const handleOtpChange = (e) => {  
        const value = e.target.value; 
        setOtpObj(prevState => ({ ...prevState, otp: value })); 
      };

      const handleSendData = async () => {
        const {response , error} = await loginOtp(otpObj)
        if (response){
          setCookie(response.data)
            if(loginState.is_2fa){
                setLoginState({state:"password" , phoneNumber:loginState.phoneNumber,  is_2fa:loginState.is_2fa})
            }
            else if (!loginState.is_2fa){
                        const fetchProfile = async () => {
                                const {response , error} = await Profile()
                                if (response){
                                    const userData = response.data.user;  
                                    const profileImage = response.data.profile_img;  
                        
                        
                                    profileStore.setProfile({  
                                        user: userData,  
                                        profile_img: profileImage
                                    }); 
                        
                                }
                                else if (error){
                                }}
                          fetchProfile()
                router.push('/')
            }

            


        }else if(error) {
          toast.error(error.response.data.detail, { 
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
        md:gap-y-5
        gap-y-8
        flex
        flex-col
        mt-16
        md:justify-center
        md:items-center
        ">
        <div className="
        md:w-[616px] w-full
        leading-10
        ">
        <p className="
        text-2xl
        font-bold
        ">
            کد تایید وارد کنید
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        ">
        کد 5 رقمی به شماره تلفن {loginState.phoneNumber} ارسال شد
        </p>
        </div>

        <div className="
                flex
                items-center
                md:w-[317px] w-full
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]"
                >
                <span className="
                mr-3
                ">
                </span>

                <input
                className="
                rounded-xl
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[317px] w-full
                "
                placeholder="  "
                type="text"
                name="firstname"
                value={otpObj.otp} 
                onChange={handleOtpChange}
                />
                </div>

                <button
                onClick={() => setLoginState({state:"resendCode", phoneNumber:loginState.phoneNumber, is_2fa:loginState.is_2fa})}
                >

                <p className="text-[#A6A6A6]">
                {remainingTime} ثانیه تا ارسال مجدد کد
                </p>

                </button>


                
                <div>
              {expired ?                               
                <button className="
                md:w-[600px] w-[375px]
                h-12 
                bg-[#EDEDED] 
                rounded-xl 
                text-black
                hover:bg-primary
                hover:text-black
                text-xl
                md:text-base
                "
                 onClick={() => {
                  handleSendLoginAgain()
                }}
                 >
                    ارسال مجدد کد
                </button>:<button className="
                md:w-[600px] w-[375px]
                h-12 
                bg-[#EDEDED] 
                rounded-xl 
                text-black
                hover:bg-primary
                hover:text-black
                text-xl
                md:text-base
                "
                 onClick={() => 
                  handleSendData()
                  }
                 >
                    تایید و ادامه
                </button>}

            </div>

        </div>
    </AuthPageStruct>
    )
}
export default VerificationCodeSignIn;