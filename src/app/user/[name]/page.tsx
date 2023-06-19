"use client";
import { useTokenStore } from "@/store/auth";
import Perfil from "@/components/usuario/Perfil";
import Descripcion from "@/components/usuario/Descripcion";
import MisTorneos from "@/components/usuario/MisTorneos";
import { useGetUser } from '@/hooks/useUser'
import { useRouter } from "next/navigation";

function UsuarioPage() {
  const { restablecer } = useTokenStore();
  const { data, isLoading, isError } = useGetUser()
  const router = useRouter()

  const cerrarSesion = () => {
    restablecer()
    router.push('/')
  }

  if (isLoading) return <h3>Cargando...</h3>

  if (isError) {
    return router.push('/login')
  }

  return (
    <section className="text-white pt-24 px-4 pb-4 flex flex-col gap-5 container mx-auto min-h-screen">
      <Perfil data={data} />
      <div className="mx-auto text-xl text-zinc-100">
        <h4> {data.email} </h4>
      </div>
      <Descripcion usuario={data} />
      <div>
        <h3 className="text-xl text-blue-700 mb-5" >Mis Torneos</h3>
        <MisTorneos />
      </div>
      <button
        onClick={cerrarSesion}
        className="bg-red-600 mx-auto py-2 px-3 text-xl"
      >
        Cerrar Sesion
      </button>
    </section>
  );
}

export default UsuarioPage;