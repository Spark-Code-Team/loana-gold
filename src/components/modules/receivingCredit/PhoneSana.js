import PhoneLogin from "../../../../public/icons/PhoneLogin";

const PhoneSana = () => {
    return(
        <div className="
        mt-5
        w-[648px]
        h-[480px]
        rounded-xl
        flex
        flex-col
        justify-center
        items-center
        space-y-4
        ">

            <p className="text-3xl text-black font-semibold">
            دریافت اعتبار خرید
            </p>

            <p className="text-[#A6A6A6]">
            برای دریافت اعتبار شماره ثنا خود را وارد کنید.
            </p>
          
         <div className="
         flex
         items-center
         md:w-[440px] w-full
         h-14
         rounded-xl
         border-[1px]
         boredr-[#E1E1E1]
         bg-white
         "
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
         text-xl
         md:text-base
         text-end
         "
         placeholder=" 1036957841 "
         type="text"
         name="firstname"
         />
         </div>

         <div className="
         flex
         items-center
         md:w-[440px] w-full
         h-14
         rounded-xl
         bg-primary
         "
         >
        
         <input
         className="
         rounded-xl
         border-none
         focus:outline-none
         focus:ring-0
         focus:boredr-transparent
         md:w-[616px] w-full
         text-xl
         text-neutral-950
         md:text-base
         text-center
         bg-primary
         "
         placeholder=" تایید و ادامه "
         type="text"
         name="firstname"
         />
         </div>

 </div>
    )
}
export default PhoneSana;