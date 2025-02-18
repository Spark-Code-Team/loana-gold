"use client"
import {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionQ = ()=>{

    const faqs = [
        { question: 'لونا چیست؟', answer: 'لونا یک سیستم مالی غیرمتمرکز است که...' },
        { question: 'چرا در لونا سرمایه گذاری کنم؟', answer: 'به دلیل ویژگی‌های منحصر به فرد لونا...' },
        { question: 'چگونه پرداخت اقساطی انجام دهم؟', answer: 'شما می‌توانید از طریق درگاه‌های آنلاین...' },
        { question: 'امکان تحویل حضوری طلا وجود دارد؟', answer: 'ابتدا از طریق قسمت جستجو و دسته بندی پزشک مورد نظر خود را انتخاب کنید...' }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return(

        <>

            <div className="md:w-[85%] w-full mx-auto p-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-2">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`w-full flex justify-between items-center text-right p-4 transition-all duration-300 shadow-md ${
                                openIndex === index ? 'bg-gray-100' : 'bg-white'
                            }`}
                        >
                            <span className="text-gray-800 font-medium">{faq.question}</span>
                            {openIndex === index ? (
                                <IoIosArrowDown className="w-5 h-5 text-gold-500" />
                            ) : (
                                <IoIosArrowDown className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 bg-gray-100 ${
                                openIndex === index ? 'max-h-40 p-4 text-gray-600' : 'max-h-0'
                            }`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>

        </>

    )

}


export default AccordionQ;