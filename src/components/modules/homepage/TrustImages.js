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
            <p className="
              md:px-24 
              md:mt-24 
              md:mb-10 
              md:text-2xl 
              md:font-bold
              ">
                اعتماد شما سرمایه ماست
            </p>

            <div className="
              md:px-24 
              md:w-full 
              md:h-52 
              md:flex 
              md:justify-between
              ">
                
                {images.map(image => (
                    <div key={image.id} className="md:my-auto md:w-40 md:h-40">
                        <Image src={image.src} alt="image" width={155} height={155} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default TrustImages;