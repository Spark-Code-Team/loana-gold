import Image from "next/image";

const OnlineChartt = () => {
    return (

        <>

            <div className="md:w-1/2 w-full flex justify-center items-center lg:mt-20 mt-10">

                <div className="md:w-[90%] w-full m-auto md:pr-0 md:pl-0 pr-10 pl-10">

                    <Image src="/images/chart.png" alt="" width={600} height={412} layout="responsive"/>

                </div>

            </div>

        </>

    )
}

export default OnlineChartt;