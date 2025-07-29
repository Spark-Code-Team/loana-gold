"use client"

import ModalPage from '@/components/elements/Modals';
import { validationResult } from '@/service/finance';
import { UserProfile } from '@/stores/profileStore';
import { convertToJalali } from '@/utils/setTime';
import { selectCreditAmountInstallment } from '@/service/finance';
import { useEffect, useState } from 'react';
import Close from '../../../../public/icons/close';
import Image from 'next/image';
import { ThreeDots } from 'react-loader-spinner';


const Login = () => {

    const [ isLoading , setIsLoading ] = useState(true)
    const [ credit , setCredit ] = useState() 
    const [ userGradehistory , setUserGradeHistory ] = useState([])
    const [ installment , setInstallment ] = useState();
    const [ isAccepted , setIsAccepted ] = useState(false);
    const [ isReloading , setIsReloading ] = useState(false)
    const [ openModal , setOpenModal ] = useState(0)
    
    const profileStore = UserProfile()

    const gradeCredit = (grade) => {

        if(grade == "A1" || grade == "A2" || grade == "A3") {
            return 10
        } else if(grade == "B1" || grade == "B2" || grade == "B3") {
            return 7.5
        } else {
            return 5
        }
        
    }

    useEffect(() => {
        gradeCredit(profileStore.data.grade)        
    }, [profileStore.data])

    useEffect(()=>{
        setIsReloading(false)
    }, [isReloading])

        const gradeAchivedAt = (date) => {
        return (convertToJalali(date))}

    useEffect(()=>{
        const getGrade = async () =>{
            const {response , error} = await validationResult()
            setUserGradeHistory  (response.data.results);
            setIsLoading(false)
        }
        getGrade()
    },[])

    const handleChange = (e) => {
        const value = e.target.value;

        const floatPattern = /^(\d+(\.\d{0,2})?)?$/;
    
        if (value === '') {
          setCredit('');
          return;
        }
    
        if (floatPattern.test(value)) {
          const num = parseFloat(value);
          if (num <= gradeCredit(profileStore.data.grade)) {
            setCredit(value);
          }
        }
        };



        const handleChangeInstallment = (event) => {
            const inputValue = event.target.value;
            if (inputValue === '') {
                setInstallment(''); 
            }
            if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 6) {
                setInstallment(inputValue);
            }
        };

    const handleCheckboxChange = (e) => {
       setIsAccepted(e.target.checked);
    };   


    const handleSubmitCredit = () => {
        setOpenModal(2)
    }

    const handleSubmitInstallment = async () => {
        const {response , error} = await selectCreditAmountInstallment({
                amount : credit ,
                installments : installment
            })
        if(response){
            setOpenModal(3)
        }else{
            toast.error(error.response?.data.non_field_errors[0] || "مشکلی پیش آمده", { 
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              })
        }
    }

    return(

        <div className='flex flex-col w-[100%] '>

        <div className=" border rounded-xl border-gray-200 h-min mx-[24px] pb-[24px] top-0 ">

        <div className="w-full pr-8 font-bold text-[20px] border-b border-gray-200 p-[20px] ">تاریخچه اعتبار سنجی</div>

{isLoading? <div className='mt-7' ><ThreeDots
                      visible={true}
                      height="10"
                      width="80"
                      color="#D2AB67"   
                      radius="9"
                      ariaLabel="three-dots-loading"
                      /></div> : <>
                                  {userGradehistory.length>0?<>
                {userGradehistory.map((p,index)=>{
    
    if(p.status === "completed"){
        if(!p.is_accepted){
        return( 
            <>
                <div className="w-full pr-8 font-bold mt-6">نتیجه اعتبار سنجی</div>

                <div className="w-full pr-8 mt-6  ">نتیجه اعتبار سنجی : امکان دریافت اعتبار تا {gradeCredit(p?.grade)} گرم طلا</div>

                <div className="w-full pr-8 mt-6 ">تاریخ ثبت : {gradeAchivedAt(p?.achieved_at)}</div>

                <div className="w-full pr-8 mt-6 text-red-600 ">تاریخ اعتبارسنجی تا 24 ساعت اعتبار دارد و پس از اتمام زمان دوباره باید اعتبار سنجی کنید.</div>

                <br/>  

                <button className=" 
                    mr-6 
                    p-[16px]
                    bg-[#EDEDED] 
                    rounded-xl 
                  text-black
                  hover:bg-primary
                  hover:text-black
                    text-xl
                    md:text-base
                    "
                    onClick={() => {
                        setOpenModal(1)
                    }}
                    >
                        تایید و ادامه
                </button>
            </>
            
        )}else{
            return(
                <div className="w-full border-gray-200 border-t h-min mt-[16px] pt-[24px] px-[24px] top-0 ">
                    <div className="w-full font-bold text-[20px] border-gray-200 mb-[12px] ">درخواست اعتبار</div>
                    <div className='flex flex-row justify-around' >
                        <span className="mb-[12px] w-max ">نتیجه اعتبار سنجی: امکان دریافت اعتبار تا {gradeCredit(p.grade)} گرم طلا</span>
                        <span className="mb-[12px] w-max ">تاریخ درخواست: {convertToJalali(p.achieved_at)} </span>
                        <span className="mb-[12px] w-max ">تایید توسط شما: <span className='text-green-500' >تایید شده</span></span>
                    </div>
                </div>
            )
        }
    }
    else if(p.status === "in_progress"){
        return(
            <>
                <div className="w-full pr-8 font-bold mt-6">نتیجه اعتبار سنجی: در حال پردازش</div>

                <div className="w-full pr-8 mt-6 ">تاریخ درخواست : {gradeAchivedAt(p?.created_at)}</div>

                <br/>
            </>
        )
    }
    else{
        return(
            <>
                <div className="w-full pr-8 font-bold mt-6">نتیجه اعتبار سنجی:<span className='text-red-600' >درخواست منقضی شده</span></div>

                <div className="w-full pr-8 mt-6 ">تاریخ درخواست : {gradeAchivedAt(p?.achieved_at)}</div>

                <br/>
            </>
        )                }
    
})}
</>:<div className='px-[24px] pt-[24px]'>رکوردی موجود نمیباشد</div>}
</> }



            </div>

 
            <ModalPage isOpen={openModal == 1 ? true : false}>
                <div className="
                bg-white 
                md:w-[664px] 
                md:p-8 
                rounded-xl 
                md:shadow-lg
                ">

                    <div
                        className='
                        flex
                        justify-between                        
                        '
                        >
                        <Image
                                    src="/images/ticksabz.png"
                                    alt="sabz"
                                    width={56}
                                    height={56}
                                    className="
                                    w-14
                                    h-14
                                    bg-[#CCF1DD]
                                    rounded-lg
                                    "
                                    />

                        <button 
                                onClick={()=>{setOpenModal(0)}}
                                className="font-bold py-2 px-4 rounded text-xl flex items-center justify-center">
                            <Close/>
                        </button>

                    </div>


                    <div className="
                    w-[600px]
                    h-[270px]
                    justify-center
                    flex
                    flex-col
                    items-right
                    gap-y-5
                    
                    ">
                        <p className="
                        text-2xl
                        md:text-base
                        ">
                        میزان اعتبار
                        </p>

                        <p className="
                        text-xl
                        md:text-base
                        text-[#A6A6A6]">
                            میزان اعتبار خود را تا {gradeCredit(profileStore.data.grade)} گرم طلا انتخاب کنید.
                        </p>

                        <div className="
                        flex
                        items-center
                        w-full
                        h-12
                        rounded-xl
                        border-[1px]
                        boredr-[#E1E1E1]
                        "
                        >
                        <input
                        className="
                        border-none
                        focus:outline-none
                        focus:ring-0
                        focus:boredr-transparent
                        rounded-xl
                        w-[320px]
                        "
                        placeholder="0.1 گرم طلا"
                        type="text"
                        name="credit"  
                        onChange={handleChange}
                        value={credit}                        
                        />
                        </div>


                    <div
                        className='
                        flex
                        justify-around
                        w-[100%]
                        gap-12
                    '
                    >
                    <button className="
                        w-full
                        h-12 
                        bg-[#EDEDED] 
                        rounded-xl 
                        text-black
                        hover:bg-primary
                        hover:text-black
                        text-xl
                        "
                        onClick={() => {
                            if(credit){
                                handleSubmitCredit()
                            }
                        }}
                        >
                            تایید و ادامه
                        </button>

                        <button className="
                        w-full
                        h-12 
                        rounded-xl 
                        border
                        border-primary
                        text-primary
                        text-xl
                        "
                        onClick={() => {
                            setOpenModal(0)
                        }}
                        >
                            انصراف
                        </button>

                    </div>

                    </div>


                </div>
            </ModalPage>

            <ModalPage isOpen={openModal == 2 ? true : false} >
                <div className="
                bg-white 
                md:w-[664px] 
                md:p-8 
                rounded-xl 
                md:shadow-lg
                ">

                    <div
                        className='
                        flex
                        justify-between                        
                        '
                        >
                        <Image
                                    src="/images/ticksabz.png"
                                    alt="sabz"
                                    width={56}
                                    height={56}
                                    className="
                                    w-14
                                    h-14
                                    bg-[#CCF1DD]
                                    rounded-lg
                                    "
                                    />

                        <button 
                                onClick={()=>{setOpenModal(0)}}
                                className="font-bold py-2 px-4 rounded text-xl flex items-center justify-center">
                            <Close/>
                        </button>

                    </div>


                    <div className="
                    w-[600px]
                    h-[270px]
                    justify-center
                    flex
                    flex-col
                    items-right
                    gap-y-5
                    
                    ">
                        <p className="
                        text-2xl
                        md:text-base
                        ">
                            اقساط
                        </p>

                        <p className="
                        text-xl
                        md:text-base
                        text-[#A6A6A6]">
                            تعداد اقساط خود را انتخاب کنید.
                        </p>

                        <div className="
                        flex
                        items-center
                        w-full
                        h-12
                        rounded-xl
                        border-[1px]
                        boredr-[#E1E1E1]
                        "
                        >
                        <input
                        className="
                        border-none
                        focus:outline-none
                        focus:ring-0
                        focus:boredr-transparent
                        rounded-xl
                        w-full
                        
                        "
                        placeholder="حداکثر 6 قسط"
                        type="text"
                        name="installment"  
                        onChange={handleChangeInstallment}
                        value={installment}                        
                        />
                        </div>


                    <div
                        className='
                        flex
                        justify-around
                        w-[100%]
                        gap-12
                    '
                    >
                    <button className="
                        w-full
                        h-12 
                        bg-[#EDEDED] 
                        rounded-xl 
                        text-black
                        hover:bg-primary
                        hover:text-black
                        text-xl
                        "
                        onClick={() => {
                            if(installment){
                                handleSubmitInstallment()
                            }
                        }}
                        >
                            تایید و ادامه
                        </button>

                        <button className="
                        w-full
                        h-12 
                        rounded-xl 
                        border
                        border-primary
                        text-primary
                        text-xl
                        "
                        onClick={() => {
                            setOpenModal(0)
                        }}
                        >
                            انصراف
                        </button>

                    </div>

                    </div>


                </div>  
            </ModalPage>

            <ModalPage isOpen={openModal == 3 ? true : false}>
                                <div className="
                bg-white 
                md:w-[664px] 
                md:p-8 
                rounded-xl 
                md:shadow-lg
                ">

                    <div
                        className='
                        flex
                        justify-between                        
                        '
                        >
                        <Image
                                    src="/images/ticksabz.png"
                                    alt="sabz"
                                    width={56}
                                    height={56}
                                    className="
                                    w-14
                                    h-14
                                    bg-[#CCF1DD]
                                    rounded-lg
                                    "
                                    />

                        <button 
                                onClick={()=>{setOpenModal(0)}}
                                className="font-bold py-2 px-4 rounded text-xl flex items-center justify-center">
                            <Close/>
                        </button>

                    </div>


                    <div className="
                    w-[600px]
                    h-[270px]
                    justify-center
                    flex
                    flex-col
                    items-right
                    gap-y-5
                    
                    ">
                        <p className="
                        text-3xl
                        md:text-base
                        ">
                           <h2>قوانین و مقررات</h2> 
                        </p>

                        <p className="
                        text-xl
                        md:text-base
                        text-[#1E1E1E]">
                            <li>در صورت دریافت اعتبار قسط اول نقدی پرداخت میشود.</li>
                            <li>در صورت عدم پرداخت جریمه به اقصاط اضافه میشود.</li>
                            <li>در صورت دریافت اعتبار قسط اول نقدی پرداخت میشود.</li>
                            <li>در صورت عدم پرداخت جریمه به اقصاط اضافه میشود.</li>
                            <li>در صورت دریافت اعتبار قسط اول نقدی پرداخت میشود.</li>
                            <li>در صورت عدم پرداخت جریمه به اقصاط اضافه میشود.</li>
                        </p>

                        <label>
                          <input 
                            type="checkbox"
                            id="termsCheckbox" 
                            onChange={handleCheckboxChange}/>
                          شرایط و قوانین را می‌پذیرم.
                        </label>



                        
                    <div
                        className='
                        flex
                        justify-around
                        w-[100%]
                        gap-12
                    '
                    >
                    <button className="
                        w-full
                        h-12 
                        bg-[#EDEDED] 
                        rounded-xl 
                        text-black
                        hover:bg-primary
                        hover:text-black
                        text-xl
                        "
                        onClick={() => {
                            if(isAccepted){
                                handleSubmitData()
                            }
                        }}
                        >
                            پرداخت پیش قسط
                        </button>

                        <button className="
                        w-full
                        h-12 
                        rounded-xl 
                        border
                        border-primary
                        text-primary
                        text-xl
                        "
                        onClick={() => {
                            setOpenModal(0)
                        }}
                        >
                            انصراف
                        </button>

                    </div>

                    </div>


                </div> 
            </ModalPage>



        </div>

    )

}


export default Login;
