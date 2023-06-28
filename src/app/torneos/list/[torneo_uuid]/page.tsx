"use client"
import CardTeam from '@/components/cards/CardTeam'
import { useGetTeams } from '@/hooks/useFormTeam'
import { Equipo } from '@/types/interfaces'
import { EventHandler, useEffect, useState, ChangeEvent } from 'react'

type Params = {
  torneo_uuid: string
}

function ListPage({ params }: { params: Params }) {

  const { data, isLoading, isError, error } = useGetTeams(params.torneo_uuid)

  const [equipos, setEquipos] = useState<Equipo[]>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const res = data.filter((item: Equipo) => item.name_team.includes(value))
    setEquipos(res)
  }

  useEffect(() => {
    setEquipos(data)
  }, [data])

  if (isLoading) {
    return <h3>Cargando lista...</h3>
  }

  if (isError && error instanceof Error) {
    return <p>Error: {error.message}</p>
  }

  return <div className='' >
    <div className='container mx-auto' >
      <div className='text-rose-600 grid grid-cols-3 text-center bg-zinc-950 py-2 md:text-2xl font-semibold uppercase' >
        <h3 className='col-span-3 mb-3' >LISTA DE EQUIPOS Nro {data.length}</h3>
        <div className='col-span-3 flex justify-between px-5' >
          <h3>Nro: {equipos?.length}</h3>
          <input
            type="text"
            placeholder='Buscar'
            className='bg-zinc-800 py-1 px-2'
            onChange={e => handleChange(e)}
            />
        </div>
        <h4>Nombre</h4>
        <h4>Capitan</h4>
        <h4>Celular</h4>
      </div>
      {
        equipos?.map((item: Equipo) => (
          <CardTeam key={item.id} equipo={item} url={params.torneo_uuid} />
        ))
      }
    </div>
  </div>

}

export default ListPage