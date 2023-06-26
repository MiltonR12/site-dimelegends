"use client"
import { Usuario } from "@/types/interfaces";
import { BsPencilSquare } from "react-icons/Bs";
import { useState, useRef } from "react";
import { updateUser } from "@/api/userApi";
import { useTokenStore } from "@/store/auth";

function Descripcion({ usuario }: { usuario?: Usuario }) {
  const [edit, setEdit] = useState(false);
  const refDescrip = useRef<HTMLInputElement>(null);
  const { login } = useTokenStore();

  const editarDescripcion = async () => {
    if (edit) {
      try {
        const { token, username } = await updateUser({
          biografia: refDescrip.current?.value.trim(),
        });
        login(token, username);
      } catch (error) {
        alert("Error al cambiar la descripcion");
        console.error(error);
      }
    }
    setEdit(!edit);
  };

  return (
    <div>
      <div className="flex text-xl gap-5 mb-5">
        <h4 className="text-3xl">Descripcion:</h4>
        <button onClick={editarDescripcion}>
          <BsPencilSquare />
        </button>
      </div>
      {edit ? (
        <input
          type="text"
          defaultValue={usuario?.biografia}
          ref={refDescrip}
          className="bg-transparent outline-none border-b-2 border-zinc-200 border-dashed w-full
          text-xl text-zinc-200 pb-2"
        />
      ) : (
        <p className="text-xl text-zinc-200"> {usuario?.biografia} </p>
      )}
    </div>
  );
}

export default Descripcion;
