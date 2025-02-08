import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import bcrypt from "bcrypt"
import { getUserByEmail } from "@/data/user" // or your actual import
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
  CredentialsProvider({
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials: { email: string; password: string }) {
      if (!credentials?.email || !credentials?.password) return null

      const user = await getUserByEmail(credentials.email) // user object containing hashed password
      if (!user?.password) return null

      const passwordsMatch = await bcrypt.compare(credentials.password, user.password)
      if (!passwordsMatch) return null

      return {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    },
  }),
  GitHub,
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/signin",
  },
})
