"use client";
import Formulario from "@/components/formulario/Formulario";
import { Formik } from "formik";
import { useTokenStore } from "../../store/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLogin } from "@/hooks/useUser";

function Login() {
  const { login } = useTokenStore();
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(false);
  const { mutate } = useLogin()

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-5">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={({ email, password }) => {
            setActiveButton(true)
            mutate({ email, password }, {
              onSuccess(data) {
                login(data.token, data.username)
                router.push('/')
              },
              onError(error) {
                alert("Error al logearte")
                console.error(error)
              },
            })
            setActiveButton(false)
          }}
        >
          {({ handleBlur, handleSubmit }) => (
            <Formulario
              register={false}
              handleBlur={handleBlur}
              activeButton={activeButton}
              handleSubmit={handleSubmit}
            />
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
