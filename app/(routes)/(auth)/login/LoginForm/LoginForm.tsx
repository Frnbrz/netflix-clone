"use client"

import { FormData, FormSchema } from '@/types/auth/login.type';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';

import FormField from '../../components/FormField';

export default function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  })


  const onSubmit = async (data: FormData) => {

    console.log(data)

  };



  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  )
}
