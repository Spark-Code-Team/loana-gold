import ContactUsMap from "../modules/contactus/ContactUsMap"
import ContactUsProcess from "../modules/contactus/ContactUsProcess";
import TicketForm from "../modules/contactus/TicketForm";


const ContactUsPage = () => {
    return(
        <>
        
        <div className="w-full
        h-[535px]
        mt-16 
        px-16
        flex
        justify-between
        border-[1px]
        border-[#EDEDED]
        rounded-2xl
        ">
        <ContactUsMap/>
        <TicketForm/>
        </div>

        <ContactUsProcess/>

        </>
    )
}

export default ContactUsPage;