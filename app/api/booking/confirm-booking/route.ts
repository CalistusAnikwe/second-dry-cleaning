import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, date, time, address, instructions } = body;

    // 1. SEND EMAIL TO CALISTUS
    await resend.emails.send({
      from: 'Couture Care <onboarding@resend.dev>',
      to: 'calistusmine@gmail.com',
      subject: `New Order: ${service} - ${date}`,
      html: `
        <h1>New Pickup Request</h1>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Customer:</strong> ${name} (${email})</p>
        <p><strong>Date/Time:</strong> ${date} at ${time}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
      `,
    });

    // 2. GOOGLE CALENDAR API CALL
    // Importance: This creates the reminder on your phone.
    const GOOGLE_EVENT = {
      'summary': `Couture Pickup: ${service}`,
      'description': `Address: ${address} | Instructions: ${instructions}`,
      'start': { 'dateTime': `${date}T${time.split(' ')[0]}:00Z` },
      'end': { 'dateTime': `${date}T${time.split(' ')[0]}:30:00Z` },
    };

    await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(GOOGLE_EVENT),
    });

    return NextResponse.json({ message: "Booking Confirmed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Booking Failed" }, { status: 500 });
  }
}