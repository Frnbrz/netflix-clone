import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getUserByEmail } from "@/data/user"
import { LoginFormSchema } from "@/types/auth/login.type"
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const validated = LoginFormSchema.safeParse(credentials)
        if (!validated.success) return null

        const { email, password } = validated.data
        const user = await getUserByEmail(email)
        if (!user?.password) return null

        const passwordsMatch = await bcrypt.compare(password, user.password)
        return passwordsMatch ? user : null
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
}

export default NextAuth(authOptions)
