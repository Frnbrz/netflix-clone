import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import bcryptjs from "bcrypt";
import { LoginFormSchema } from "./types/auth/login.type";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginFormSchema.safeParse(credentials)

        if (!validatedFields.success) {
          return null
        }

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email)

          if (!user || !user.password) return null

          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password
          )

          if (passwordsMatch) {
            return user
          }
        }
        return null
      },
    }),
  ],
} satisfies NextAuthConfig
