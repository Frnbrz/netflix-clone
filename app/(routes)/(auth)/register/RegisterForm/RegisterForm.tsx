"use client"


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';

import axios from 'axios';
import { RegisterFormData, RegisterFormSchema, RegisterValidFieldNames } from '../../types/auth/register.type';
import { RegisterFormField } from "../../components/RegisterFormField";

export default function RegisterForm() {

  const {
    register,
    handleSubmit, setError,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await axios.post("/api/auth/register", data);
      const { errors = {} } = response.data;

      const fieldErrorMapping: Record<string, RegisterValidFieldNames> = {
        email: "email",
        password: "password",
      };

      const fieldWithError = Object.keys(fieldErrorMapping).find(
        (field) => errors[field]
      );

      if (fieldWithError) {
        setError(fieldErrorMapping[fieldWithError], {
          type: "server",
          message: errors[fieldWithError],
        });
      }

    } catch (error) {
      console.error("Submitting form failed!, error:", error)
    }
  };


  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RegisterFormField
        placeholder=""
        type="email"
        name="email"
        register={register}
        error={errors.email}
      />
      <RegisterFormField
        placeholder=""
        type="password"
        name="password"
        register={register}
        error={errors.password}
      />
      <RegisterFormField
        placeholder=""
        type="password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword}
      />
      <button className="button button--primary" type="submit">
        Submit
      </button>
    </form >
  )
}
