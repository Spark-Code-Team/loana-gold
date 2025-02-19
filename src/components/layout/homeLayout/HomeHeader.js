"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const HomeHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [login , setLogin] = useState(false);

    const openModal = () => {
        setIsOpen(false); // بستن منوی همبرگری در موبایل
        setIsModalOpen(true);
    };


    return (

        <>

            {
                login ? (

                    <div className="w-full h-[72px] border-b-[1.5px] border-b-[#C4C4C4] flex justify-between pr-5 pl-5 items-center">

                        <div className="w-[48px] h-[48px] flex items-center">
                            <Image src="/images/logo-menu.png" alt="" width={48} height={48}/>
                        </div>

                        <div className="w-[48px] h-[48px] bg-yellow-300 rounded-full">
                            <Image src="/images/user-lona.png" alt="" width={48} height={48}/>
                        </div>

                    </div>

                ):(
                    <header className="shadow-lg bg-white relative">
                        <div className="container mx-auto flex items-center justify-between py-7 px-6">
                            {/* لوگو */}
                            <Link href="/" className="text-black text-[18px]">
                                <div className="text-[#D2AB67] font-bold text-[32px]">لوگو</div>
                            </Link>

                            {/* دکمه‌ی همبرگری در موبایل */}
                            <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? "✖️" : "☰"}
                            </button>

                            {/* منو در دسکتاپ */}
                            <nav className="hidden md:flex items-center space-x-7 space-x-reverse">
                                <Link href="/Shop" className="text-black text-[18px]">فروشگاه</Link>
                                <Link href="/About" className="text-black text-[18px]">درباره لونا</Link>
                                <Link href="/ContactUs" className="text-black text-[18px]">تماس باما</Link>
                                <Link href="/FAQ" className="text-black text-[18px]">سوالات متداول</Link>
                            </nav>

                            {/* دکمه‌های ورود و ثبت نام */}
                            <div className="hidden md:flex items-center">
                                <button
                                    className="border-[1px] border-[#AB8B53] font-bold text-[18px] text-[#AB8B53] px-4 py-3 mx-7 rounded-[8px]"
                                    onClick={openModal}
                                >
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
                            <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-40">
                                <button
                                    className="absolute top-5 right-5 text-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ✖️
                                </button>

                                <nav className="flex flex-col items-center space-y-6">
                                    <Link href="/Shop" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>فروشگاه</Link>
                                    <Link href="/About" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>درباره لونا</Link>
                                    <Link href="/ContactUs" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>تماس باما</Link>
                                    <Link href="/FAQ" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>سوالات متداول</Link>

                                    <button className="border-[1px] border-[#AB8B53] font-bold text-[20px] text-[#AB8B53] px-6 py-4 rounded-[8px]" onClick={openModal}>
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

                        {/* مودال درخواست اعتبار خرید */}
                        {isModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] relative">

                                    {/* آیکون بستن */}
                                    <button
                                        className="absolute top-4 left-4 text-gray-500 hover:text-gray-800"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        <IoMdClose/>
                                    </button>

                                    <h2 className="text-xl font-bold text-gray-800 text-right mt-10">دریافت اعتبار خرید</h2>
                                    <p className="text-gray-600 text-right mt-6">
                                        نتیجه اعتبار سنجی در پنل کاربری اعلام می‌شود.
                                    </p>

                                    <div className="flex justify-center mt-6">
                                        <button
                                            className="w-[95%] border border-[#D2AB67] text-[#D2AB67] px-6 py-2 rounded-lg text-lg font-semibold hover:bg-[#D2AB67] hover:text-white transition"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            بستن
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )}
                    </header>
                )
            }

        </>

    );
};

export default HomeHeader;
