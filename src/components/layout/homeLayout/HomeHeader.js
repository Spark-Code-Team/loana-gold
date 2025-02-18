"use client";
import { useState } from "react";
import Link from "next/link";
import IsOpen from "../../../../public/icons/IsOpen";
import HeaderShopOpen from "@/components/modules/homepage/HeaderShopOpen";

const HomeHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);


    return (
        <header className="shadow-lg bg-white">
            <div className="container mx-auto flex items-center justify-between py-7 px-6">
                
                {/* لوگو */}
                <Link href="/" className="text-black text-[18px]">
                    <div className="text-[#D2AB67] font-bold text-[32px]">لوگو</div>
                </Link>

                {/*دکمه‌ی همبرگری در موبایل */}
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <IsOpen/>
                    ) : (
                        <IsOpen/>
                    )}
                </button>

                {/* منو در دسکتاپ */}
                <nav className="hidden md:flex items-center space-x-7 space-x-reverse">
                    
                    {/* هاور برای نمایش `HeaderShopOpen` */}
                    <div 
                        className="md:relative"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                    >
                        <Link href="/Shop" className="text-black text-[18px]">
                            فروشگاه
                        </Link>

                        {/*منوی بازشو در هاور */}
                        {isShopOpen && (
                            <div className="absolute top-7 z-50">
                                <HeaderShopOpen/>
                            </div>
                        )}
                    </div>

                    <Link href="/Shop" className="text-black text-[18px]">درباره لونا</Link>
                    <Link href="/ContactUs" className="text-black text-[18px]">تماس باما</Link>
                    <Link href="/FAQ" className="text-black text-[18px]">سوالات متداول</Link>
                </nav>

                {/* دکمه‌های ورود و ثبت نام */}
                <div className="hidden md:flex items-center">
                    <button className="border-[1px] border-[#AB8B53] font-bold text-[18px] text-[#AB8B53] px-4 py-3 mx-7 rounded-[8px]">
                        درخواست اعتبار خرید
                    </button>

                    <Link href="/Login">
                        <button className="bg-[#AB8B53] text-black font-bold text-[18px] px-4 py-3 rounded-[8px]">
                            ورود / ثبت‌ نام
                        </button>
                    </Link>
                </div>
            </div>

            {/* منوی همبرگری در موبایل */}
            {isOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
                    <button
                        className="absolute top-5 right-5 text-black"
                        onClick={() => setIsOpen(false)}
                    >
                        <IsOpen/>
                    </button>

                    <nav className="flex flex-col items-center space-y-6">
                        <Link href="/Shop" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>فروشگاه</Link>
                        <Link href="/Shop" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>درباره لونا</Link>
                        <Link href="/ContactUs" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>تماس باما</Link>
                        <Link href="/FAQ" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>سوالات متداول</Link>

                        <button className="border-[1px] border-[#AB8B53] font-bold text-[20px] text-[#AB8B53] px-6 py-4 rounded-[8px]" onClick={() => setIsOpen(false)}>
                            درخواست اعتبار خرید
                        </button>

                        <Link href="/Login">
                            <button className="bg-[#AB8B53] text-black font-bold text-[20px] px-6 py-4 rounded-[8px]" onClick={() => setIsOpen(false)}>
                                ورود / ثبت‌ نام
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default HomeHeader;
