import Image from "next/image";
const OrderSuccess = () => {
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

            <p className="text-3xl text-[#257028] font-semibold">
            سفارش شما با موفقیت انجام شد
            </p>
            <p>
            سفارش شما ثبت شد.
            </p>
          
            <p className="w-[360px] text-center">
            در تاریخ معین شده منتظر سفارش خود باشید! 
            </p>

            <p>
            کد رهگیری سفارش: 045162516
            </p>

        </div>
    )
}
export default OrderSuccess;