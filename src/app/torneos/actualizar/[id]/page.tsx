"use client"
import CreateTorneoForm from "@/components/formulario/CreateTorneoForm"
import { useGetMisTorneos } from "@/hooks/useTorneo"
import { Torneo } from "@/types/interfaces"

type Params = {
  id: string
}

function UpdataPage({ params }: { params: Params }) {

  const { data, isLoading, isError } = useGetMisTorneos()

  if (isLoading) return <p>Cargando...</p>

  if (isError) {
    return <p>Error de carga</p>
  }

  const torneo: Torneo = data.find((item: Torneo) => item.uuid === params.id);

  return (
    <div className="mx-auto container">
      <CreateTorneoForm initValues={torneo} isUpdate={true} />
    </div>
  )
}

export default UpdataPage