import api from "@/config/api";

const Addresss = async(AddressData) =>{
   
    try {
        const response = await api.post('/finance/address/',{

            province:AddressData.ostan,
            city:AddressData.shahr,
            number:AddressData.pelak,
            vahed:AddressData.vahed,
            postal_code:AddressData.codeposti,
            latitude:AddressData.mokhtasad1,
            longitude:AddressData.mokhtasad2
    })
    return{response}
        
    } catch (error) {
        console.error(" خطا در ارسال آدرس:", error);
      return{error}  
    }
}
export default Addresss;


 export const AddressGet = async () =>{

    try {
        const response = await api.get('/finance/address/')
        console.log('درسته-> response',response)
        return {response}
    } catch (error) {
        console.log('error', error)
        return {error}
    }


}


export const AddresssUpdate = async (id, data) => {
  try {
    const response = await api.put(`/finance/address/${id}/`, data);

    console.log("right در آپدیت آدرس:", response);

    return { response };
  } catch (error) {
    console.log("خطا در آپدیت آدرس:", error);
    return { error };
  }
};


export const AddressDelete = async (id) => {
  try {
    const response = await api.delete(`/finance/address/${id}/`);
    console.log('-> response',response)
    return { response };
  } catch (error) {
    console.error("خطا در حذف آدرس:", error);
    return { error };
  }
};

