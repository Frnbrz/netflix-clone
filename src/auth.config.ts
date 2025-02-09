
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import { getUserByEmail } from "./data/user"

const providers: Provider[] = [
  Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      let user = null

      const pwHash =
        user = await getUserByEmail(credentials.email)

      if (!user) {
        // No user found, so this is their first attempt to login
        // Optionally, this is also the place you could do a user registration
        throw new Error("Invalid credentials.")
      }

      // return user object with their profile data
      return user
    },
  }),
]
