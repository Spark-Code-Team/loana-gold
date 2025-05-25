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





export const sell_gold = async (amount) => {
  try {

    const response = await api.post('/finance/sell-gold/' , {
      amount
    });
    
    console.log('/////-----///--//->' , response)
    return { response };
  } catch (error) {
    console.log('/////-----///--//->' , error)
    return { error };
  }
}






export const buy_gold = async (amount) => {
  try {

    const response = await api.post('/finance/buy-gold/' , {
      amount,
      cash_amount:""
    });
    
    console.log('/////-----///--//->' , response)
    return { response };
  } catch (error) {
    console.log('/////-----///--//->' , error)
    return { error };
  }
}
  
