import Image from "next/image";

const items = [
    { id: 1, img: "/images/sabz11.png" },
    { id: 2, img: "/images/abi2.png" },
    { id: 3, img: "/images/vasat.png" },
    { id: 4, img: "/images/abi4.png" },
    { id: 5, img: "/images/aks5.png" }
];

const TrustImages = () => {
    return (
        <>

            <div className="md:w-full w-full">

                <div className="md:w-[85%] w-full m-auto md:mt-20">

                    <div className="
                     w-full 
                     text-[24px] 
                     font-bold 
                     md:text-right 
                     text-center
                     ">
                        اعتبار شما سرمایه ماست
                    </div>

                    <div className="
                    w-full 
                    md:mt-12 
                    md:flex 
                    md:flex-nowrap 
                    md:justify-around 
                    flex 
                    flex-wrap 
                    md:pr-0 
                    md:pl-0
                    ">

                        {
                            items.map((item , index )=>(

                                <div key={index} className="
                                 md:w-[160px] 
                                 md:h-[160px] 
                                 w-1/2
                                 flex 
                                 md:m-0 
                                 md:mt-0 
                                 mt-10
                                 ">
                                    <Image src={item.img} alt="" width={160} height={160}
                                     className="
                                    block
                                    m-auto
                                    md:w-40
                                    md:h-40
                                    w-32
                                    h-32
                                    "/>
                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

        </>
    );
};

export default TrustImages;