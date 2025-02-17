import AuthPageStruct from "./AuthPageStruct";
const VerificationCodeSignIn = ({ setLoginState }) => {
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
                 w-[616px] 
                 h-12 
                 bg-[#EDEDED] 
                 rounded-xl 
                 text-[#7A7A7A]
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