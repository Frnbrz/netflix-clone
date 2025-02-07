import { db } from "@/src/lib/db"

export const getUserByEmail = async (email: string) => {
  if (!email) return null

  try {
    const user = await db.user.findUnique({
      where: {
        email
      }
    })
    return user
  } catch (error) {
    console.error(error)
    return null
  }
}
