import { Field } from 'formik'

function ListaJuegos() {
  return (
    <Field
      as="select"
      name="categoria"
      className="bg-zinc-800 py-1 px-2"
    >
      <option value="Mobile Legends">Mobile Legends</option>
      <option value="Left 4 Dead">Left 4 Dead</option>
      <option value="Free Fire">Free Fire</option>
      <option value="Dota">Dota</option>
      <option value="League of Legends">League of Legends</option>
      <option value="Call Of Duty">Call Of Duty</option>
      <option value="Otros">Otros</option>
    </Field>
  );
}

export default ListaJuegos;
