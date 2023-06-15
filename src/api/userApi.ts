import axios from "../lib/axios";
import { UserRegister } from "../types/interfaces";

export const createUser = async (user: UserRegister) => {
  const res = await axios.post("/user", user);
  return res.data;
};

export const loginUser = async (data: UserRegister) => {
  const res = await axios.post("/login", data);
  return res.data
};

export const getUser = async () => {
  const res = await axios.get("/user");
  return res.data;
};

export const updateUser = async (user: any) => {
  const res = await axios.put(`/user`, user);
  return res.data;
};