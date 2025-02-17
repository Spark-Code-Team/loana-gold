import AuthPageStruct from "./AuthPageStruct";
import PhoneLogin from "../../../../public/icons/PhoneLogin";
import Link from "next/link";

const ForgetPasswordSignIn = ()=> {
    return (
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
        ">
            فراموشی رمز عبور
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        ">
        برای بازیابی رمز عبور شماره تماس خود را وارد کنید.
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
                "
                placeholder=" شماره تماس "
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
                 ">
                     تایید و ادامه
            </button>
        </div>


        <div  className="
        w-[616px]
        leading-9
        ">

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
export default ForgetPasswordSignIn;