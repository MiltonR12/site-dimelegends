"use client"
import CardList from "@/components/cards/CardList";
import CardSection from "@/components/cards/CardSection";
import { useGetTorneo } from "@/hooks/useTorneo";
import { Torneo } from "@/types/interfaces";
import { useParams } from 'next/navigation'

function Torneo() {

  const params = useParams()

  const { data, isLoading, isError, error } = useGetTorneo(parseInt(params.id))

  if (isLoading) return <h3>Cargando...</h3>

  if (isError && error instanceof Error) return <p> Error: {error.message} </p>

  const torneo = data as Torneo

  return (
    <section className="pt-20 md:pt-24 px-4">
      <div
        className="border-2 border-cyan-400 p-3 md:p-5 flex flex-col gap-3 max-w-4xl 
      mx-auto bg-zinc-950 text-zinc-200"
      >
        <h3 className="text-center text-5xl uppercase text-cyan-500 font-semibold">
          {torneo.nombre}
        </h3>

        <CardSection title="Descripcion" >
          {torneo.descripcion}
        </CardSection>

        <CardList datos={torneo.premios} title="Premios" />

        <CardSection title="Inicio del Torneo" >
          {torneo.fecha_inicio}
        </CardSection>

        {torneo.fecha_finalizacion != torneo.fecha_inicio && (
          <CardSection title="Fecha de Finalizacion del Torneo" >
            {torneo.fecha_finalizacion}
          </CardSection>
        )}

        <CardSection title={torneo.ubicacion == "VIRTUAL" ? "Modalidad" : "Ubicacion"} >
          {torneo.ubicacion}
        </CardSection>
        <CardSection title="Juego" >
          {torneo.categoria}
        </CardSection>

        <CardList datos={torneo.requisitos} title="Requisitos" />
        <CardList datos={torneo.reglas} title="Reglamento" />

        <button className="bg-cyan-500 text-black py-2 w-full text-2xl font-semibold">
          FORMULARIO
        </button>

        {torneo.url_pagina && (
          <button className="bg-cyan-500 text-black py-2 w-full text-2xl font-semibold">
            PAGINA / GRUPO
          </button>
        )}
      </div>
    </section>
  );
}

export default Torneo;
