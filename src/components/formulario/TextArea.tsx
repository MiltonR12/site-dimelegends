import { Field } from 'formik'
import Label from '@/components/formulario/Label'

function TextArea({
  children,
  name,
  rows,
  cols,
  title
}: {
  children?: React.ReactNode;
  name: string;
  rows?: number;
  cols?: number;
  title: string;
}) {
  return (
    <>
      <Label>{title}</Label>
      <Field as="textarea" className="bg-zinc-800 p-2 text-white focus:outline-rose-600 outline-none mb-3" required
        rows={rows == undefined ? 5 : rows}
        cols={cols}
        name={name} >
        {children}
      </Field>
    </>
  );
}

export default TextArea;
