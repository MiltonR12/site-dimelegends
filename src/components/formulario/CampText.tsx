import Label from '@/components/formulario/Label'
import { Field } from 'formik'

type Props = {
  title: string,
  name: string,
  placeholder?: string
  type?: string
}

function CampText({ title, name, placeholder, type = "text" }: Props) {
  return (
    <div className='flex flex-col gap-2' >
      <Label>{title}:</Label>
      <Field
        className="p-1 bg-zinc-800 hover:outline-rose-600 
              outline-none text-whitemb-3"
        name={name}
        placeholder={placeholder}
        required
        type={type}
      />
    </div>
  )
}

export default CampText