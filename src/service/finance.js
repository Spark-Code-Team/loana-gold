import api from "@/config/api";

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