import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, date, time } = await req.json();

  try {
    // 1. Send Email via Resend
    await resend.emails.send({
      from: 'Couture Care <onboarding@resend.dev>',
      to: 'your-email@gmail.com',
      subject: `New Booking: ${name}`,
      text: `${name} has booked a pick-up for ${date} at ${time}.`,
    });

    // 2. Google Calendar Integration via Fetch
    // Note: Requires Google Service Account OAuth Token
    const GOOGLE_CAL_URL = `https://www.googleapis.com/calendar/v3/calendars/primary/events`;
    
    await fetch(GOOGLE_CAL_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary: `Couture Care Pick-up: ${name}`,
        description: `Client: ${email}`,
        start: { dateTime: `${date}T${time}:00Z` },
        end: { dateTime: `${date}T${time}:30:00Z` },
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to process booking" }, { status: 500 });
  }
}