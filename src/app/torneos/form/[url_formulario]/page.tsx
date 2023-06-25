"use client"
import CardSuccess from '@/components/cards/CardSuccess'
import RegistroForm from '@/components/formulario/RegistroForm'
import { useState } from 'react'

interface Params {
  url_formulario: string
}

function FormularioPage({ params }: { params: Params }) {

  const [formActive, setFormActive] = useState(true)

  const envioExitoso = () => {
    setFormActive(false)
  }

  return (
    <div>
      <h1 className='text-3xl text-center mb-2 font-semibold' >Formulario de Inscripcion</h1>
      {
        formActive ? <RegistroForm
          url_formulario={params.url_formulario}
          envioExitoso={envioExitoso}
        /> : <CardSuccess />
      }
    </div>
  )
}

export default FormularioPage