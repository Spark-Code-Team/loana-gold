import Image from "next/image";
import LeftBuying from "../modules/buying/LeftBuying";

const AddressRegistrationPage = () =>{
    return(
        
        <div className="
        flex
        flex-row
        justify-evenly
        mt-28
        ">

            <div className="
            w-[808px]
            h-[829px]
            ">
                <p>
                ابتدا آدرس خود را تکمیل کنید
                </p>
                
                <div className="
                w-[808px]
                h-[256px]
                rounded-xl
                border-[1px]
                border-[#DADADA]
                mt-4
                grid
                grid-cols-2
                place-items-center
                items-center
                ">

                <input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="استان"
                type="text"
                name="firstname"
                />

<input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="شهر"
                type="text"
                name="firstname"
                />

<input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="پلاک"
                type="text"
                name="firstname"
                />

<input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="واحد"
                type="text"
                name="firstname"
                />

<input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="کدپستی"
                type="text"
                name="firstname"
                />

                </div>

                <div className="mt-8">
                <Image
                src="/images/mapbuy.png"
                alt="map"
                width={808}
                height={421}
                />
                </div>

                <div className="mt-8">
                    <button className="
                    w-[808px]
                    h-12
                    bg-primary
                    rounded-xl
                    ">
                    ثبت ادرس
                    </button>
                </div>

               

            </div>

            <LeftBuying/>



        </div>

    )
}
export default AddressRegistrationPage;