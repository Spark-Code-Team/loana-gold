import api from "@/config/api";
import { Bounce, toast } from "react-toastify";


export const purchaseRequest = async () => {
    try {
        const response = await api.post('/finance/credit-request/')

        console.log('res--------->' , response)
        return {response}

    } catch (error) {


        console.log('err---------->' , error)
        return {error}
    }

}








export const selectCreditAmountInstallment = async ({amount,installments}) => {
    try{
        const response = await api.post('/finance/select-credit-amount-installment/' , {
                amount,
                installments
            }
         )

         return {response};
    } catch(error){
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












export const userInstallments = async (status) => {
    try{
        const response = await api.get(`/finance/user-installments?status=${status}`)
        console.log(response)
        return {response};
    } catch(error){
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





export const creditPayment50000 = async (id) => {
    try{
        const response = await api.post('/finance/credit-payment/',{
                type: "credit",
                installment_id: id
        })
        console.log(response)
        return {response};
    } catch(error){
        console.log(error)
        return {error}
    }
}





export const creditPayment = async (id) => {
    try{
        const response = await api.post('/finance/credit-payment/',{
                type: "installment",
                installment_id: id
        })
        console.log(response)
        return {response};
    } catch(error){
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












export const validationResult = async () =>{
    try {
        const response = await api.get('/finance/user-grades-list') 
        console.log('------------>',response)
      return{response}
    } catch (error) {
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







export const transactionsList = async() =>{
    try {
        const response = await api.get('/finance/transactions-list') 
        console.log('---------|||||--->',response)
      return{response}
    } catch (error) {
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







export const chargeWallet = async (amount) => {
    try{
        const response = await api.post('/finance/charge-wallet/', {amount})
        console.log('------>' , response)
        toast.success(response.data.message, { 
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }) 
        return{response}
    } catch(error){
        console.log('------>' , error)
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







export const walletBalance = async () => {
    try{
        const response = await api.get('/finance/wallet/balance/')
        console.log('------>' , response)

        return{response}
    } catch(error){
        console.log('------>' , error)
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

export const creditResult = async () => {
    try{
        const response = await api.post('/finance/credit-result/')
        console.log('------>' , response)

        return{response}
    } catch(error){
        console.log('------>' , error) 
        return{error}
    }
}








