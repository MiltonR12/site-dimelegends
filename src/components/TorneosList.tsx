"use client"
import { Torneo } from "../types/interfaces";
import CardTorneo from "./cards/CardTorneo";

function TorneosList({torneos}: {torneos: Torneo[]}) {

  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {torneos?.map((torneo: Torneo) => (
        <CardTorneo
          key={torneo.id}
          nombre={torneo.nombre}
          fecha_inicio={torneo.fecha_inicio}
          fecha_finalizacion={torneo.fecha_finalizacion}
          categoria={torneo.categoria}
          descripcion={torneo.descripcion}
          premios={torneo.premios}
          id={torneo.id}
          reglas={torneo.reglas}
          ubicacion={torneo.ubicacion}
          costo={torneo.costo}
          requisitos={torneo.requisitos}
          url_formulario={torneo.url_formulario}
          url_pagina={torneo.url_pagina}
        />
      ))}
    </div>
  );
}

export default TorneosList;
