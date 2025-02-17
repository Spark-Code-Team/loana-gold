"use client"

import { useState } from "react";
import SignInPhone from "../modules/signIn/SignInPhone";
import VerificationCodeSignIn from "../modules/signIn/VerificationCodeSignIn";
import PasswordSignIn from "../modules/signIn/PasswordSignIn";
import ForgetPasswordSignIn from "../modules/signIn/ForgetPasswordSignIn";
import ResendPasswordSignIn from "../modules/signIn/ResendPasswordSignIn";
import NewPasswordSignIn from "../modules/signIn/NewPasswordSignIn";

const SignInPage = () => {
    const [loginState, setLoginState] = useState("phone");

    return(

        <>
        {loginState === "phone" && <SignInPhone setLoginState={setLoginState} />}
        {loginState === "verification" && <VerificationCodeSignIn setLoginState={setLoginState} />}
        {loginState === "password" && <PasswordSignIn setLoginState={setLoginState} />}
        {loginState === "forgetPassword" && <ForgetPasswordSignIn setLoginState={setLoginState} />}
        {loginState === "resendCode" && <ResendPasswordSignIn setLoginState={setLoginState} />}
        {loginState === "newPassword" && <NewPasswordSignIn setLoginState={setLoginState} />}
        </>



      
    )
}
export default SignInPage;