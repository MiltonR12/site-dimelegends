import CardInfo from "./cards/CardInfo";

function informacion() {
  return (
    <section className="px-5 py-10 bg-neutral-950">
      <div className="container mx-auto flex justify-around flex-col md:flex-row items-center">
        <CardInfo title="Crea tu Torneo">
          ¡Crea tu torneo de juegos en nuestra página especializada! Organiza
          competencias emocionantes con facilidad y sin complicaciones.
        </CardInfo>
        <CardInfo title="Crea tu Evento">
          ¡Crea tu torneo de juegos en nuestra página especializada! Organiza
          competencias emocionantes con facilidad y sin complicaciones.
        </CardInfo>
      </div>
    </section>
  );
}

export default informacion;
