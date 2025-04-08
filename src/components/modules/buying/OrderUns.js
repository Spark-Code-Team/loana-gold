import Image from "next/image";
const OrderUns = () => {
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
                    src="/images/xghermez.png"
                    alt="sabz"
                    width={56}
                    height={56}
                    className="
                    w-14
                    h-14
                    bg-[#FFE0E0]
                    rounded-lg
                    
                    "
                    />
        
                    <p className="text-3xl text-[#E53935] font-semibold">
                    پرداخت شما انجام نشد!
                    </p>
                    <p className="w-[500px] text-center text-[#E53935]">
                    این پیام به منزله تایید نشدن خرید شماست
                    در صورت کسر هزینه از حسب شما، مبلغ پرداختی تا ۷۲ ساعت
                    آینده به حساب شما برخواهدگشت.
                    </p>
                  
                    <p className="w-[360px] text-[#E53935] text-center">
                    شماره پیگیری پرداخت: 17482638                    
                    </p>
        
                   
        
                </div>
    )
}
export default OrderUns;;