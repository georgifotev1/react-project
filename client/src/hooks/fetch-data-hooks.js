import axios from "axios";
import { API_URL } from "../constants/constants";
import { clearUserData } from "../utils/userData";

export const handleAuth = async (data, method) => {
  return axios.post(`${API_URL}/auth/${method}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const handleLogout = async () => {
  await axios.get(`${API_URL}/auth/logout`);
  clearUserData();
};
