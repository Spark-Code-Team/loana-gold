import Image from "next/image"

export default function AuthPageStruct ({children}) {
    return (
        <>
        <div className="
        md:flex
        md:justify-evenly
        mt-10
        p-3
        md:p-0
        ">
            <div className="
            md:w-[664px] w-full
            h-[561px]
            rounded-xl
            md:border-[1px]
            md:border-[#E1E1E1]
            md:shadow-lg
            ">
                {children}

            </div>

            <div className="
            md:w-[520px] w-full
            md:h-[561px] 
            rounded-xl
            ">
                <Image
                src="/images/shemshaks.png"
                alt="shemsh"
                width={520}
                height={561}
                className="hidden sm:block"
                />

            </div>

        </div>

        </>
    )
}