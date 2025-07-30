import api from "@/config/api"

export const getSingleUserInstallments = async (params = '') => {
    try {
        const response = await api.get(`/adminpanel/user-installments/${params}/`);
        console.log(response)
        return { response };
    } catch (error) {
        return { error };
    }
};

export const getSingleUserGrades = async (params = '') => {
    try {
        const response = await api.get(`/adminpanel/user-grades/${params}/`);
        console.log(response)
        return { response };
    } catch (error) {
        return { error };
    }
};

export const getSingleUserTransactions = async (params = '') => {
    try {
        const response = await api.get(`/adminpanel/user-transactions/${params}/`);
        console.log(response)
        return { response };
    } catch (error) {
        return { error };
    }
};

