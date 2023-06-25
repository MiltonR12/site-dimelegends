"use client"
import { Formik } from 'formik'
import DateInput from './DateInput'
import InputArray from './InputArray'
import Label from './Label'
import { useRegisterDevice } from '@/hooks/useFormTeam'
import { useState } from 'react'

const initValues = {
  name_team: "",
  captain: "",
  phone: 0,
  players: ["", "", ""]
}

type Props = {
  url_formulario: string
  envioExitoso: Function
}

function RegistroForm({ url_formulario, envioExitoso }: Props) {

  const { mutate: registrarTeam } = useRegisterDevice()
  const [buttonActive, setButtonActive] = useState(false)

  return (
    <div>
      <Formik
        initialValues={initValues}
        onSubmit={(values) => {
          setButtonActive(true)
          registrarTeam({ equipo: values, url_formulario }, {
            onError(error) {
              console.error(error)
              setButtonActive(false)
            },
            onSuccess() {
              envioExitoso()
            }
          })
        }}

      >
        {({ values, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className='bg-zinc-950 p-3 flex flex-col gap-5 max-w-lg mx-auto'
            autoComplete='off' >
            <Label>Nombre del Equipo</Label>
            <DateInput name='name_team' type='text' />
            <Label>Capitan de Equipo</Label>
            <DateInput name='captain' type='text' />
            <Label>Numero del Capitan</Label>
            <DateInput name='phone' type='number' />
            <InputArray name='players' title='Integrantes' value={values.players} />
            <button
              disabled={buttonActive}
              className='bg-red-600 text-2xl py-1 disabled:' >
              {buttonActive ? "Cargando..." : "Enviar"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default RegistroForm