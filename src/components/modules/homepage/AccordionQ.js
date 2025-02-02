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
        <div className="w-full px-24 mt-24 mx-auto">
            <h2 className="text-xl font-bold mb-4">سوالات شما</h2>
            <div className="space-y-2">
                {faqData.map((item, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full flex justify-between items-center p-4 text-base font-normal bg-[#FBFBFB] hover:bg-[#FBFBFB] transition"
                        >
                            {item.question}
                            <span className={`transform transition ${openIndex === index ? "rotate-180" : ""}`}>⌄</span>
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
