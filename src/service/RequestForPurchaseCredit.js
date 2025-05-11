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