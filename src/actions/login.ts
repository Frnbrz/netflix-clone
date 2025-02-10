"use server"

import { LoginFormSchema } from "@/types/auth/login.type"
import { AuthError } from "next-auth"
import { signIn } from "@/auth"
import { z } from "zod"



export const login = async (values: z.infer<typeof LoginFormSchema>) => {
  const validatedFields = LoginFormSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password } = validatedFields.data

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/profiles"
    })

    return { success: true }

  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "Invalid credentials" }
      }

      return { error: "Something went wrong!" }
    }
  }
}
