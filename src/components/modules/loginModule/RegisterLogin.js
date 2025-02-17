"use client"

import Link from "next/link";
import EmailLogin from "../../../../public/icons/EmailLogin";
import PersonName from "../../../../public/icons/PersonName";
import PhoneLogin from "../../../../public/icons/PhoneLogin";

const RegisterLogin = ({ setloginRegisterState }) =>{
    return(
        <div 
      className="
       md:flex 
       md:justify-center 
       md:items-center 
       md:h-screen 
       md:bg-center
       bg-no-repeat
       md:bg-contain 
       lg:bg-cover
       bg-[url('/images/userdashboard.png')]
       " 
    >

        <div className="
         bg-white 
         w-[664px] 
         h-[590px] 
         p-8 
         rounded-xl 
         shadow-lg
         ">
            <div className="
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

            <p className="
              text-[16px] 
              text-[#A6A6A6]
              ">
                 لطفا اطلاعات زیر را تکمیل کنید 
            </p>

            </div>

            <div className="
             h-[325px] 
             grid 
             grid-cols-2 
             gap-4 
             mt-10
            ">

                <div className="
                flex
                items-center
                w-[292px]
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]
                "
                >
                <span className="mr-4">
                <PersonName/>
                </span>
                
                <input
                className="
                border-none
                 focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                w-[250px]
                "
                placeholder="نام"
                type="text"
                name="firstname"
                />
                </div>

                <div className="
                flex
                items-center
                w-[292px]
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]"
                >
                <span className="mr-4">
                <EmailLogin/>
                </span>
                
                <input
                className="
                border-none
                 focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                w-[250px]
                "
                placeholder="نام خانوادگی"
                type="text"
                name="firstname"
                />
                </div>

                <div className="
                flex
                items-center
                w-[292px]
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]"
                >
                <span className="mr-4">
                <PhoneLogin/>
                </span>
                
                <input
                className="
                border-none
                 focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                w-[250px]
                text-sm
                "
                placeholder=" شماره موبایل (ثبت شده با کد ملی) "
                type="text"
                name="firstname"
                />
                </div>

                <div className="
                flex
                items-center
                w-[292px]
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]"
                >
                <span className="mr-4">
                <PhoneLogin/>
                </span>
                
                <input
                className="
                border-none
                 focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                w-[250px]
                "
                placeholder="کدملی"
                type="text"
                name="firstname"
                />
                </div>

                <div className="
                flex
                items-center
                w-[292px]
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]"
                >
                <span className="mr-4">
                <PhoneLogin/>
                </span>
                
                <input
                className="
                border-none
                 focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                w-[250px]
                "
                placeholder="شماره شبا"
                type="text"
                name="firstname"
                />
                </div>

                <div className="
                flex
                items-center
                w-[292px]
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]"
                >
                <span className="mr-4">
                <PhoneLogin/>
                </span>
                
                <input
                className="
                border-none
                 focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                w-[250px]
                "
                placeholder="نام بانک"
                type="text"
                name="firstname"
                />
                </div>

            </div>

            <div>
                <button className="
                 w-[600px] 
                 h-12 
                 bg-[#EDEDED] 
                 rounded-xl 
                 text-black
                 hover:bg-primary
                 hover:text-black
                 "
                 onClick={() => setloginRegisterState(1)}
                 >
                    تایید و ادامه
                </button>
            </div>

            <div className="
             mt-3 
             text-sm
             w-[600px]
             flex
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
    )
}
export default RegisterLogin;