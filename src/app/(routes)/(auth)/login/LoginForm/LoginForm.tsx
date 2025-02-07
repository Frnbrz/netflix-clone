"use client"

import { LoginFormData, LoginFormSchema, LoginValidFieldNames } from '@/types/auth/login.type';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


import FormField from '../../components/FormField';
import axios from 'axios';

export default function LoginForm() {

  const {
    register,
    handleSubmit, setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  })




  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post("/api/auth/login", data);
      const { errors = {} } = response.data;

      const fieldErrorMapping: Record<string, LoginValidFieldNames> = {
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

      toast.success('Login success!');
    } catch (error) {
      console.error(error)
      toast.error(`Submitting form failed!`)
    }
  };


  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        type="email"
        placeholder=""
        name="email"
        register={register}
        error={errors.email}
      />
      <FormField
        type="password"
        placeholder=""
        name="password"
        register={register}
        error={errors.password}
      />
      <button className="button button--primary" type="submit">
        Submit
      </button>
    </form >
  )
}
