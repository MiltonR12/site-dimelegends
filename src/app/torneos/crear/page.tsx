import CreateTorneoForm from "@/components/formulario/CreateTorneoForm";
import { Torneo } from '@/types/interfaces'

const initValues: Torneo = {
  nombre: "",
  fecha_inicio: "",
  fecha_finalizacion: "",
  url_formulario: "",
  url_pagina: "",
  costo: "",
  descripcion: "",
  ubicacion: "",
  categoria: "",
  requisitos: [],
  premios: [],
  reglas: []
}

function CreateTorneoPage() {
  return (
    <div className="mx-auto container">
      <CreateTorneoForm initValues={initValues} isUpdate={false} />
    </div>
  );
}

export default CreateTorneoPage;

