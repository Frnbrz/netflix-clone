import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

import { db } from "@/lib/prisma"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  console.log(email, password)
  try {
    const hasedPassword = await bcrypt.hash(password, 10)
    const existingUser = await db.user.findUnique({
      where: {
        email
      }
    })

    if (existingUser) NextResponse.json({ error: "Email already exists" }, { status: 400 })


    const userCreated = await db.user.create({
      data: {
        email,
        password: hasedPassword
      }
    })

    return NextResponse.json(userCreated)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse("internal error", { status: 500 })
  }
}
