"use client";
import LayoutInput from "../LayoutInput";
import { Field } from 'formik'

interface Props {
  register: boolean;
  handleBlur: any;
  handleSubmit: any;
  activeButton: boolean;
}

function Formulario({
  register,
  handleBlur,
  handleSubmit,
  activeButton,
}: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-950 p-5 text-xl max-w-2xl border-2 border-rose-600 shadow-rose-500
        shadow-lg mx-auto"
    >
      <h3 className="text-3xl md:text-5xl text-center mb-5 text-rose-600 font-bold">
        {register ? "REGISTRARSE" : "INICIAR SESION"}
      </h3>
      <div className="flex flex-col gap-5">
        {register && (
          <LayoutInput>
            <label htmlFor="" className="mb-2 text-2xl">
              Nombre:
            </label>
            <Field
              type="text"
              name="name"
              onBlur={handleBlur}
              className="border-b-2 text-zinc-200 px-3 
              py-2 outline-none focus:border-rose-600 bg-zinc-800"
            />
          </LayoutInput>
        )}
        <LayoutInput>
          <label htmlFor="" className="mb-2 text-2xl">
            Email:
          </label>
          <Field
            type="email"
            name="email"
            onBlur={handleBlur}
            className="border-b-2 text-zinc-200 px-3 
            py-2 outline-none focus:border-rose-600 bg-zinc-800"
          />
        </LayoutInput>
        <LayoutInput>
          <label htmlFor="" className="mb-2 text-2xl">
            Password:
          </label>
          <Field
            type="password"
            name="password"
            onBlur={handleBlur}
            className="border-b-2 text-zinc-200 px-3 
            py-2 outline-none focus:border-rose-600 bg-zinc-800"
          />
        </LayoutInput>
        <LayoutInput>
          <button
            disabled={activeButton}
            className="bg-rose-600 py-2 px-3 mx-auto rounded-md border-2
          border-rose-600 hover:bg-transparent transition-all disabled:bg-rose-500"
          >
            {register ? "Registrarse" : "Iniciar Sesion"}
          </button>
        </LayoutInput>
      </div>
    </form>
  );
}

export default Formulario;
