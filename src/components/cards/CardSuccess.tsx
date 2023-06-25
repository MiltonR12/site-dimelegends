import { useRouter } from 'next/navigation'
import { MdGppGood } from 'react-icons/md'

function CardSuccess() {

  const router = useRouter()

  const handleRegresar = () => {
    router.push('/torneos')
  }

  return (
    <div className='bg-zinc-950 p-3 flex flex-col gap-5 max-w-md mx-auto text-center text-2xl
      border-4 border-red-600 rounded-xl' >
      <h3 className=' text-red-600 text-2xl font-semibold' >Registro Exitoso</h3>
      <p className='text-zinc-200' >Se envio correctamente el formulario</p>
      <MdGppGood className='text-green-600 text-7xl w-full' />
      <button onClick={handleRegresar} className='border-red-600 border-2 py-2' >
        Regresar
      </button>
    </div>
  )
}

export default CardSuccess