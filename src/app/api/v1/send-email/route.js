import { NextResponse } from "next/server"
import { sendAppointmentEmail } from "./send-email";


export const POST = async (req)=> { 
  try{
  const body = await req.json();

  await sendAppointmentEmail(body)

  return NextResponse.json({
    status: 200,
    message: "Successfully send email"
  });
} catch (error) {
  console.error("Error in sending email :", error);
  return NextResponse.json({ status: 500, error: "Internal server error" } , {status : 500});
}
}