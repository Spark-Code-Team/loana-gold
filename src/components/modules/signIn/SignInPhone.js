import Link from "next/link";
import PhoneLogin from "../../../../public/icons/PhoneLogin";
import AuthPageStruct from "./AuthPageStruct";

const SignInPhone =({ setLoginState }) =>{
    return(
    <AuthPageStruct>

     <div className="
     gap-y-5
     flex
     flex-col
     mt-16
     justify-center
     items-center
     ">
        <div className="
        w-[616px]
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
                w-[616px]
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
                w-[616px]
                text-xl
                md:text-base
                "
                placeholder=" شماره موبایل* "
                type="text"
                name="firstname"
                />
                </div>

        <div>
            <button className="
                hover:bg-primary
                hover:text-black
                 w-[616px] 
                 h-12 
                 bg-[#EDEDED] 
                 rounded-xl 
                 text-[#7A7A7A]
                 text-2xl
                 md:text-base
                 "
                 onClick={() => setLoginState("verification")}
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