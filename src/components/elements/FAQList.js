import FAQItem from "./FAQItem"; 

const FAQList = ({ faqs }) => 
    { return ( 
    
    <div className="
    max-w-2xl 
    bg-[#F8F8F8] 
    rounded-lg 
    p-6"> 
    {faqs.map((faq, index) => 
    ( <FAQItem key={index} question={faq.question} answer={faq.answer} />

     )
    )
    }
    </div>
    
);

}; 
    export default FAQList;