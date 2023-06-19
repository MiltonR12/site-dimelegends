import { Torneo } from "@/types/interfaces";
import axios from "../lib/axios";

export const getMisTorneos = async () => {
  const res = await axios.get("/torneos/mistorneos");
  return res.data;
};

export const getTorneos = async () => {
  const res = await axios.get("/torneos");
  return res.data;
};

export const getTorneo = async (id: number) => {
  const res = await axios.get(`/torneos/${id}`);
  return res.data;
};

export const createTorneo = async (data: Torneo) => {
  const res = await axios.post("/torneos", data);
  return res;
};

export const deleteTorneo = async (uuid: string) => {
  await axios.delete(`torneos/${uuid}`);
};

export const updateTorneo = async (torneo: Torneo) => {
  const res = await axios.put(`/torneos/${torneo.uuid}`, torneo)
  return res.data
}