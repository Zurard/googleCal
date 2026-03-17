import Axios from "axios";

export const AuthService = {
  login: async (emailId: string, password: string) => {
    try {
      const response = await Axios.post("/api/auth/login", {
        emailId,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },
};
