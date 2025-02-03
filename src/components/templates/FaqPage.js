import FAQList from "../elements/FAQList"; 

const FaqPage = () => { 
    
const faqs = [ 
    { question: "چگونه در سایت ثبت نام کنم؟", answer: "برای ثبت نام، به صفحه ثبت نام مراجعه کنید و اطلاعات خود را وارد نمایید." },
    { question: "نحوه پرداخت اقساط چگونه است؟", answer: "پرداخت اقساط از طریق درگاه پرداخت سایت انجام می‌شود." }, 
    { question: "چگونه سفارش ثبت کنم؟", answer: "برای ثبت سفارش، محصول مورد نظر را به سبد خرید اضافه کرده و ادامه دهید." },
    { question: "چگونه سفارش ثبت کنم؟", answer: "برای ثبت سفارش، محصول مورد نظر را به سبد خرید اضافه کرده و ادامه دهید." },
 ]; 
    
    return ( 
    
    <div className="p-6 grid grid-cols-2 gap-6 " > 

    <div>
        <p2 className="font-bold text-base"> ثبت نام </p2>
        <FAQList faqs={faqs} /> 
    </div>

    <div>
        <p2 className="font-bold text-base">  پرداخت اقساطی </p2>
        <FAQList faqs={faqs} /> 
    </div>

    <div>
        <p2 className="font-bold text-base"> نحوه دریافت حضوری سفارش </p2>
        <FAQList faqs={faqs} /> 
    </div>

    <div>
        <p2 className="font-bold text-base"> نحوه ثبت کالا </p2>
        <FAQList faqs={faqs} /> 
    </div>
          
    </div>
     ); 
    }; 
    
    export default FaqPage;