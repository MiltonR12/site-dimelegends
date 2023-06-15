function CardList({ datos, title }: { datos: string[], title: string }) {

  if (datos.length === 0) return <></>

  return (
    <div>
      <h4 className="text-cyan-500 font-semibold text-2xl">{title}:</h4>
      <ul>
        {
          datos.map((item, index) => (
            <li className="list-disc ml-5" key={index} >{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CardList