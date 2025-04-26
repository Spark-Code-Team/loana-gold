import { api } from "@/config/api";

export const login = async (phone_number) => {

    try {
        const response = await api.post("/users/auth/login/", {
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
        const response = await api.post('/users/auth/check-otp/', {
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

export const register = async (formData) => {
        try{
            const response = await api.post('/users/auth/register/',{    
                phone_number: formData.mobileNumber,
                national_code:formData.nationalCode ,
                first_name: formData.firstName,
                last_name: formData.lastName,
                sheba: formData.shebaNumber,
                bank_name: formData.bankName
            }
            
        )

            console.log('//////////////->', response)    
            return {response}
        }catch(error){

            console.log('//////////////errrrrrrrrrrrrrrrrrrrrr->', error)    
            return {error}
        }
}

