import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailForMe = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `interested from portfolio  ${name}`,
      text: message,
    };

    const mailForUser = {
      from: `${process.env.EMAIL_USER} <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for your Response",
      text: `Hi ${name}, thanks for your Response. I will contact you as soon as I can.`,
    };

    await transporter.sendMail(mailForMe);
    await transporter.sendMail(mailForUser);

    console.log("Emails sent successfully");

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Failed to send email", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
