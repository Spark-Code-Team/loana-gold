import api from "@/config/api"
import { toast } from "react-toastify";




const AdminTransactionApi = async(params = '') =>{
    console.log(params,'this is params')
    try {

        const response = await api.get(`/adminpanel/transaction/list${params}`);
        console.log(response)
        return {response}
        
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data.non_field_errors || "مشکل پیش آمده است");
        return {error}
        
    }
}
export default AdminTransactionApi;