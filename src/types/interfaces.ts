export interface Torneo {
  id?: number;
  nombre: string;
  creador?: string;
  fecha_inicio: string;
  fecha_finalizacion: string;
  url_pagina: string;
  url_formulario: string;
  costo: string;
  ubicacion: string;
  categoria: string;
  descripcion: string;
  requisitos: string[];
  reglas: string[];
  premios: string[];
  uuid?: string;
}

export interface UserRegister {
  name?: string;
  email: string;
  password: string;
}

export type Usuario = {
  username?: string;
  email?: string;
  name_page?: string;
  foto_perfil?: string;
  page?: string;
  biografia?: string;
  uuid?: string;
};

export interface ResLogin {
  token: string;
  username: string;
}

export interface Equipo {
  id?: number;
  name_team: string;
  captain: string;
  phone: number;
  players: string[];
  uuid?: string;
}
