import bcrypt from 'bcryptjs'

import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig } from "next-auth"
import { getUserByEmail } from '@/data/user'
import { LoginFormSchema } from '@/types/auth/login.type'


export default {
  providers: [Credentials({
    async authorize(credentials) {
      const validatedFields = LoginFormSchema.safeParse(credentials)

      if (validatedFields.success) {
        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) return user;
      }
      return null;
    }
  })],
} satisfies NextAuthConfig
