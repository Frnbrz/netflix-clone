import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

import { db } from "@/src/lib/db"
import { getUserByEmail } from "@/src/data/user"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  console.log(email, password)
  try {

    console.log(password)
    const hasedPassword = await bcrypt.hash(password, 10)

    console.log(hasedPassword)
    const existingUser = getUserByEmail(email);

    console.log(existingUser)
    if (existingUser) {
      console.log('entra existingUser')
      return NextResponse.json({ error: "Success on login" }, { status: 200 })
    }

    if (!existingUser) {
      console.log('entra !existingUser')
      return NextResponse.json({ error: "Success on login" }, { status: 400 })
    }

    return NextResponse.json({ error: "Login failed" }, { status: 400 })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse("internal error", { status: 500 })
  }
}
