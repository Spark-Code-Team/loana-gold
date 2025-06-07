import api from "@/config/api"
import { toast } from "react-toastify";



export const getAllUsers = async () => {
    try{
        const response = await api.get('/adminpanel/users/') 
        return{response}
    } catch(error){
        toast.error(error.response?.data.non_field_errors[0] || "مشکلی پیش آمده")       
        return{error}
    }
}






export const deleteUser = async (id) =>{
    try{
        const response = await api.delete(`/adminpanel/users/${id}/`)
        return {response}
    }catch(error){
        toast.error(error.response?.data.non_field_errors[0] || "مشکلی پیش آمده")
        return {error}
    }
}







export const updateUser = async (data) =>{
    try{   
        const response = await api.put(`/adminpanel/users/${data.id}/` , data)
        return {response}
    }catch(error){
        toast.error(error.response?.data.non_field_errors[0] || "مشکلی پیش آمده")
        return {error}
    }
}