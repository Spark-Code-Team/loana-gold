"use client"

import Link from "next/link";

const VerificationCode = ({ setloginRegisterState }) => {
    return(
      <div className="
       flex 
       justify-center 
       items-center 
       md:h-screen 
       md:bg-center
       bg-no-repeat
       p-3
       md:p-0
       md:bg-contain 
       lg:bg-cover
       md:bg-[url('/images/userdashboard.png')]
      ">
        <div className="
         bg-white 
         md:w-[664px] 
         md:h-[590px] 
         md:p-8 
         rounded-xl 
         md:shadow-lg
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
              md:text-2xl
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
                <p className="
                  text-2xl
                  md:text-base
                ">
                کد تایید وارد کنید
                </p>

                <p className="
                  text-xl
                  md:text-base
                text-[#A6A6A6]">
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
                placeholder=""
                type="text"
                name="firstname"
                />
                </div>

                <p className="
                  text-xl
                  md:text-base
                text-[#A6A6A6]">
                ۱:۲۰ تا ارسال مجدد کد
                </p>

            <div>
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
                 onClick={() => setloginRegisterState(0)}
                 >
                    تایید و ادامه
                </button>
            </div>

            <div className="
             mt-3 
             md:w-[600px] w-[370px]
             flex
             text-xl
             md:text-base
             ">
            حساب کاربری دارید؟
            <Link href="/Sign-in">
             <p className="mr-1 text-primary">
                ورود
            </p>  
             </Link> 
            
            </div>

            </div>


        </div>

      </div>
    )
}
export default VerificationCode;