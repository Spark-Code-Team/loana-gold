import Image from "next/image";

const features = [
    { id: 1, img: "/images/key.png", title: "طلای احراز شده در بانک", desc: "می‌توانید در کمتر از یک دقیقه معامله کنید." },
    { id: 2, img: "/images/money.png", title: "امنیت معاملات", desc: "می‌توانید در کمتر از یک دقیقه معامله کنید." },
    { id: 3, img: "/images/gold.png", title: "طلای احراز شده در بانک", desc: "می‌توانید در کمتر از یک دقیقه معامله کنید." },
    { id: 4, img: "/images/house.png", title: "پشتیبانی در لحظه", desc: "می‌توانید در کمتر از یک دقیقه معامله کنید." }
];
const WhyLona = () => {
    return (
        <>
            <p className="
              md:mt-24 
              md:px-24 
              md:text-2xl 
              md:font-bold
              ">
                چرا لونا؟
            </p>

            <div className="
              md:px-24 
              md:w-full 
              md:h-56 
              md:flex 
              md:justify-between
              ">
                {features.map(feature => (
                    <div key={feature.id} className="md:w-72 md:h-56 md:flex md:flex-col md:items-center md:justify-center">
                        <Image src={feature.img} alt="image" width={198} height={120} />
                        <p className="md:font-bold md:py-2">{feature.title}</p>
                        <p className="md:text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default WhyLona;