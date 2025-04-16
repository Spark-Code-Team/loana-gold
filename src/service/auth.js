import Api, { api } from "@/config/api";

export const loginOtp = async (phone_number) => {

    try {
        const response = await api.post("/auth/login/", {
            phone_number: "09301737876"
           
        })

        return { response }
    } catch(error) {
        return { error }
    }
}

export const register = async (
    phone_number,
    password,
    first_name,
    last_name,
    national_code,
    email,
    sheba
    ) => {
        try{
            const response = await api.post('/auth/register/',{    
                phone_number:'',
                password,
                first_name,
                last_name,
                national_code:'8783710418',
                email:'fateme@gmail.com',
                sheba:'0540106830100821229609'
            }
        )
            return {response}
        }catch(error){
            return {error}
        }
}
