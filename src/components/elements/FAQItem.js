"use client";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-4">
            
            <button
                className="flex justify-between items-center w-full text-base "
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className={`transform transition ${isOpen ? "rotate-180" : ""}`}>⌄</span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 p-4 bg-[#FBFBFB]" : "max-h-0"
                }`}
            >
                {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
            </div>
        </div>
    );
};

export default FAQItem;
