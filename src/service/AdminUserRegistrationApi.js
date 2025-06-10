import api from "@/config/api";

export const AdminUserRegistrationApi = async (Data) => {
    try {
      const response = await api.post('/adminpanel/users/create-user/',Data);
    
      return { response };
    } catch (error) {
      return { error };
    }
  };
  