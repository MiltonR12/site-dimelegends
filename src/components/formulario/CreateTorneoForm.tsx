"use client";
import { Formik, Field } from "formik";
import { Torneo } from "../../types/interfaces";
import TextArea from "./TextArea";
import Label from "./Label";
import { useState } from "react";
import DateInput from "./DateInput";
import ListaJuegos from "./ListaJuegos";
import { useRouter } from "next/navigation";
import { useTokenStore } from "../../store/auth";
import InputArray from "./InputArray";
import { useCreateTorneo } from '@/hooks/useTorneo'

const ininitalValues: Torneo = {
  nombre: "",
  url_formulario: "",
  url_pagina: "",
  fecha_inicio: "",
  fecha_finalizacion: "",
  ubicacion: "",
  categoria: "",
  descripcion: "",
  requisitos: [],
  reglas: [],
  premios: [],
  costo: "",
};

function CreateTorneoForm() {
  const [virtual, setVirtual] = useState(false);
  const [fin, setFin] = useState(false);
  const [costo, setCosto] = useState(false);
  const [urlPage, setUrlPage] = useState(false);
  const router = useRouter();
  const { restablecer } = useTokenStore();
  const { mutate: createTorneo } = useCreateTorneo()

  return (
    <section>
      <Formik
        initialValues={ininitalValues}
        onSubmit={async (values) => {
          const data = { ...values };
          data.fecha_finalizacion = fin
            ? values.fecha_finalizacion
            : values.fecha_inicio;
          data.ubicacion = virtual ? values.ubicacion : "VIRTUAL";
          data.costo = costo ? values.costo : "GRATUITO";
          data.categoria = data.categoria == "" ? "Otros" : data.categoria

          createTorneo(data, {
            onSuccess() {
              router.push('/torneos')
            },
            onError(error: any) {
              if (error.response.status === 401) {
                restablecer();
                router.push("/login");
              }
              console.error(error);
            }
          })
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-1 py-5 px-3 sm:p-5 bg-neutral-950 border-2 border-purple-700 rounded-lg max-w-4xl mx-auto"
          >
            <h3 className="text-4xl text-center font-semibold mb-5">
              CREAR TORNEO
            </h3>
            <Label>Nombre:</Label>
            <Field
              className="p-1 bg-zinc-800 hover:outline-rose-600 
              outline-none text-whitemb-3"
              name="nombre"
              placeholder="Nombre del torneo creado"
              required
            />

            <Label>Enlace del furmulario</Label>
            <Field
              className="p-1 bg-zinc-800 hover:outline-rose-600 outline-none text-white
              mb-3"
              type="text"
              name="url_formulario"
              placeholder="Enlace del formulario de inscripcion"
              required
            />

            <Label>Fecha de Inicio</Label>
            <DateInput type="date" name="fecha_inicio" />

            <Label>Fecha de Finalizacion:</Label>
            <div>
              <button
                className="px-3 py-1 w-2/6 border-rose-500 border-2 mb-3"
                type="button"
                onClick={() => setFin(!fin)}
              >
                {fin ? "Eliminar" : "Agregar"}
              </button>
              {fin && <DateInput type="date" name="fecha_finalizacion" />}
            </div>

            <Label>Ubicacion:</Label>

            <div>
              <button
                className="px-3 py-1 w-2/6 border-rose-500 border-2 mb-3"
                type="button"
                onClick={() => setVirtual(!virtual)}
              >
                {virtual ? "Presencial" : "Virtual"}
              </button>
              {virtual && <DateInput type="text" name="ubicacion" />}
            </div>

            <Label>Enlace del Grupo / Pagina</Label>

            <div>
              <button
                className="px-3 py-1 w-2/6 border-rose-500 border-2 mb-3"
                type="button"
                onClick={() => setUrlPage(!urlPage)}
              >
                {urlPage ? "Eliminar" : "Agregar"}
              </button>
              {urlPage && <DateInput type="text" name="url_pagina" />}
            </div>

            <Label>Costo de inscripcion</Label>

            <div>
              <button
                className="px-3 py-1 w-2/6 border-rose-500 border-2 mb-3"
                type="button"
                onClick={() => setCosto(!costo)}
              >
                {costo ? "GRATUITO" : "AÑADIR COSTO"}
              </button>
              {costo && <DateInput type="text" name="costo" />}
            </div>

            <Label>Juego:</Label>

            <ListaJuegos />

            <Label>Descripcion:</Label>

            <TextArea
              name="descripcion"
              handleChange={handleChange}
              value={values.descripcion}
              rows={2}
            ></TextArea>

            <InputArray name="requisitos" title="Requisitos" value={values.requisitos} />

            <InputArray name="reglas" title="Reglas" value={values.reglas} />

            <InputArray name="premios" title="Premios" value={values.premios} />

            <button className="bg-rose-600 text-2xl py-2 mt-5 max-w-sm" type="submit" >
              CREAR
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default CreateTorneoForm;
