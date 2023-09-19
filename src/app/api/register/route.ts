import { createUser } from "@/lib/outerbase/users";
import { NextResponse } from "next/server";
import { hashSync } from "bcrypt";

export async function POST(req: Request) {
  const userData = await req.json();
  if (!userData.email) {
    return NextResponse.json({ message: "email is requried" }, { status: 500 });
  }
  if (!userData.fullName) {
    return NextResponse.json(
      { message: "fullName is requried" },
      { status: 500 }
    );
  }
  if (!userData.password) {
    return NextResponse.json(
      { message: "password is requried" },
      { status: 500 }
    );
  } else {
    try {
      userData.passwordHash = hashSync(userData.password, 10);

      delete userData.password;

      const response = await createUser(userData);

      if (!response.success) {
        throw new Error();
      }

      return NextResponse.json({
        status: 200,
        message: "registered successfully",
        data: response,
      });
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json(
        { error: error, message: "Invalid Credentails" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
