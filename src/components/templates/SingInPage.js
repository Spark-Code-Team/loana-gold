"use client"

import { useState } from "react";
import SignInPhone from "../modules/signIn/SignInPhone";
import VerificationCodeSignIn from "../modules/signIn/VerificationCodeSignIn";
import PasswordSignIn from "../modules/signIn/PasswordSignIn";
import ForgetPasswordSignIn from "../modules/signIn/ForgetPasswordSignIn";
import ResendPasswordSignIn from "../modules/signIn/ResendPasswordSignIn";
import NewPasswordSignIn from "../modules/signIn/NewPasswordSignIn";

const SignInPage = () => {
    const [loginState, setLoginState] = useState({
        state: "phone",
        phoneNumber: 0,
        is_2fa: false,
    });

    return(

        <>
        {loginState.state === "phone" && <SignInPhone loginState={loginState} setLoginState={setLoginState} />}
        {loginState.state === "verification" && <VerificationCodeSignIn loginState={loginState} setLoginState={setLoginState} />}
        {loginState.state === "password" && <PasswordSignIn setLoginState={setLoginState} />}
        {loginState.state === "forgetPassword" && <ForgetPasswordSignIn setLoginState={setLoginState} />}
        {loginState.state === "resendCode" && <ResendPasswordSignIn setLoginState={setLoginState} />}
        {loginState.state === "newPassword" && <NewPasswordSignIn setLoginState={setLoginState} />}
        </>



      
    )
}
export default SignInPage;