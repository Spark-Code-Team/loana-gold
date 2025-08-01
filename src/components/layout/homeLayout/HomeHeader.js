"use client";
import { useState , useEffect} from "react";
import Link from "next/link";
// import { IoMdClose } from "react-icons/io";
import { Bounce, toast } from "react-toastify";
import Image from "next/image";
import {Profile} from "@/service/profile";
import { UserProfile } from "@/stores/profileStore";
import { useRouter } from "next/navigation";
import ModalPage from "@/components/elements/Modals";
import SanaRes from "@/components/modules/receivingCredit/SanaRes";
import PayNewRequest from "@/components/modules/receivingCredit/payNewRequest";
import { purchaseRequest } from "@/service/finance";
import { usePathname } from "next/navigation";

const HomeHeader = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ispayModalOpen , setIsPayModalOpen] = useState(false)
    const [openSidebar , setOpenSidebar] = useState(false);
    const profile = UserProfile()
    const router = useRouter()
    const path = usePathname()

    useEffect(() => {  
        if(!profile.data.role){
            const fetchProfile = async () => {
            const {response , error} = await Profile()
            if (response){
                profile.setProfile(response.data); 
            }
        }

            fetchProfile()
        }
    }, [profile.data.role]);  

    const openModal = () => {
        setIsOpen(false); // بستن منوی همبرگری در موبایل
        setIsModalOpen(true);
    };    


    const sendCreditRequest = async () => {

        const {response , error} = await purchaseRequest()
        if (response){
            openModal()
        }
        else{
            setIsPayModalOpen(true);
        }

    }
 
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
                        {profile.data.role ? (<>
                            {profile.data.role == 1 ? 
                                <Link href="/dashboard/user-account-dashboard">
                                    <Image alt="profile" onClick={() => console.log(profile.data.profile_img)} width={500} height={500} src={profile.data.profile_img} className="w-[49px] h-[49px] rounded-full"/>
                                    </Link> : <>{profile.data.role == 2 ? 
                                    <Link href="/admin/User-Account">
                                    <Image alt="profile" onClick={() => Profile()} width={500} height={500} src={profile.data.profile_img} className="w-[49px] h-[49px] rounded-full"/>
                                </Link> : <></> }</> }</>

                        ) : (
                            <button className="text-black" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? "✖️" : "☰"}
                            </button>
                        )}
                    </div>

                    {/* منو در دسکتاپ */}
                    <nav className="hidden md:flex items-center space-x-7 space-x-reverse">
                        <Link href="/Shop" className="text-black text-[18px]">فروشگاه</Link>
                        {/* <Link href="/About" className="text-black text-[18px]">درباره لونا</Link> */}
                        <Link href="/ContactUs" className="text-black text-[18px]">تماس باما</Link>
                        <Link href="/FAQ" className="text-black text-[18px]">سوالات متداول</Link>
                    </nav>

                    {/* دکمه‌های ورود و ثبت نام */}
                    <div className="hidden md:flex items-center">
                        {profile.data.role ? (
                            <>
                                <button
                                    className="border-[1px] border-[#AB8B53] font-bold text-[18px] text-[#AB8B53] px-4 py-3 mx-7 rounded-[8px]"
                                    onClick={()=>{
                                        sendCreditRequest()
                                    }}
                                >
                                    درخواست اعتبار خرید
                                </button>
                                
                                {profile.data.role == 1 ? 
                                <Link href="/dashboard/user-account-dashboard">
                                    <Image alt="profile" onClick={() => Profile()} width={500} height={500} src="/" className="w-[49px] h-[49px] rounded-full"/>
                                    </Link> : <>{profile.data.role == 2 ? 
                                    <Link href="/admin/User-Account">
                                    <Image alt="profile" onClick={() => Profile()} width={500} height={500} src="/" className="w-[49px] h-[49px] rounded-full"/>
                                </Link> : <></> }</> }

                            </>

                        ) : (
                            <>
                                <Link href="/Sign-in"
                                    className="border-[1px] border-[#AB8B53] font-bold text-[18px] text-[#AB8B53] px-4 py-3 mx-7 rounded-[8px]"
                                >
                                    درخواست اعتبار خرید
                                </Link>
                                <Link href="/Login">
                                    <button className="bg-[#AB8B53] text-black font-bold text-[18px] px-4 py-3 rounded-[8px]">
                                        ورود / ثبت‌ نام
                                    </button>
                                </Link>
                                
                            </>
                        )}
                    </div>
                </div>

                {/* منوی همبرگری در موبایل (فقط وقتی که کاربر لاگین نکرده باشد) */}
                {isOpen && !profile.data.role && (
                    <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center">
                        <button
                            className="absolute top-5 right-5 text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            ✖️
                        </button>
                        <nav className="flex flex-col items-center space-y-6">
                            <Link href="/Shop" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>فروشگاه</Link>
                            {/* <Link href="/About" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>درباره لونا</Link> */}
                            <Link href="/ContactUs" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>تماس باما</Link>
                            <Link href="/FAQ" className="text-black text-[20px]" onClick={() => setIsOpen(false)}>سوالات متداول</Link>
                        </nav>
                    </div>
                )}
            </header>

            <ModalPage isOpen = { isModalOpen }>
                <SanaRes setIsModalOpen={setIsModalOpen} />
            </ModalPage>

            <ModalPage isOpen = { ispayModalOpen }>
                <PayNewRequest setIsPayModalOpen = { setIsPayModalOpen } />
            </ModalPage>




        </>

    );
};

export default HomeHeader;
