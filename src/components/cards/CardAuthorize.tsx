import React, { MouseEventHandler } from 'react'

interface Props {
  ocultar: MouseEventHandler<HTMLButtonElement>
  eliminar: MouseEventHandler<HTMLButtonElement>
  uuid?: string
}

function CardAuthorize({ ocultar, eliminar }: Props) {

  return (
    <div className='absolute bg-zinc-900 p-2 left-2/4 translate-x-[-50%] w-80' >
      <h3 className='text-2xl mb-5' >
        ¿Estas seguro de que quieres eliminar?
      </h3>
      <div className='grid grid-cols-2 gap-x-4 text-xl' >
        <button onClick={ocultar} className='border-2 border-red-500 py-1' >Cancelar</button>
        <button onClick={(e) => {
          eliminar(e)
          ocultar(e)
        }} className='bg-red-600 py-1' >Eliminar</button>
      </div>
    </div>
  )
}

export default CardAuthorize