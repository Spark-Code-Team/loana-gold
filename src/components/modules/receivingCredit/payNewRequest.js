import { creditPayment50000 } from "@/service/finance";
import Close from "../../../../public/icons/close";
import Image from "next/image";
const PayNewRequest = ({setIsPayModalOpen}) =>{

    const credit50000 = async () => {
        const {response , error} = await creditPayment50000()
                    if (response) {
                        console.log('50000 toman paied', response)
                        setIsPayModalOpen(false)
                    }else{
                        console.log(error)
                    }
    }
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
        ">
            <div className="flex flex-row justify-between">

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


            <button 
                onClick = { () => setIsPayModalOpen(false) } 
                >
                <Close/>
                
            </button>

            </div>     


            <p className="text-3xl text-black font-semibold">
                اعتبار سنجی
            </p>

            <p className="text-[#3B3B3B]">
                اعتبار سنجی رایگان شما به پایان رسیده، برای اعتبار سنجی مجدد باید مبلغ ۵۰۰۰۰ تومان واریز کنید. 
            </p>

            <div className="flex flex-row justify-between" >
            <button
                onClick={()=>{credit50000()}}
                className="
                m-2
                    w-full
                    p-[12px]
                    border
                    border-primary
                    bg-primary
                    hover:text-gray
                    transition
                    duration-300
                    rounded-lg
                    justify-center
                    flex
                "
            >
                پرداخت
            </button>

            <button
                className="
                    m-2
                    w-full
                    p-[12px]
                    border
                    border-gray-500
                    rounded-lg
                    hover:text-gray
                    transition
                    duration-300
                    justify-center
                    flex
                "

                onClick={()=>setIsPayModalOpen(false)}
            >
                بستن
            </button>
            </div>


 </div>
    )
}
export default PayNewRequest; 