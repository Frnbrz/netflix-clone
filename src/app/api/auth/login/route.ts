import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs";

import { getUserByEmail } from "@/data/user"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  console.log(email, password)
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser && existingUser.password) {
      const passwordsMatch = await bcryptjs.compare(password, existingUser.password)

      if (passwordsMatch) {
        return NextResponse.json({ message: "Login successful" }, { status: 200 })
      }
    }
    return NextResponse.json({ error: "Login failed" }, { status: 400 })
  } catch (error) {
    return new NextResponse("internal error: " + error, { status: 500 })
  }
}
