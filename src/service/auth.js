import api from "@/config/api"
import { Bounce, toast } from "react-toastify";



export const loginOtp = async (checkOtp) => {
    try{
        const response = await api.post('/users/auth/login-check-otp/', {
                phone_number: checkOtp.phoneNumber,
                email: checkOtp.email,
                otp_code: checkOtp.otp,
                password:checkOtp.password
        })
        console.log('//////////////->', response)    
        return{response}
    } catch(error){
        toast.error(error.response?.data.non_field_errors[0]
             || "مشکلی پیش آمده", { 
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })       
        return{error}
    }
}











export const setEmailPass = async (emailPass) => {
    try{
        const response = await api.post('/users/set-email-password/', {
            email: emailPass.email,
            otp_code: emailPass.otp_code,
            password: emailPass.password,
            confirm_password:emailPass.confirm_password
        })
        console.log('//////////////->', response)    
        return{response}
    } catch(error){
        toast.error(error.response?.data.non_field_errors[0]|| "مشکلی پیش آمده", { 
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
        return{error}
    }
}










export const changePassword = async (data) =>{
    try {
        const response = await api.post('/users/change-password/',{
            email: data.email,
            otp_code: data.otp_code,
            current_password: data.current_password,
            new_password: data.password,
            confirm_new_password: data.password_repeat
        }) 
      console.log('------------>',response)
      return{response}
    } catch (error) {        
        // اینجا باید ارور های مختلفی دریافت کنه که کلید های مختلفی دارن ولی نمیشه
        toast.error(error.response.data.non_field_errors[0] || "مشکلی پیش آمده")
        console.log(error)
        return{error}
        
    }
}















export const checkPassword = async (phonePass) =>{
    try {
        const response = await api.post('/users/auth/2fa-login/',{
            phone_number: phonePass.phoneNumber,
            password: phonePass.password
        }) 
        console.log(phonePass, 'i wnat to login')
      console.log('------------>',response)
      return{response}
    } catch (error) {
        toast.error(error.response?.data.detail || "مشکلی پیش آمده", { 
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }) 
        return{error}
        
    }
}












export const sendOtp = async (formData) => {
    try{
        const response = await api.post('/users/auth/send-otp/', {
                phone_number: formData.mobileNumber,
        })
        console.log('//////////////->', response)    
        return{response}
    } catch(error){
        toast.error(error.response?.data || "مشکلی پیش آمده", { 
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })       
        return{error}
    }
}












export const logOut = async (refreshToken) => {
    try{
        const response = await api.post('/users/auth/logout/', {
            refresh_token: refreshToken
        })
        console.log('//////////////->', response)    
        return{response}
    } catch(error){
        toast.error(error.response?.data || "مشکلی پیش آمده")       
        return{error}
    }
}









export const emailSendOtp = async (email) => {
    try {
        const response = await api.post('/users/auth/send-email-otp/', {
            email
        })
        console.log('//////////////->', response)    
        return{response}
    } catch(error){
          console.log(error)
        return{error}
    }

}













export const register = async (formData) => {
        try{
            const response = await api.post('/users/auth/register/',{    
                phone_number: formData.mobileNumber,
                national_code:formData.nationalCode ,
                first_name: formData.firstName,
                last_name: formData.lastName,
                sheba: formData.shebaNumber,
                bank_name: formData.bankName,
                otp_code: formData.otp,
            }            
        )
            console.log('//////////////->', response)
            return {response}
        }catch(error){
            console.log(error)
            toast.error(error.response?.data.non_field_errors[0] || "مشکلی پیش آمده", { 
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              })
            return {error}
        }
}







export const sendForgetPassOtp = async ({email}) => {
    try{
        const response = await api.post('/users/forget-password/send-otp/' , {
            email
        })
        console.log('//////////////->', response)    
        return{response}

    }catch(error){
        return {error}
    }
}






export const forgetPassword  = async ({email , otp_code , password , confirm_password}) => {

    try {
        const response = await api.post('/users/forget-password/check-otp/', {
            email,
            otp_code,
            password,
            confirm_password
        })
        console.log('//////////////->', response)    
        console.log(response)
        return{response}
    } catch(error){
        console.log(error)
        toast.error(error.response.data.detail)
        return{error}
    }
}











