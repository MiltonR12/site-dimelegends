import Label from '@/components/formulario/Label'
import { Field } from 'formik'

type Props = {
  title: string,
  name: string,
  placeholder?: string
}

function CampText({title, name, placeholder}:Props) {
  return (
    <>
      <Label>{title}:</Label>
      <Field
        className="p-1 bg-zinc-800 hover:outline-rose-600 
              outline-none text-whitemb-3"
        name={name}
        placeholder={placeholder}
        required
      />
    </>
  )
}

export default CampText