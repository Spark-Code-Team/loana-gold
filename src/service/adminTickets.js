import api from "@/config/api"
import { toast } from "react-toastify";



export const getAllTickets = async (params = '') => {
    console.log(params,'this is params')
    try {
        const response = await api.get(`/adminpanel/ticket/list${params}`);
        console.log(response)
        return { response };
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data.non_field_errors || "مشکل پیش آمده است");
        return { error };
    }
};


