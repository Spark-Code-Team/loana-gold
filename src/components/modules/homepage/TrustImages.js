import Image from "next/image";

const TrustImages = () => {

    return(
        <>
        <p className="
        px-24
        mt-24
        mb-10
        text-2xl
        font-bold
        ">
        اعتماد شما سرمایه ماست
        </p>

        <div className="
        px-24
        w-full
        h-52
        flex
        justify-between
    

        ">
            <div className="
            my-auto
            w-40
            h-40
            ">
            <Image
            src="/images/sabz11.png"
            alt=""
            width={155}
            height={155}
            />
            </div>

            <div className="
            my-auto
            w-40
            h-40
            ">
            <Image
            src="/images/abi2.png"
            alt=""
            width={155}
            height={155}
            />
            </div>

            <div className="
            my-auto
            w-40
            h-40
            ">
            <Image
            src="/images/vasat.png"
            alt=""
            width={155}
            height={155}
            />
            </div>

            <div className="
            my-auto
            w-40
            h-40
            ">
            <Image
            src="/images/abi4.png"
            alt=""
            width={155}
            height={155}
            />
            </div>

            <div className="
            my-auto
            w-40
            h-40
            ">
            <Image
            src="/images/aks5.png"
            alt=""
            width={155}
            height={155}
            />
            </div>


            

        </div>
        
        </>
    )
}

export default TrustImages;

