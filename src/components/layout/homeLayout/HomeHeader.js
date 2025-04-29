"use client";
import { useState , useEffect} from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { getCookie } from "@/utils/cookies";
import {Profile} from "@/service/profile";
import { UserProfile } from "@/stores/profileStore";

const HomeHeader = () => {

    const itemsSidebar = [
        {id:1 , title:"حساب کاربری" , image:"/images/user-sidebar.png"},
        {id:1 , title:"کیف پول" , image:"/images/kif-pul.png"},
        {id:1 , title:"اقساط" , image:"/images/aghsat.png"},
        {id:1 , title:"معامله طلا" , image:"/images/moamele.png"},
        {id:1 , title:"تاریخچه اعتبارسنجی" , image:"/images/shopping.png"},
        {id:1 , title:"ثبت محصول" , image:"/images/cart.png"},
        {id:1 , title:"سفارش ها" , image:"/images/tarakonesh.png"},
        {id:1 , title:"تراکنش ها" , image:"/images/help.png"},
    ]

    const profile = UserProfile()

    useEffect(()=>{
        console.log('this is profile1111111111111111111111111111111111111111111111111111111111')
    },[])

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [login , setLogin] = useState(false);
    const [openSidebar , setOpenSidebar] = useState(false);

    const openModal = () => {
        setIsOpen(false); // بستن منوی همبرگری در موبایل
        setIsModalOpen(true);
    };


    return (

        <>

            <header className="shadow-lg bg-white relative">
                <div className="container mx-auto flex items-center justify-between py-7 px-6">
                    {/* لوگو */}
                    <Link href="/" className="text-black text-[18px]">
                        <div className="text-[#D2AB67] font-bold text-[32px]">لوگو</div>
                    </Link>

                    {/* دکمه‌ی همبرگری در موبایل (اگر کاربر لاگین نکرده باشد) یا آیکون پنل کاربری */}
                    <div className="md:hidden">
                        {login ? (
                            <div className="w-[49px] h-[49px] bg-red-400 rounded-full"></div>
                        ) : (
                            <button className="text-black" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? "✖️" : "☰"}
                            </button>
                        )}
                    </div>

                    {/* منو در دسکتاپ */}
                    <nav className="hidden md:flex items-center space-x-7 space-x-reverse">
                        <Link href="/Shop" className="text-black text-[18px]">فروشگاه</Link>
                        <Link href="/About" className="text-black text-[18px]">درباره لونا</Link>
                        <Link href="/ContactUs" className="text-black text-[18px]">تماس باما</Link>
                        <Link href="/FAQ" className="text-black text-[18px]">سوالات متداول</Link>
                    </nav>

                    {/* دکمه‌های ورود و ثبت نام */}
                    <div className="hidden md:flex items-center">
                        {login ? (
                            <div className="w-[49px] h-[49px] bg-red-400 rounded-full"></div>
                        ) : (
                            <>
                                <button
                                    className="border-[1px] border-[#AB8B53] font-bold text-[18px] text-[#AB8B53] px-4 py-3 mx-7 rounded-[8px]"
                                    onClick={openModal}
                                >
                                    درخواست اعتبار خرید
                                </button>
                                {
                                    getCookie('refreshToken')&&getCookie('accessToken')
                                    ?<Link href="/dashboard/user-account-dashboard">
                                    <button onClick={Profile} className="bg-[#AB8B53] text-black font-bold text-[18px] px-4 py-3 rounded-[8px]">
                                        پنل کاربری
                                    </button>
                                </Link>:<Link href="/Login">
                                    <button className="bg-[#AB8B53] text-black font-bold text-[18px] px-4 py-3 rounded-[8px]">
                                        ورود / ثبت‌ نام
                                    </button>
                                </Link>
                                }
                            </>
                        )}
                    </div>
                </div>

                {/* منوی همبرگری در موبایل (فقط وقتی که کاربر لاگین نکرده باشد) */}
                {isOpen && !login && (
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
                        </nav>
                    </div>
                )}
            </header>


        </>

    );
};

export default HomeHeader;
