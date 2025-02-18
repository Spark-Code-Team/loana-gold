import AuthPageStruct from "./AuthPageStruct";
const VerificationCodeSignIn = ({ setLoginState }) => {
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
        کد 5 رقمی به شماره تلفن 09127695103 ارسال شد
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
                />
                </div>

                <button
                onClick={() => setLoginState("resendCode")}
                >

                <p className="text-[#A6A6A6]">
                ۱:۲۰ تا ارسال مجدد کد
                </p>

                </button>


                
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
                 onClick={() => setLoginState("password")}
                 >
                     تایید و ادامه
            </button>
        </div>

        </div>
    </AuthPageStruct>
    )
}
export default VerificationCodeSignIn;