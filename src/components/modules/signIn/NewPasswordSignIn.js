
import PasswordIconSignin from "../../../../public/icons/PasswordIconSignin";
import AuthPageStruct from "./AuthPageStruct";
const NewPasswordSignIn = () => {
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
            فراموشی رمز عبور nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        ">
        رمز عبور جدید را وارد کنید.
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
                    <PasswordIconSignin/>
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
                placeholder=" رمز عبور جدید را وارد کنید "
                type="text"
                name="firstname"
                />
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
                    <PasswordIconSignin/>
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
                placeholder=" رمز عبور جدید را وارد کنید "
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
                 ">
                     تایید و ادامه
            </button>
        </div>
          
    </div>

    </AuthPageStruct>
    )
}
export default NewPasswordSignIn;