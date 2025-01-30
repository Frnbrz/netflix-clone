"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
export default function LoginForm() {

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form__group">
        <label className="login-form__label" htmlFor="username">
          Username
        </label>
        <input className="login-form__input"
          placeholder="shadcn"
          id="username"
          {...register("username")}
          aria-invalid={errors.username ? "true" : "false"}
        />
        {errors.username && (
          <p id="username-error" className="login-form__error">
            {errors.username.message}
          </p>
        )}
      </div>
      <button className="button button-primary" type="submit">
        Submit
      </button>
    </form>
  )
}
