import React from 'react'

function CardDetails({ title, contenido }: { title: string, contenido: string }) {
  return (
    <div className="flex justify-between mb-1 border-b-2 border-zinc-200/50">
      <h4>{title}:</h4>
      <h4 className='text-cyan-400' > {contenido} </h4>
    </div>
  )
}

export default CardDetails