import PhoneLogin from "../../../../public/icons/PhoneLogin";
import Image from "next/image";
const SanaRes = () =>{
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
        bg-red-400
        ">

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

 </div>
    )
}
export default SanaRes; 