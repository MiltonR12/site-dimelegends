import { FieldArray, Field } from "formik";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import Label from "./Label";

function InputArray({
  name,
  value,
  title,
}: {
  name: string;
  title: string;
  value?: string[];
}) {
  return (
    <FieldArray
      name={name}
      render={(props) => (
        <div>
          <div className="flex items-center gap-5 text-2xl justify-between">
            <Label>{title}</Label>
            <button type="button" onClick={() => props.push("")}>
              <MdOutlineAdd />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {value?.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <Field
                  name={`${name}.${index}`}
                  className="p-1 bg-zinc-800 hover:outline-rose-600 outline-none 
              text-white first-letter:mb-3 w-3/4"
                  required
                />
                <button type="button" onClick={() => props.remove(index)}>
                  <AiFillDelete className="text-2xl text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    />
  );
}

export default InputArray;
