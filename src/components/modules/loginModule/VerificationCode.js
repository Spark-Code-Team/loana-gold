const VerificationCode = () => {
    return(
      <div className="
       md:flex 
       md:justify-center 
       md:items-center 
       md:h-screen 
       md:bg-center
       bg-no-repeat
       md:bg-contain 
       lg:bg-cover
       bg-[url('/images/userdashboard.png')]
      ">
        <div className="
         bg-white 
         w-[664px] 
         h-[590px] 
         p-8 
         rounded-xl 
         shadow-lg
         ">
            <div className="
            mt-16
             h-16 
             flex 
             flex-col 
             items-start
             ">
                <h2 className="
              text-xl 
              font-bold 
              mb-4 
              text-center
              ">
                ثبت نام
            </h2>
            </div>

            <div className="
            w-[600px]
            h-[270px]
            justify-center
            flex
            flex-col
            items-center
            gap-y-5
            ">
                <p>
                کد تایید وارد کنید
                </p>

                <p className="text-[#A6A6A6]">
                کد تایید به شماره تلفن 09127695103 ارسال شد.
                </p>

                <div className="
                flex
                items-center
                w-[320px]
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]
                "
                >
                <input
                className="
                border-none
                 focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                rounded-xl
                w-[320px]
                "
                placeholder="نام"
                type="text"
                name="firstname"
                />
                </div>

                <p className="text-[#A6A6A6]">
                ۱:۲۰ تا ارسال مجدد کد
                </p>

            <div>
                <button className="
                 w-[600px] 
                 h-12 
                 bg-[#EDEDED] 
                 rounded-xl 
                 text-black
                 ">
                    تایید و ادامه
                </button>
            </div>

            <div className="
             mt-3 
             text-sm
             w-[600px]
             ">
            حساب کاربری دارید؟ ورود
            </div>

            </div>


        </div>

      </div>
    )
}
export default VerificationCode;