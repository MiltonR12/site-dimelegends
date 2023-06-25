import { Equipo } from "@/types/interfaces"
import { useRef, useState } from "react"
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi'

function CardTeam({ equipo }: { equipo: Equipo }) {

  const ulRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false)

  const toggleList = () => {
    if (!open) {
      ulRef.current?.classList.remove("hidden")
      setOpen(true)
    } else {
      ulRef.current?.classList.add("hidden")
      setOpen(false)
    }
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
      <button
        onClick={toggleList}
        className="w-full border-2 border-zinc-500 text-2xl py-1 flex 
        justify-center text-rose-600" >
        {
          open ? <BiArrowToBottom /> : <BiArrowToTop />
        }
      </button>
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