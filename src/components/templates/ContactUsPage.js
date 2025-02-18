import ContactUsMap from "../modules/contactus/ContactUsMap"
import ContactUsProcess from "../modules/contactus/ContactUsProcess";
import TicketForm from "../modules/contactus/TicketForm";


const ContactUsPage = () => {
    return(
        <>
        
        <div className="
        md:w-full w-full
        md:h-[535px]
        md:mt-16 
        md:px-16
        md:flex
        md:justify-between
        md:border-[1px]
        md:border-[#EDEDED]
        md:rounded-2xl
        ">
        <ContactUsMap/>
        <TicketForm/>
        </div>

        <ContactUsProcess/>
        </>
    )
}

export default ContactUsPage;