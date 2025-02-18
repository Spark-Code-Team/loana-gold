import Image from "next/image";

const items = [
    { id: 1, img: "/images/key.png", title: "طلای احراز شده در بانک", desc: "می‌توانید در کمتر از یک دقیقه معامله کنید." },
    { id: 2, img: "/images/money.png", title: "امنیت معاملات", desc: "می‌توانید در کمتر از یک دقیقه معامله کنید." },
    { id: 3, img: "/images/gold.png", title: "طلای احراز شده در بانک", desc: "می‌توانید در کمتر از یک دقیقه معامله کنید." },
    { id: 4, img: "/images/house.png", title: "پشتیبانی در لحظه", desc: "می‌توانید در کمتر از یک دقیقه معامله کنید." }
];
const WhyLona = () => {
    return (
        <>

            <div className="md:w-full md:mt-20 md:mb-0 mb-20">

                <div className="md:w-[85%] m-auto">

                    <div className="w-full m-auto font-bold text-[24px] md:text-right text-center">چرا لونا ؟</div>

                    <div className="w-full md:mt-10 md:flex md:flex-nowrap flex flex-wrap md:gap-x-5">

                        {
                            items.map((item , index)=>(

                                <div key={index} className="md:w-1/4 w-full md:mt-0 mt-7">

                                    <div className="md:w-full w-full">
                                        <Image src={item.img} alt="" width={203} height={125} className="block m-auto" layout="responsive"/>
                                    </div>

                                    <div className="md:w-full m-auto text-center font-bold mt-4">{item.title}</div>
                                    <div className="md:w-full m-auto mt-4 text-sm w-full md:text-right text-center">{item.desc}</div>

                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

        </>
    );
};

export default WhyLona;