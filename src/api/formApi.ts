import axios from "@/lib/axios";
import { Equipo } from "@/types/interfaces";

type RegisterTeam = {
  equipo: Equipo;
  url_formulario: string;
};

type DateDeleteRecord = {
  url_formulario: string,
  id: number
}

export const getTeams = async (url_formulario: string) => {
  const res = await axios.get(`form/${url_formulario}`);
  return res.data;
};

export const registerDevice = async ({
  equipo,
  url_formulario,
}: RegisterTeam) => {
  const res = await axios.post(`/form/${url_formulario}`, equipo);
  return res.data;
};

export const deleteRecord = async ({url_formulario, id}:DateDeleteRecord) => {
  await axios.delete(`/form/${url_formulario}/${id}`)
}