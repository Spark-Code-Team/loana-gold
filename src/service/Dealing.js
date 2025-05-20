import api from "@/config/api";

export const Dealing = async (obj) => {
    console.log("-> \n", obj , '\n')
    try {

      const response = await api.post('/finance/exchange/', obj);
      
      return { response };
    } catch (error) {
      return { error };
    }
  };
  
