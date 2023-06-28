"use client"
import CardSuccess from '@/components/cards/CardSuccess'
import RegistroForm from '@/components/formulario/RegistroForm'
import { Equipo } from '@/types/interfaces'
import { useState } from 'react'

interface Params {
  url_formulario: string
}

const initValues: Equipo = {
  captain: "",
  name_team: "",
  phone: 0,
  players: ["", "", ""],
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
          initValues={initValues}
        /> : <CardSuccess />
      }
    </div>
  )
}

export default FormularioPage