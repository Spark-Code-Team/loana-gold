"use client"
import { useEffect, useState } from "react";
import RegisterLogin from "../modules/loginModule/RegisterLogin";
import VerificationCode from "../modules/loginModule/VerificationCode";
import SignInPhone from "../modules/signIn/SignInPhone";
const LoginPage = () => {
    const [loginRegisterState, setloginRegisterState] = useState ({
        state: 0,
        phone: '',
    })

    const [formData, setFormData] = useState({ 
        firstName: '',  
        lastName: '',  
        mobileNumber: '',  
        nationalCode: '',  
        shebaNumber: '',  
        bankName: '',
        otp_code: '',
    });


    return(
        <>
        {loginRegisterState.state === 0 ? (
            <RegisterLogin 
                setloginRegisterState={setloginRegisterState} 
                formData={formData}
                setFormData={setFormData}
            />
        ) : loginRegisterState.state === 1 ? (
            <VerificationCode 
                dynamicPhoneNumber={loginRegisterState.phone} 
                setloginRegisterState={setloginRegisterState}
                formData={formData}
                setFormData={setFormData}
            />
        ) : (
            <SignInPhone setloginRegisterState={setloginRegisterState} />
        )}
    </>
    )
}
export default LoginPage;

