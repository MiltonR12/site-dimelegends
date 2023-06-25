import Image from "next/image";
import copa from "../public/copa.png";
import Link from "next/link";
import estilos from '@/styles/portada.module.css'

function Portada() {
  return (
    <section className={`h-screen md:pt-20 flex items-center ${estilos.contPortada}`} >
      <div
        className="container mx-auto backdrop-blur-md p-5 bg-black/30 flex flex-col
        items-center justify-between gap-7 md:flex-row rounded-2xl"
      >
        <div className="flex flex-col md:w-2/4">
          <h2 className="text-4xl text-center md:text-5xl font-bold md:text-left block pb-5 max-w-xl">
            JUEGA Y GANA <br /> EN LOS MEJORES TORNEOS DE <br />
            <span className="text-rose-600"> BOLIVIA</span>
          </h2>
          <Link
            href="/torneos"
            className="bg-rose-600 text-xl md:text-3xl px-4 py-2 rounded-lg mx-auto md:mx-0 max-w-sm
            text-center hover:bg-rose-800 transition-all"
          >
            PARTICIPAR
          </Link>
        </div>
        <div className="w-2/4 flex items-center justify-center" >
          <Image
            alt="copa"
            src={copa}
            width={400}
            height={400}
            className="w-52 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Portada;
