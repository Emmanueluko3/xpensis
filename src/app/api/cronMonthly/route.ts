import { NextResponse } from "next/server";

const dbURL: any = process.env.OUTERBASE_CRON_URL;
export async function POST(req: Request) {
  try {
    const response = await fetch(dbURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ frequency: "Monthly" }),
    });
    const data = await response.json();

    return NextResponse.json({
      status: 200,
      message: "Goal Added successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error, message: "Invalid Credentails" },
      { status: 500 }
    );
  }
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}

// {
//   "path": "/api/cronMonthly",
//   "schedule": "0 6 1 * *"
// },
