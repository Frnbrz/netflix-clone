"use client"

import { LoginFormData, LoginFormSchema, LoginValidFieldNames } from '@/app/(routes)/(auth)/types/auth/login.type';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';

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
      const response = await axios.post("/api/form", data); // Make a POST request
      const { errors = {} } = response.data; // Destructure the 'errors' property from the response data

      // Define a mapping between server-side field names and their corresponding client-side names
      const fieldErrorMapping: Record<string, LoginValidFieldNames> = {
        email: "email",
        password: "password",
      };

      // Find the first field with an error in the response data
      const fieldWithError = Object.keys(fieldErrorMapping).find(
        (field) => errors[field]
      );


      // If a field with an error is found, update the form error state using setError
      if (fieldWithError) {
        // Use the ValidFieldNames type to ensure the correct field names
        setError(fieldErrorMapping[fieldWithError], {
          type: "server",
          message: errors[fieldWithError],
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      alert("Submitting form failed!");
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
