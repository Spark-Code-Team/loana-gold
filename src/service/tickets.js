import api from "@/config/api";

export const sendTicket = async ({message , title}) => {
    try {
        const response = await api.post('/finance/send-ticket/' , {
            message,
            title
        })

        console.log('res-000000000>' , response)
        return {response}

    } catch (error) {


        console.log('err-0000000000>' , error)
        return {error}
    }
}




export const getTickets = async () => {
    try {
        const response = await api.get('')

        console.log('res-11111111>' , response)
        return {response}

    } catch (error) {


        console.log('err-1111111>' , error)
        return {error}
    }

}