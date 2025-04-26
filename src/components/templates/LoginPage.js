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


    return(
        <>
        {loginRegisterState.state === 0 ? (
            <RegisterLogin setloginRegisterState={setloginRegisterState} />
        ) : loginRegisterState.state === 1 ? (
            <VerificationCode dynamicPhoneNumber={loginRegisterState.phone} setloginRegisterState={setloginRegisterState} />
        ) : (
            <SignInPhone setloginRegisterState={setloginRegisterState} />
        )}
    </>
    )
}
export default LoginPage;

