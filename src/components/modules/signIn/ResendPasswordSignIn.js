import AuthPageStruct from "./AuthPageStruct";

const ResendPasswordSignIn = () => {
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
        ">
            فراموشی رمز عبور
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        ">
        کد 5 رقمی ارسال شده به ایمیل کاربری را وارد کنید.
        </p>
        </div>

        <div className="
                flex
                items-center
                w-[317px]
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
                w-[317px]
                "
                placeholder="  "
                type="text"
                name="firstname"
                />
                </div>

                <p className="text-[#A6A6A6]">
                ۱:۲۰ تا ارسال مجدد کد
                </p>

                
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
        
        </div>
    </AuthPageStruct>
    )
}
export default ResendPasswordSignIn;