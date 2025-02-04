"use client"

import { useState } from "react"

const faqData = [
    {
        question: " لونا چیست؟",
        answer: "ابتدا از طریق قسمت جستجو یا دسته بندی‌ها، بسته‌بندی مورد نظر خود را انتخاب کنید و در انتها اطلاعات تماس خود را جهت برقراری ارتباط وارد کرده و ثبت خود را تکمیل کنید.",
    },
    {
        question: "چرا در لونا سرمایه‌گذاری کنم؟",
        answer: "لونا یک پلتفرم سرمایه‌گذاری در طلا است که امکان خرید، فروش و نگهداری امن طلا را برای کاربران فراهم می‌کند.",
    },
    {
        question:"آیا امکان تحویل حضوری طلا وجود دارد؟",
        answer: "لونا به دلیل امنیت بالا، نقدشوندگی سریع و کارمزد کم، گزینه‌ای مناسب برای سرمایه‌گذاری در طلا است.",
    },
];

export default function AccordionQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="
          md:w-full 
          md:px-24 
          md:mt-24 
          md:mx-auto
          ">
            <h2 className="
               md:text-xl 
               md:font-bold 
               md:mb-4">
                سوالات شما
            </h2>

            <div className="md:space-y-2">
                {faqData.map((item, index) => (
                    <div key={index} className="
                        md:border 
                        md:rounded-lg 
                        md:overflow-hidden
                        ">

                        <button
                            onClick={() => handleToggle(index)}
                            className="
                            md:w-full 
                            md:flex 
                            md:justify-between 
                            md:items-center 
                            md:p-4 text-base 
                            md:font-normal 
                            md:bg-[#FBFBFB] 
                            md:hover:bg-[#FBFBFB] 
                            md:transition"
                        >
                            {item.question}
                            <span className={`transform transition ${openIndex === index ? "rotate-180" : ""}`}>
                            ⌄
                            </span>

                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? "max-h-40 p-4 bg-[#FBFBFB]" : "max-h-0"
                            }`}
                        >
                            {item.answer}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
