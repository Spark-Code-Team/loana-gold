import api from "@/config/api"


export const Profile = async () =>{

    try {
        const response = await api.get('/users/profile/')
        console.log('//////////-> response',response)
        return {response}
    } catch (error) {
        console.log('//////////-> error', error)
        return {error}
    }


}
