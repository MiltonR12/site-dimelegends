"use client"
import { Torneo } from "@/types/interfaces"
import { useGetMisTorneos } from '@/hooks/useTorneo'
import CardMiTorneo from "../cards/CardMiTorneo"

function MisTorneos() {

  const { data: torneos, isLoading, isError, error } = useGetMisTorneos()

  if (isLoading) return <p>Cargando...</p>

  if (isError && error instanceof Error) {
    console.log(error)
  }

  if (isError) return <p>Error al cargar</p>

  return (
    <div className="flex flex-col gap-4 w-full" >
      {
        torneos.map((torneo: Torneo) => (
          <CardMiTorneo key={torneo.id} torneo={torneo} />
        ))
      }
    </div>
  )
}

export default MisTorneos