import Api, { api } from "@/config/api";



export const login = async (phone_number) => {

    try {
        const response = await api.post("/users/auth/login/", {
            phone_number
        })

        return { response }
    } catch(error) {
        return { error }
    }
}

// export const otp = async () => {

// }

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
            
            return {response}
        }catch(error){
            return {error}
        }
}
