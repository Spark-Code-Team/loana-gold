import Image from "next/image";
const ContactUsMap = () => {
    return(
        <div className="w-[600px] h-[462px] bg-white border-l-2 border-[#EDEDED] my-auto">

            <h1 className="text-base font-bold pb-8">  راه های ارتباط با ما  </h1>

            <p className="pb-3"> شماره تماس:۰۲۱-۱۲۳۴۵۶۷۸ </p>

            <p className="pb-3"> ایمیل:loana@gmail.com  </p>

            <p> آدرس:تهران، خیابان بهشتی، خیابان میرعماد، کوچه ۱۱، پلاک ۵   </p>

            <div className="pt-3">
            <Image src="/images/mapimage.png" alt="map" width={426} height={290}/>
            </div>


        </div>
    )
}
export default ContactUsMap;