
"use client"
import Image from "next/image";
import Link from "next/link";
import {Children, useState} from "react";
import {log} from "next/dist/server/typescript/utils";
import ModalPage from "@/components/templates/BuyingModalPage";
import { UserProfile } from "@/stores/profileStore";
import { purchaseRequest } from "@/service/finance";
import PayNewRequest from "@/components/modules/receivingCredit/payNewRequest";
import { toast } from "react-toastify";

const HomeFooter = () =>{

    const profile = UserProfile()
    const [login , setLogin] = useState(true);
    const [ispayModalOpen , setIsPayModalOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const sendCreditRequest = async () => {
        const { response, error } = await purchaseRequest();
        if (response) {
            setIsPayModalOpen(true);
            console.log("ispayModalOpen set to true due to success response");
        } 
        else if(error.response.data.Error[0]=='هنوز گرید شما تعیین نشده است'){
            toast.error(error.response.data.Error[0])
        }
        else if(error.response.data.Error[0]=='شما هم اکنون یک درخواست اعتبار در حال بررسی دارید.'){
            toast.error(error.response.data.Error[0])
        }
        else {
            setIsPayModalOpen(true);
        }
    }

        const openModal = () => {
            setIsOpen(false); 
            setIsModalOpen(true);
        };  

    return(

        <>
                    <div className="md:w-full bg-white md:pt-1 pt-1 lg:pr-0 lg:pl-0 pr-3 pl-3 mt-12 mb-14 border-t-2 border-t-[#D2AB67]">

                        <div className="md:w-[90%] m-auto mt-10 w-full">

                            <div className="w-full md:flex md:items-center">

                                <div className="md:w-1/2 w-full md:mt-0 mt-10 md:text-right text-center">
                                    <p>ایمیل خود را ثبت کنید تا با ما در ارتباط باشید</p>
                                </div>

                                <div className="md:w-1/2 md:flex md:justify-end gap-x-3 w-full md:mt-0 mt-7 flex justify-between">

                                    <button className="md:w-[91px] md:h-[40px] w-[30%] bg-[#D2AB67] rounded-xl text-sm">ثبت ایمیل</button>
                                    <input type="email" name="" className="md:w-[305px] h-[40px] border-2 border-[#E1E1E1] rounded-xl" placeholder="ایمیل خود را وارد کنید"/>

                                </div>

                            </div>

                            <div className="w-full m-auto mt-10 md:flex md:justify-around md:flex-wrap flex flex-wrap">

                                <div className="md:w-[304px] w-full">

                                    <div className="w-full text-[18px] md:text-right text-center text-[#D2AB67]">لوگو</div>

                                    <div className="mt-5 w-full md:text-right text-center">لونا اولین پلتفرم معاملات طلا در ایران است که به کاربران امکان می‌دهد تا به صورت مستقیم و به شیوۀ "Customer to Customer (C2C)" به معامله طلا پرداخته و از پروژه ایجاد یک پلتفرم امن، شفاف و سریع برای معامله طلا میان کاربران بهره‌مند شوند.</div>

                                    <div className="w-full mt-5 md:flex md:justify-start md:gap-x-3 flex justify-around">

                                        <Image src="/images/logo-instagram.png" alt="" width={24} height={24}/>
                                        <Image src="/images/logo-twitter.png" alt="" width={24} height={24}/>
                                        <Image src="/images/logo-linkedin.png" alt="" width={24} height={24}/>
                                        <Image src="/images/logo-facebook.png" alt="" width={24} height={24}/>

                                    </div>

                                </div>

                                <div className="md:w-[373px] w-full lg:mt-0 mt-5">

                                    <div className="w-full md:text-right text-center text-[18px] text-[#D2AB67]">اطلاعات تماس</div>
                                    <div className="w-full m-auto mt-5 md:text-right text-center">تلفن پشتیبانی : 09125143940</div>
                                    <div className="w-full m-auto mt-5 md:text-right text-center">آدرس دفتر مرکزی : پاسداران بوستان پنجم</div>
                                    <div className="w-full m-auto mt-5 md:text-right text-center">آدرس ایمیل : Info@daric.gold</div>

                                </div>

                                <div className="md:w-[128px] w-1/2 lg:mt-0 mt-5 md:text-right text-center">

                                    <div className="w-full md:text-right text-[18px] text-[#D2AB67]">دسترسی سریع</div>

                                    <div className="w-full m-auto mt-5">
                                        <Link href="#">صفحه اصلی</Link>
                                    </div>

                                    <div className="w-full m-auto mt-5">
                                        <Link href="#">محصولات</Link>
                                    </div>

                                    <div className="w-full m-auto mt-5">
                                        <Link href="#">سوالات متداول</Link>
                                    </div>

                                </div>

                                <div className="md:w-[103px] w-1/2 lg:mt-0 mt-5 md:text-right text-center">

                                    {/* <div className="w-full md:text-right text-[18px] text-[#D2AB67]">درباره لونا</div> */}

                                    {/* <div className="w-full m-auto mt-5">
                                        <Link href="#">درباره لونا</Link>
                                    </div> */}

                                    <div className="w-full m-auto mt-5">
                                        <Link href="#">تماس با ما</Link>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="w-full md:mt-12 mt-12 text-center p-2 text-white bg-[#D2AB67]">تمامی حقوق این وبگاه محفوظ و مربوط به لونا است.</div>

                    </div>


            {
                login && (
                    <>

                        <div className="md:hidden w-full flex justify-between mt-10 bg-yellow-300 fixed bottom-0 pt-2 pb-2">

            
                            <Link href='/Login' className="w-1/5 flex flex-wrap items-center">

                                <div className="w-full flex justify-center">
                                    <Image src="/images/user.png" alt="" width={24} height={24}/>
                                </div>

                                <dvi className="w-full text-[10px] text-center">
                                    حساب  کاربری                 
                                            </dvi>

                            </Link>

                            {profile.data.role ? 
                                <div onClick={()=>{sendCreditRequest()}} className="w-1/5 flex flex-wrap items-center">

                                    <div className="w-full flex justify-center">
                                        <Image src="/images/hand.png" alt="" width={24} height={24}/>
                                    </div>
    
                                    <div className="w-full text-[10px] text-center">درخواست اعتبار</div>
    
                                </div>
                            : <>
                                <Link href='/Sign-in' className="w-1/5 flex flex-wrap items-center">

                                    <div className="w-full flex justify-center">
                                        <Image src="/images/hand.png" alt="" width={24} height={24}/>
                                    </div>

                                    <div className="w-full text-[10px] text-center">درخواست اعتبار</div>

                                </Link>
                            </> }



                            <Link href='/' className="w-1/5 flex justify-center flex-wrap items-center">

                                <div className="w-[45px] h-[45px] bg-[#D2AB67] flex justify-center items-center rounded-full">
                                    <Image src="/images/home.png" alt="" width={24} height={24}/>
                                </div>

                            </Link>

                            <Link href='/ContactUs' className="w-1/5 flex flex-wrap items-center">

                                <div className="w-full flex justify-center">
                                    <Image src="/images/phone.png" alt="" width={24} height={24}/>
                                </div>

                                <div className="w-full text-[10px] text-center">تماس با ما</div>

                            </Link>

                            <Link href='/FAQ' className="w-1/5 flex flex-wrap items-center">

                                <div className="w-full flex justify-center">
                                    <Image src="/images/question.png" alt="" width={24} height={24}/>
                                </div>

                                <div className="w-full text-[10px] text-center">سوالات متداول</div>

                            </Link>
                        </div>

                        

                    </>
                )
            }


            <ModalPage open={ispayModalOpen}>
                <PayNewRequest setIsPayModalOpen={setIsPayModalOpen} />
            </ModalPage>
            


        </>

    )
}
export default HomeFooter;
