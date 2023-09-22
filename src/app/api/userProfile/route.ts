import { UserProfile } from "@/lib/outerbase/allCommands";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const userData = await req.json();
  if (!userData.userId) {
    return NextResponse.json(
      { message: "userId is requried" },
      { status: 500 }
    );
  } else {
    try {
      const response = await UserProfile("14");

      //   if (!response.success) {
      //     throw new Error();
      //   }

      return NextResponse.json({
        status: 200,
        message: "successfully",
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
