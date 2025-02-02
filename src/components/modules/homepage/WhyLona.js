import Image from "next/image";

const WhyLona = () => {
    return(
        <>
        <p className="
        mt-24
        px-24
        text-2xl
        font-bold
        ">
            چرا لونا؟
        </p>

        <div className="
        px-24
        w-full
        h-56
        flex
        justify-between
        ">

            <div className="
            w-72
            h-56
            flex
            flex-col
            items-center
            justify-center
            ">
                <Image
                src="/images/key.png"
                alt=""
                width={198}
                height={120}
                />

                <p className="
                font-bold
                py-2
                ">
                طلای احراز شده در بانک
                </p>

                <p className="
                text-sm
                ">
                می‌توانید در کمتر از یک دقیقه معامله کنید.
                </p>
                
            
            </div>

            <div className="
            w-72
            h-56
            flex
            flex-col
            items-center
            justify-center
            ">
                <Image
                src="/images/money.png"
                alt=""
                width={198}
                height={120}
                />

                <p className="
                font-bold
                py-2
                ">
                    امنیت معاملات
                </p>

                <p className="
                text-sm
                ">
                می‌توانید در کمتر از یک دقیقه معامله کنید.
                </p>
                
            
            </div>

            <div className="
            w-72
            h-56
            flex
            flex-col
            items-center
            justify-center
            ">
                <Image
                src="/images/gold.png"
                alt=""
                width={198}
                height={120}
                />

                <p className="
                font-bold
                py-2
                ">
                طلای احراز شده در بانک
                </p>

                <p className="
                text-sm
                ">
                می‌توانید در کمتر از یک دقیقه معامله کنید.
                </p>
                
            
            </div>

            <div className="
            w-72
            h-56
            flex
            flex-col
            items-center
            justify-center
            ">
                <Image
                src="/images/house.png"
                alt=""
                width={198}
                height={120}
                />

                <p className="
                font-bold
                py-2
                ">
                    پشتیبانی در لحظه
                </p>

                <p className="
                text-sm
                ">
                می‌توانید در کمتر از یک دقیقه معامله کنید.
                </p>
                
            
            </div>

            
        </div>
        
        </>
    )
}

export default WhyLona;