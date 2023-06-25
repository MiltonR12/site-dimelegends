import { Field } from "formik";

type Props = {
  type: string;
  name: string;
  required?: boolean
};

function DateInput({ type, name, required = true }: Props) {

  return (
    <Field
      className={`p-1 bg-zinc-800 w-full hover:outline-rose-600 outline-none text-white`}
      type={type}
      name={name}
      required={required}
    />
  );
}

export default DateInput;
