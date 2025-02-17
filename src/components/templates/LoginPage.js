"use client"
import { useState } from "react";
import RegisterLogin from "../modules/loginModule/RegisterLogin";
import VerificationCode from "../modules/loginModule/VerificationCode";

const LoginPage = () => {
    const [loginRegisterState, setloginRegisterState] = useState (0)

    return(
        <>
        {loginRegisterState === 0 ? (
            <RegisterLogin setloginRegisterState={setloginRegisterState} />
        ) : loginRegisterState === 1 ? (
            <VerificationCode setloginRegisterState={setloginRegisterState} />
        ) : (
            <SignInPhone setloginRegisterState={setloginRegisterState} />
        )}
    </>
    )
}
export default LoginPage;

