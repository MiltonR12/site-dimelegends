"use client"
import Label from '@/components/formulario/Label'
import { useState } from 'react'
import DateInput from './DateInput'
import { useFormikContext } from 'formik'

type Props = {
  title: string,
  name: string,
  optionOne: string,
  optionTwo: string,
  type: string,
  value: string,
}

function DynamicInput({ name, optionOne, optionTwo, title, type, value }: Props) {

  const [open, setOpen] = useState(value != "")
  const formik = useFormikContext()

  return (
    <div className='flex flex-col gap-2' >
      <Label>{title}:</Label>
      <div>
        <button
          className="px-3 py-1 w-2/6 border-rose-500 border-2 mb-3"
          type="button"
          onClick={() => {
            setOpen(!open)
            formik.setFieldValue(name, "")
          }}
        >
          {open ? optionOne : optionTwo}
        </button>
        {open && <DateInput type={type} name={name} />}
      </div>
    </div>
  )
}

export default DynamicInput