import { api } from "@/config/api";

export const login = async (phone_number) => {

    try {
        const response = await api.post("/users/auth/login-send-otp/", {
            phone_number
        })

        console.log('//////////////->', response)    
        return { response }
    } catch(error) {
        console.log('//////////////errrrrrrrrrrrrrrrr->', error)    
        return { error }
    }
}

export const loginOtp = async (checkOtp) => {
    try{
        const response = await api.post('/users/auth/login-check-otp/', {
                phone_number: checkOtp.phoneNumber,
                otp_code: checkOtp.otp
        })

        console.log('//////////////->', response)    
        return{response}
    } catch(error){
        console.log('//////////////errrrrrrrrrrrrrrrrrrrr->', error)    
        return{error}
    }
}

export const setEmailPass = async (emailPass) => {
    try{
        const response = await api.post('/users/set-email-password/', {
            email: emailPass.email,
            password: emailPass.password,
            confirm_password:emailPass.confirm_password
        })

        console.log('//////////////->', response)    
        return{response}
    } catch(error){
        console.log('//////////////errrrrrrrrrrrrrrrrrrrr->', error)    
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
        console.log('----------->',error)
        return{error}
        
    }
}


export const sendOtp = async (formData) => {
    try{
        const response = await api.post('/users/auth/send-otp/', {
                phone_number: formData.mobileNumber
        })

        console.log('//////////////->', response)    
        return{response}
    } catch(error){
        console.log('//////////////errrrrrrrrrrrrrrrrrrrr->', error)    
        return{error}
    }
}



export const register = async (formData) => {
        try{

            console.log(formData,'لاگ جدید')
            const response = await api.post('/users/auth/register/',{    
                phone_number: formData.mobileNumber,
                national_code:formData.nationalCode ,
                first_name: formData.firstName,
                last_name: formData.lastName,
                sheba: formData.shebaNumber,
                bank_name: formData.bankName,
                otp_code: formData.otp
            }

            
        )

            console.log('//////////////->', response)    
            return {response}
        }catch(error){

            console.log('//////////////errrrrrrrrrrrrrrrrrrrrr->', error)    
            return {error}
        }
}

