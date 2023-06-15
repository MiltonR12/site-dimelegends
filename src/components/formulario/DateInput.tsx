import { Field } from "formik";

type Props = {
  type: string;
  name: string;
};

function DateInput({ type, name }: Props) {
  return (
    <Field
      className="p-1 bg-zinc-800 w-2/3 hover:outline-rose-600 outline-none text-white"
      type={type}
      name={name}
      required
    />
  );
}

export default DateInput;
