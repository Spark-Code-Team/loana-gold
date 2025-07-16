import AccordionQ from "../modules/homepage/AccordionQ";
import GoldDelivery from "../modules/homepage/GoldDelivery";
import HeaderShopOpen from "../modules/homepage/HeaderShopOpen";
import InstallmentPayment from "../modules/homepage/InstallmentPayment";
import OnlineCalculation from "../modules/homepage/OnlineCalculation";
import OnlineChartt from "../modules/homepage/OnlineChartt";
import ProcessCredit from "../modules/homepage/ProcessCredit";
import TrustImages from "../modules/homepage/TrustImages";
import WhyLona from "../modules/homepage/WhyLona";

const HomePage = () => {
    return (
        <>
        <div className="
        md:w-full
        md:h-[471px]
        md:mt-16 
        md:mb-14
        md:px-16
        md:flex
        md:justify-center
        pb-14
        ">
        <OnlineCalculation/>
        <OnlineChartt />
        </div>
        
        <div className="
        md:w-full
        md:mt-16 
        sm:pt-7
        ">
            <ProcessCredit />
        </div>


        <InstallmentPayment/>

        <WhyLona/>

        <TrustImages/>

        <GoldDelivery/>

        <AccordionQ/>


        {/* <HeaderShopOpen/> */}


        </>

    )
}

export default HomePage;