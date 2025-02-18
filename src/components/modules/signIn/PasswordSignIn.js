import AuthPageStruct from "./AuthPageStruct";
import PhoneLogin from "../../../../public/icons/PhoneLogin";
import Link from "next/link";
const PasswordSignIn = ({ setLoginState }) => {
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
            ورود
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
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
                "
                placeholder="  رمزعبور "
                type="text"
                name="firstname"
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
                 md:text-lg
                 "
                 onClick={() => setLoginState("forgetPassword")}
                 >
                    ارسال کد
            </button>
        </div>


        <div  className="
        w-[616px]
        leading-9
        ">
            <button
            onClick={() => setLoginState("forgetPassword")}
            >
            فراموشی رمزعبور
            </button>

            <div className="flex">
            ثبت نام نکرده اید؟  
            <Link href="/Login">
             <p className="mr-1 text-primary">
                ثبت نام
            </p>  
             </Link>
            </div>

        </div>
        
     </div>

    </AuthPageStruct>
    )
}
export default PasswordSignIn;