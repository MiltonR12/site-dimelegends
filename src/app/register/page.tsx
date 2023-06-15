"use client";
import Formulario from "@/components/formulario/Formulario";
import { useRegister } from "@/hooks/useUser";
import { Formik } from "formik";
import { useRouter } from 'next/navigation'
import { useState } from "react";

function Register() {
  const [activeButton, setActiveButton] = useState(false);
  const { mutate: registerUser } = useRegister()
  const router = useRouter()

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-5">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={async ({ email, name, password }) => {
            setActiveButton(true);
            registerUser({ name, email, password }, {
              onSuccess() {
                router.push('/login')
              },
              onError(error) {
                console.error(error)
                alert('Error al crear usuario')
              },
            })
            setActiveButton(false);
          }}
        >
          {({ handleBlur, handleSubmit }) => (
            <Formulario
              register={true}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              activeButton={activeButton}
            />
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Register;
