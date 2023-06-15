"use client"
import { Torneo } from "@/types/interfaces"
import { useDeleteTorneo, useGetMisTorneos } from '@/hooks/useTorneo'

function MisTorneos() {

  const { data: torneos, isLoading, isError, error } = useGetMisTorneos()
  const { mutate: deleteTorneo } = useDeleteTorneo()

  const handleDeleteTorneo = (uuid: string | undefined) => {
    if (typeof uuid === "string")
      deleteTorneo(uuid)
  }

  if (isLoading) return <p>Cargando...</p>

  if (isError && error instanceof Error) {
    console.log(error)
  }

  if (isError) return <p>Error al cargar</p>

  return (
    <div className="flex flex-col gap-4 w-full" >
      {
        torneos.map((torneo: Torneo) => (
          <div key={torneo.id} className="flex justify-between items-center bg-slate-950 p-3" >
            <h2 className="text-xl max-w-xs text-ellipsis overflow-hidden" > {torneo.nombre} </h2>
            <div className="flex flex-col gap-3 text-white" >
              <button className="w-32 md:w-52 bg-blue-800 py-1" >MODIFICAR</button>
              <button className="w-32 md:w-52 bg-red-600 py-1"
                onClick={() => handleDeleteTorneo(torneo.uuid)} >ELIMINAR</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MisTorneos