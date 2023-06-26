"use client";
import { Formik } from "formik";
import { Torneo } from "../../types/interfaces";
import TextArea from "./TextArea";
import Label from "./Label";
import DateInput from "./DateInput";
import ListaJuegos from "./ListaJuegos";
import { useRouter } from "next/navigation";
import InputArray from "./InputArray";
import { useCreateTorneo, useUpdateTorneo } from '@/hooks/useTorneo'
import CampText from "./CampText";
import DynamicInput from "./DynamicInput";

type Props = {
  initValues: Torneo,
  isUpdate: boolean
}

function CreateTorneoForm({ initValues, isUpdate }: Props) {
  const router = useRouter();
  const { mutate: createTorneo } = useCreateTorneo()
  const { mutate: updateTorneo } = useUpdateTorneo()

  return (
    <section>
      <Formik
        initialValues={initValues}
        onSubmit={(values) => {
          const data = { ...values }
          data.costo = !!data.costo ? data.costo : "Gratuito"
          data.fecha_finalizacion = !!data.fecha_finalizacion ? data.fecha_finalizacion : data.fecha_inicio
          data.ubicacion = !!data.ubicacion ? data.ubicacion : "Virtual"
          data.categoria = !!data.categoria ? data.categoria : "Otros"
          if (isUpdate) {
            updateTorneo(data, {
              onSuccess() {
                router.push('/torneos')
              },
              onError(error: any) {
                if (error.response.status === 401) {
                  router.push("/login");
                }
                console.error(error);
              }
            })
          } else {
            createTorneo(data, {
              onSuccess() {
                router.push('/torneos')
              },
              onError(error: any) {
                if (error.response.status === 401) {
                  router.push("/login");
                }
                console.error(error);
              }
            })
          }

        }}
      >
        {({ handleSubmit, values }) => (
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-3 py-5 px-3 sm:p-5 bg-neutral-950 border-2 border-purple-700 rounded-lg max-w-4xl mx-auto"
          >
            <h3 className="text-4xl text-center font-semibold mb-5">
              {isUpdate ? "ACTUALIZAR TORNEO" : "CREAR TORNEO"}
            </h3>

            <CampText
              title="Nombre del Torneo"
              name="nombre"
              placeholder="Nombre del torneo creado"
            />

            <CampText name="fecha_inicio" title="Fecha de Inicio" type="date" />

            <DynamicInput
              title="Formulario de Inscripcion"
              name="url_formulario"
              value={initValues.url_formulario}
              type="text"
              optionOne="Generar"
              optionTwo="Añadir"
            />

            <DynamicInput
              title="Fecha de Finalizacion"
              name="fecha_finalizacion"
              type="date"
              value={initValues.fecha_finalizacion}
              optionOne="Eliminar"
              optionTwo="Agregar"
            />

            <DynamicInput
              title="Ubicacion"
              name="ubicacion"
              type="text"
              value={initValues.ubicacion}
              optionOne="Presencial"
              optionTwo="Virtual"
            />

            <DynamicInput
              title="Enlace del Grupo / Pagina"
              name="url_pagina"
              type="text"
              value={initValues.url_pagina}
              optionOne="Eliminar"
              optionTwo="Agregar"
            />

            <DynamicInput
              title="Costo de inscripcion"
              name="costo"
              type="text"
              value={initValues.costo}
              optionOne="Gratuito"
              optionTwo="Añadir"
            />

            <Label>Juego:</Label>

            <ListaJuegos />

            <TextArea title="Descripcion:" name="descripcion" rows={2} ></TextArea>

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