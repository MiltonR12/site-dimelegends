"use client"
import { useRef, useState } from "react";
import { Usuario } from "@/types/interfaces";
import { BsPencilSquare } from "react-icons/Bs";
import { useTokenStore } from "@/store/auth";
import { useUpdateuser } from "@/hooks/useUser";

function Perfil({ data }: { data?: Usuario }) {
  const [changeName, setChangeName] = useState(false);
  const inputName = useRef<HTMLInputElement>(null);
  const { login } = useTokenStore();
  const { mutate: updateUser } = useUpdateuser()

  const updateName = () => {
    if (changeName) {
      updateUser({ username: inputName.current?.value }, {
        onSuccess({ token, username }: { token: string, username: string }) {
          login(token, username)
        },
        onError(error) {
          alert('Error al cambiar nombre')
          console.error(error)
        }
      })
    }
    setChangeName(!changeName);
  };

  return (
    <div className="md:flex md:gap-5 border-b-2 border-rose-600 pb-4">
      <div className="w-16 h-16 mx-auto md:mx-0 flex items-center justify-center rounded-full bg-rose-600">
        <span className="text-4xl font-semibold">
          {data?.username?.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="flex gap-5 items-center text-rose-500 text-2xl">
        <input
          type="text"
          className="bg-transparent border-b-2 py-2 border-white outline-none 
            border-dashed disabled:border-none"
          defaultValue={data?.username}
          disabled={!changeName}
          ref={inputName}
        />
        <button className="text-white" onClick={updateName}>
          <BsPencilSquare />
        </button>
      </div>
    </div>
  );
}

export default Perfil;
