"use client"

import { validationResult } from '@/service/auth';
import { UserProfile } from '@/stores/profileStore';
import { convertToJalali } from '@/utils/setTime';
import { useEffect, useState } from 'react';


const Login = () => {

    const [ gram, setGram ] = useState("")
    
    const profileStore = UserProfile()

    const date = profileStore.data.pending_loan 

    const gradeCredit = (grade) => {

        if(grade == "A1" || grade == "A2" || grade == "A3") {
            setGram(10)
        } else if(grade == "B1" || grade == "B2" || grade == "B3") {
            setGram(7.5)
        } else {
            setGram(5)
        }
        
    }

    useEffect(() => {
        gradeCredit(profileStore.data.grade)        
    }, [profileStore.data])

        
    
        const gradeAchivedAt = () => {
        return (convertToJalali(profileStore.data.grade_achieved_date))}


    useEffect(()=>{
        const getGrade = async () =>{
            const {response , error} = await validationResult()
        }
        getGrade()
    },[])



    return(

        <>
            {profileStore.data.grade?
            
                    <div className="w-full border rounded-xl border-gray-200 h-min mx-[24px] pb-[24px] top-0 ">

                        <div className="w-full pr-8 font-bold text-[20px] border-b border-gray-200 p-[20px] ">تاریخچه اعتبار سنجی</div>

                        <div className="w-full pr-8 font-bold mt-6">نتیجه اعتبار سنجی</div>

                        <div className="w-full pr-8 mt-6  ">نتیجه اعتبار سنجی : امکان دریافت اعتبار تا {gram} گرم طلا</div>

                        <div className="w-full pr-8 mt-6 ">تاریخ ثبت : {gradeAchivedAt()}</div>
                        
                        <div className="w-full pr-8 mt-6 text-red-600 ">تاریخ اعتبارسنجی تا 24 ساعت اعتبار دارد و پس از اتمام زمان دوباره باید اعتبار سنجی کنید.</div>


                    </div>   : 
                    <>
                    {date ?
                            <div className="w-full border rounded-xl border-gray-200 h-min mx-[24px] pb-[24px] top-0 ">

                                <div className="w-full pr-8 font-bold text-[20px] border-b border-gray-200 p-[20px] ">تاریخچه اعتبار سنجی</div>
                
                                <div className="w-full pr-8 font-bold mt-6">نتیجه اعتبار سنجی</div>
                
                                <div className="w-full pr-8 mt-6  ">نتیجه اعتبار سنجی : در حال پردازش</div>
                
                                <div className="w-full pr-8 mt-6 ">تاریخ درخواست : {convertToJalali(date)}</div>
                
                    </div> :
                            <div className="w-full first-line:h-min mx-[24px] pb-[24px] top-0 ">

                                درخواستی ثبت نشده
                
                            </div>
                    }</>
                    }


            



        </>

    )

}


export default Login;