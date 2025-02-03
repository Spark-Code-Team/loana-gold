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
            <p className="mt-24 px-24 text-2xl font-bold">چرا لونا؟</p>
            <div className="px-24 w-full h-56 flex justify-between">
                {features.map(feature => (
                    <div key={feature.id} className="w-72 h-56 flex flex-col items-center justify-center">
                        <Image src={feature.img} alt="image" width={198} height={120} />
                        <p className="font-bold py-2">{feature.title}</p>
                        <p className="text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default WhyLona;