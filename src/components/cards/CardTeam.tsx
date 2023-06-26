"use client"
import { Equipo } from "@/types/interfaces"
import { useRef, useState } from "react"
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import CardAuthorize from "./CardAuthorize";
import { useDeleteRecord } from '@/hooks/useFormTeam'

function CardTeam({ equipo, url }: { equipo: Equipo, url: string }) {

  const ulRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false)
  const [botonDelete, setBotonDelete] = useState(false)
  const { mutate: deleteRecord } = useDeleteRecord()

  const toggleList = () => {
    if (!open) {
      ulRef.current?.classList.remove("hidden")
      setOpen(true)
    } else {
      ulRef.current?.classList.add("hidden")
      setOpen(false)
    }
  }

  const eliminar = () => {
    if (!!equipo.id) {
      deleteRecord({ url_formulario: url, id: equipo.id })
    }
  }

  const ocultar = () => {
    setBotonDelete(false)
  }

  return (
    <div className="bg-zinc-900 p-2 md:text-2xl" >
      <div className="grid grid-cols-2 md:grid-cols-3 text-center py-1" >
        <h4>
          {equipo.name_team}
        </h4>
        <h4>
          {equipo.captain}
        </h4>
        <h4>
          {equipo.phone}
        </h4>
      </div>
      <div className="border-2 border-zinc-500 grid grid-cols-2 p-2 
      text-center text-2xl gap-2" >
        <button
          onClick={toggleList}
          className="text-zinc-200 flex justify-center border-2 border-zinc-500/50" >
          {
            open ? <BiArrowToBottom /> : <BiArrowToTop />
          }
        </button>
        <button
          onClick={() => setBotonDelete(true)}
          className="text-red-600 flex justify-center border-2 border-zinc-500/50" >
          <AiFillDelete />
        </button>
        {botonDelete && <CardAuthorize eliminar={eliminar} ocultar={ocultar} />}
      </div>
      <ul className="hidden" ref={ulRef} >
        {
          equipo.players.map((name: string, index: number) => (
            <li key={index} > {name} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CardTeam