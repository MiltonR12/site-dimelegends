"use client"
import CardTeam from '@/components/cards/CardTeam'
import { useGetTeams } from '@/hooks/useFormTeam'
import { Equipo } from '@/types/interfaces'

type Params = {
  torneo_uuid: string
}

function ListPage({ params }: { params: Params }) {

  const { data, isLoading, isError, error } = useGetTeams(params.torneo_uuid)

  if (isLoading) {
    return <h3>Cargando lista...</h3>
  }

  if (isError && error instanceof Error) {
    return <p>Error: {error.message}</p>
  }

  return <div className='' >
    <div className='container mx-auto' >
      <div className='text-rose-600 grid grid-cols-3 text-center bg-zinc-950 py-2 md:text-2xl font-semibold uppercase' >
        <h4>Nombre</h4>
        <h4>Capitan</h4>
        <h4>Celular</h4>
      </div>
      {
        data.map((item: Equipo) => (
          <CardTeam key={item.id} equipo={item} url={params.torneo_uuid} />
        ))
      }
    </div>
  </div>

}

export default ListPage