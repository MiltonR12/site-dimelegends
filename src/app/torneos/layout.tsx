import estilos from "@/styles/torneos.module.css"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`pt-24 px-4 min-h-screen ${estilos.contTorneo}`}>
      {children}
    </section>
  )
}

export default layout