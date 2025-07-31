import Image from "next/image";

const GoldDelivery = () => {

    return(

        <div className="w-full md:mt-24 mt-20">

            <div className="md:w-[85%] w-full md:m-auto">

                <div className="w-full md:flex">

                    <div className="md:w-1/2 w-full">

                        <div className="
                        w-full 
                        md:mt-28 
                        text-[24px] 
                        font-bold 
                        md:pr-0 
                        pr-10
                        ">
                            تحویل حضوری طلا
                        </div>

                        <div className="
                        w-full 
                        md:pl-20 
                        pl-5 
                        md:mt-10 
                        mt-5 
                        md:pr-0 
                        pr-10
                        ">
                            ما امکان تحویل حضوری طلا به سراسر ایران را فراهم کرده‌ایم تا
                             تجربه‌ای مطمئن و آسوده را برای مشتریان خود رقم بزنیم.
                        </div>

                        <div className="
                        w-full 
                        m-auto 
                        md:mt-10 
                        mt-5 
                        text-[#AB8B53] 
                        md:pr-0 
                        pr-10
                        ">
                            امکان تحویل در 20 استان کشور
                        </div>

                    </div>

                    <div className="
                    md:w-1/2 
                    w-full 
                    px-5 
                    md:px-0 
                    md:flex 
                    md:justify-center 
                    md:items-center 
                    md:mt-0 
                    mt-10
                    ">

                        <Image src="/images/gold-map.png" alt="" width={439} height={409}/>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default GoldDelivery;