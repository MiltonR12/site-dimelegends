"use client"
import { FieldArray, Field } from "formik";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import Label from "./Label";

type Props = {
  name: string,
  title: string,
  value?: string[]
}

function InputArray({ name, value, title, }: Props) {
  return (
    <FieldArray
      name={name}
      render={(props) => (
        <div>
          <div className="flex items-center gap-5 text-2xl mb-2 justify-between">
            <Label>{title}</Label>
            <button type="button" className="text-2xl flex items-center" onClick={() => {
              props.push("")
            }}>
              <MdOutlineAdd /> Añadir
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {value?.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <Field
                  placeholder={`jugador nro: ${index + 1}`}
                  name={`${name}.${index}`}
                  className="p-1 bg-zinc-800 hover:outline-rose-600 outline-none 
              text-white first-letter:mb-3 w-4/5"
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
