import Image from "next/image";
import EmailIcon from "../../../../public/icons/EmailIcon";
import PhoneIcon from "../../../../public/icons/PhoneIcon";
import LocationIcon from "../../../../public/icons/LocationIcon";
const ContactUsMap = () => {
    return(
        <div className="w-[600px] h-[462px] bg-white border-l-2 border-[#EDEDED] my-auto">

            <h1 className="text-base font-bold pb-8">  راه های ارتباط با ما  </h1>

            <div className="
                flex 
                items-center 
                space-x-2 
                rtl:space-x-reverse
            ">
                <PhoneIcon/>
                <p className="pb-3"> شماره تماس:۰۲۱-۱۲۳۴۵۶۷۸ </p>
            </div>

            <div className="
                flex 
                items-center 
                space-x-2 
                rtl:space-x-reverse
            ">
                <EmailIcon/>
                <p className="pb-3"> ایمیل:loana@gmail.com  </p>
            </div>

            <div className="
                flex 
                items-center 
                space-x-2 
                rtl:space-x-reverse
            ">
                <LocationIcon/>
                <p> آدرس:تهران، خیابان بهشتی، خیابان میرعماد، کوچه ۱۱، پلاک ۵   </p>
            </div>

            <div className="pt-3">
            <Image src="/images/mapimage.png" alt="map" width={426} height={290}/>
            </div>

        </div>
    )
}
export default ContactUsMap;