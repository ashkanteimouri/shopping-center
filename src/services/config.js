import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => Promise.reject(error.message),
);

export default api;
