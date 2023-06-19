import Image from "next/image";
import copa from "../public/copa.png";
import Link from "next/link";

function Portada() {
  return (
    <section className="bg-image-fondo h-screen bg-center bg-no-repeat bg-cover md:pt-20 flex items-center">
      <div
        className="container mx-auto backdrop-blur-md p-5 bg-black/50 flex flex-col
        items-center justify-between gap-7 md:flex-row rounded-2xl"
      >
        <div className="flex flex-col">
          <h2 className="text-4xl text-center md:text-5xl font-bold md:text-left block md:w-2/4 pb-5">
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
        <div>
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
