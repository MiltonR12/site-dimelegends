import { Torneo } from "@/types/interfaces"
import { useRouter } from 'next/navigation'
import { useDeleteTorneo } from '@/hooks/useTorneo'
import React, { MouseEventHandler, useState } from "react"
import CardAuthorize from "./CardAuthorize"

function CardMiTorneo({ torneo }: { torneo: Torneo }) {

  const { mutate: deleteTorneo } = useDeleteTorneo()
  const router = useRouter()
  const [cardDelete, setCardDelete] = useState(false)

  const handleUpdateTorneo = () => {
    router.push(`/torneos/actualizar/${torneo.uuid}`)
  }

  const handleDeleteTorneo = () => {
    torneo.uuid && deleteTorneo(torneo.uuid)
  }

  const cerrarWindows = (): void => {
    setCardDelete(false)
  }

  const handleShowTorneo = () => {
    router.push(`/torneos/list/${torneo.url_formulario}`)
  }


  return (
    <div key={torneo.id} className="flex justify-between items-center bg-slate-950 p-3 relative" >
      {cardDelete && <CardAuthorize ocultar={cerrarWindows} eliminar={handleDeleteTorneo} />}
      <h2 className="text-xl max-w-xs text-ellipsis overflow-hidden" > {torneo.nombre} </h2>
      <div className="flex flex-col gap-3 text-white" >

        <button className="w-32 md:w-52 bg-blue-800 py-1" onClick={handleUpdateTorneo} >
          MODIFICAR
        </button>

        <button className="w-32 md:w-52 bg-red-600 py-1" onClick={() => setCardDelete(true)} >
          ELIMINAR
        </button>

        <button className="w-32 md:w-52 bg-zinc-700 py-1" onClick={handleShowTorneo} >
          MOSTRAR
        </button>

      </div>
    </div>
  )
}

export default CardMiTorneo