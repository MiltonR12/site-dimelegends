"use client"
import CardSuccess from "@/components/cards/CardSuccess"
import RegistroForm from "@/components/formulario/RegistroForm"
import { useState } from 'react'

type Params = {
  url_formulario: string
}

const initValues = {
  name_team: "",
  captain: "",
  phone: 0,
  players: ["", "", ""]
}

function UpdateRecordPage({params}:{params: Params}) {

  const [formActive, setFormActive] = useState(true)

  const envioExitoso = () => {
    setFormActive(false)
  }

  return (
    <section>
      <h1 className='text-3xl text-center mb-2 font-semibold' >Actualizar Registro</h1>
      {
        formActive ? <RegistroForm
          url_formulario={params.url_formulario}
          envioExitoso={envioExitoso}
          initValues={initValues}
        /> : <CardSuccess />
      }
    </section>
  )
}

export default UpdateRecordPage