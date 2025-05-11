import Close from "../../../../public/icons/close";
import PhoneLogin from "../../../../public/icons/PhoneLogin";
import Image from "next/image";
const SanaRes = ({setIsModalOpen}) =>{
    return(

        <div className="
        mt-5
        w-[535px]
        rounded-xl
        p-[24px]
        flex
        flex-col
        justify-center
        items-right
        space-y-4
        bg-white
        z-50
        ">

            <button 
                onClick = { () => setIsModalOpen(false) } 
            >
                <Close/>
                
            </button>



            <Image
            src="/images/ticksabz.png"
            alt="sabz"
            width={56}
            height={56}
            className="
            w-14
            h-14
            bg-[#CCF1DD]
            rounded-lg
            "
            />

            <p className="text-3xl text-black font-semibold">
            دریافت اعتبار خرید
            </p>

            <p className="text-[#3B3B3B]">
            نتیجه اعتبار سنجی به زودی از طریق پیامک ارسال میشود
            </p>

            <button
                className="
                    w-[100%]
                    p-[12px]
                    border
                    border-gray-500
                    rounded-lg
                    justify-center
                    flex
                "

                onClick={()=>setIsModalOpen(false)}
            >
                بستن
            </button>

 </div>
    )
}
export default SanaRes; 