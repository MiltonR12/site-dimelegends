function PiePagina() {
  return (
    <footer className="p-2 bg-gray-950" >
      <div className="md:py-5 mx-auto  container" >
        <div className="flex flex-col gap-3 container md:flex-row" >
          <div className="footer-content md:w-2/4 p-2">
            <h3 className="text-cyan-500 text-2xl text-center" >Sobre nosotros</h3>
            <p className="text-zinc-200" >Dime Legends es una plataforma en línea que te permite organizar y participar en emocionantes torneos de videojuegos. Nuestra misión es brindar a los jugadores de todo el mundo la oportunidad de mostrar sus habilidades y conectarse con una comunidad apasionada por los esports.</p>
          </div>
          <div className="flex flex-col gap-1 md:w-2/4 text-center p-2">
            <h3 className="text-cyan-500 text-2xl" >Contacto</h3>
            <a href="https://www.facebook.com/DimeLegendsBolivia" target="_blank" >Facebook</a>
            <a href="https://discord.gg/jcBNHQ8n" target="_blank" >Discord</a>
            <a href="https://chat.whatsapp.com/K5AH26VUJwC9zhLMnZ7OI1" target="_blank" >Grupo de WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-center py-2" >&copy; 2023 Dime Legends. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default PiePagina