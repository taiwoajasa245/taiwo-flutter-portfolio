// app/api/send/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  try {
    // Send email
    // await transporter.sendMail({
    //   from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    //   to: process.env.YOUR_RECEIVING_EMAIL, 
    //   subject: `New message from ${name}: ${subject}`,
    //   text: message,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // })

    await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.YOUR_RECEIVING_EMAIL,
        subject: `New message from ${name}: ${subject}`,
        text: message, // Plain text fallback
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); padding: 30px 0; text-align: center; border-radius: 8px 8px 0 0; }
              .header h1 { color: white; margin: 0; font-size: 24px; }
              .container { padding: 30px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
              .details { background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px; }
              .detail-row { display: flex; margin-bottom: 10px; }
              .detail-label { font-weight: 600; min-width: 80px; color: #4b5563; }
              .message { background: #f3f4f6; padding: 20px; border-radius: 8px; font-style: italic; }
              .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #9ca3af; }
              .gradient-text { background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Flutter Portfolio Message</h1>
            </div>
            
            <div class="container">
              <div class="details">
                <div class="detail-row">
                  <div class="detail-label">From:</div>
                  <div>${name} &lt;${email}&gt;</div>
                </div>
                <div class="detail-row">
                  <div class="detail-label">Subject:</div>
                  <div>${subject}</div>
                </div>
                <div class="detail-row">
                  <div class="detail-label">Date:</div>
                  <div>${new Date().toLocaleString()}</div>
                </div>
              </div>
              
              <h3 style="margin-top: 0; margin-bottom: 15px;">Message:</h3>
              <div class="message">
                ${message.replace(/\n/g, '<br>')}
              </div>
              
              <div class="footer">
                <p>This message was sent from your portfolio contact form.</p>
                <p>© ${new Date().getFullYear()} Taiwo's Flutter Portfolio</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
}