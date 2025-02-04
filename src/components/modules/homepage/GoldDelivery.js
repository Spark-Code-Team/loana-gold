import Image from "next/image";

const GoldDelivery = () => {

    return(

        <div className="
        md:mt-24
        md:px-24
        md:w-full
        md:h-[408px]
        md:flex
        md:justify-between        
        ">
            <div className="
            md:w-1/2
            ">
                <p className="
                md:pt-24
                md:font-bold
                ">
                تحویل حضوری طلا
                </p>

                <p className="
                md:pt-10
                ">
                    ما امکان تحویل حضوری طلا به سراسر ایران را فراهم کرده‌ایم تا
                     تجربه‌ای مطمئن و آسوده را برای مشتریان خود رقم بزنیم.
                </p>

                <p className="
                md:pt-6
                text-[#AB8B53]
                ">
                فرایند دریافت حضوری طلا
                </p>

            </div>

            <div className="
            ">
              <Image
              src="/images/map.png"
              alt="image"
              width={440}
              height={408}
              />


            </div>




        </div>
    )
}

export default GoldDelivery;