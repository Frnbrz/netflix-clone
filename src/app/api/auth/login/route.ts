import { NextResponse } from "next/server"
import bcryptjs from "bcrypt";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse("internal error", { status: 500 })
  }
}
