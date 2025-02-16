import Image from "next/image";
import SignInPhone from "../modules/signIn/SignInPhone";

const SignInPage = () => {
    return(
        <>
        <div className="
        flex
        justify-evenly
        mt-10
        ">
            <div className="
            w-[664px]
            h-[561px]
            rounded-xl
            border-[1px]
            border-[#E1E1E1]
            shadow-lg
            ">
                <SignInPhone/>

            </div>

            <div className="
            w-[520px]
            h-[561px]
            rounded-xl
            ">
                <Image
                src="/images/shemshaks.png"
                alt="shemsh"
                width={520}
                height={561}
                />

            </div>

        </div>

        </>
    )
}
export default SignInPage;