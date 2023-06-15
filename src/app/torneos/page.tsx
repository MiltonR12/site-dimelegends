"use client"
import TorneosList from "@/components/TorneosList";
import { useGetTorneos } from "@/hooks/useTorneo";

function Torneos() {

  const { data, isError, error, isLoading } = useGetTorneos()

  if (isLoading) return <h3>Cargando...</h3>

  if (isError && error instanceof Error) return <p>Error: {error.message}</p>

  return (
    <>
      <h2 className="text-center font-bold text-5xl text-cyan-500 mb-5">TORNEOS</h2>
      <div>
        <TorneosList torneos={data} />
      </div>
    </>
  );
}

export default Torneos;
