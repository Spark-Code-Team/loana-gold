import AccordionQ from "../modules/homepage/AccordionQ";
import GoldDelivery from "../modules/homepage/GoldDelivery";
import InstallmentPayment from "../modules/homepage/InstallmentPayment";
import OnlineCalculation from "../modules/homepage/OnlineCalculation";
import OnlineChartt from "../modules/homepage/OnlineChartt";
import ProcessCredit from "../modules/homepage/ProcessCredit";
import TrustImages from "../modules/homepage/TrustImages";
import WhyLona from "../modules/homepage/WhyLona";

const HomePage = () => {
    return (
        <>
        <div className="w-full
        h-[471px]
        mt-16 
        px-16
        flex
        justify-between
        ">
        <OnlineCalculation/>
        <OnlineChartt/>
        </div>
        
        <ProcessCredit />

        <InstallmentPayment/>

        <WhyLona/>

        <TrustImages/>

        <GoldDelivery/>

        <AccordionQ/>


        


        </>

    )
}

export default HomePage;