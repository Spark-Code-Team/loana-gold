import Image from "next/image";

const GoldDelivery = () => {

    return(

        <div className="
        mt-24
        px-24
        w-full
        h-[408px]
        flex
        justify-between        
        ">
            <div className="
            w-1/2
            ">
                <p className="
                pt-24
                font-bold
                ">
                تحویل حضوری طلا
                </p>

                <p className="
                pt-10
                ">
                    ما امکان تحویل حضوری طلا به سراسر ایران را فراهم کرده‌ایم تا
                     تجربه‌ای مطمئن و آسوده را برای مشتریان خود رقم بزنیم.
                </p>

                <p className="
                pt-6
                text-[#AB8B53]
                ">
                فرایند دریافت حضوری طلا
                </p>

            </div>

            <div className="
            ">
              <Image
              src="/images/map.png"
              alt=""
              width={440}
              height={408}
              />


            </div>




        </div>
    )
}

export default GoldDelivery;