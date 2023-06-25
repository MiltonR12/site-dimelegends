import { Torneo } from "../../types/interfaces";
import Link from "next/link";
import CardDetails from "./CardDetails";

function CardTorneo({
  nombre,
  fecha_inicio,
  categoria,
  premios,
  costo,
  id
}: Torneo) {
  return (
    <div
      className="p-3 bg-zinc-900/60 backdrop-blur-md border-2 border-cyan-500 rounded-xl
    shadow-cyan-300/50 shadow-lg w-full md:w-96 flex flex-col justify-between"
    >
      <h4 className="text-center text-4xl font-semibold uppercase text-ellipsis overflow-hidden whitespace-nowrap">
        {nombre}
      </h4>
      <div className="my-4 text-xl" >
        <CardDetails title="Premio" contenido={premios.length != 0 ? premios[0] : "SORPRESA"} />
        <CardDetails title="Inicio" contenido={fecha_inicio} />
        <CardDetails title="Juego" contenido={categoria} />
        <CardDetails title="Costo" contenido={costo} />
      </div>
      <Link
        href={`/torneos/${id}`}
        className="bg-cyan-500 border-2 border-cyan-500 w-full py-2 text-2xl transition-all hover:bg-transparent block text-center"
      >
        Ver Mas
      </Link>
    </div>
  );
}

export default CardTorneo;
