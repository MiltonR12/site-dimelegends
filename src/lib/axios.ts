import axios from "axios";
import { useTokenStore } from "../store/auth";

const sandia = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

sandia.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;
  config.headers.Authorization = `Bearer ${token}`
  return config;
});

export default sandia;
