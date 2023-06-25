import estilos from "@/styles/torneos.module.css"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`pt-20 md:pt-24 p-2 min-h-screen ${estilos.contTorneo}`}>
      {children}
    </section>
  )
}

export default layout