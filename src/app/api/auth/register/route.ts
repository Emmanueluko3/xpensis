import { createUser } from "@/lib/outerbase/users";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const userData = await req.json();

  try {
    const { error, response } = await createUser(userData);

    if (error) {
      throw new Error(error);
    }
    // if (response.items.length === 0) {
    //   return NextResponse.json({ error: "User Not Found" }, { status: 425 });
    // }
    return NextResponse.json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
