import axios from "axios";
import { API_URL } from "../constants/constants";
import { toast } from "react-toastify";

export const handleAuth = async (data, method) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = sessionStorage.getItem("authToken");
  if (token != null) {
    options.headers["X-Authorization"] = token;
  }
  try {
    const response = await axios.post(
      `${API_URL}/auth/${method}`,
      { ...data },
      options
    );
    sessionStorage.setItem("email", response.data.email);
    sessionStorage.setItem("authToken", response.data.accessToken);
    sessionStorage.setItem("userId", response.data._id);
  } catch (error) {
    toast.error(error.response.data.message);
    return;
  }
};

export const handleLogout = async () => {
  await axios.get(`${API_URL}/auth/logout`);
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("userId");
};
