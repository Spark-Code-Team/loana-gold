import Image from "next/image";

const images = [
    { id: 1, src: "/images/sabz11.png" },
    { id: 2, src: "/images/abi2.png" },
    { id: 3, src: "/images/vasat.png" },
    { id: 4, src: "/images/abi4.png" },
    { id: 5, src: "/images/aks5.png" }
];

const TrustImages = () => {
    return (
        <>
            <p className="px-24 mt-24 mb-10 text-2xl font-bold">اعتماد شما سرمایه ماست</p>
            <div className="px-24 w-full h-52 flex justify-between">
                {images.map(image => (
                    <div key={image.id} className="my-auto w-40 h-40">
                        <Image src={image.src} alt="image" width={155} height={155} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default TrustImages;