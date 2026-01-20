import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'eugineosoroobiero@gmail.com',
        pass: 'cthv swfz comg trmj', // Gmail App Password
      },
    })

    // Email options
    const mailOptions = {
      from: 'eugineosoroobiero@gmail.com',
      to: 'eugineosoroobiero@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                New Contact Form Submission
              </h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 14px;">
                Portfolio Inquiry
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <!-- Sender Info -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #667eea;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #495057; font-weight: 600; width: 100px;">Name:</td>
                    <td style="padding: 8px 0; color: #212529; font-size: 16px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #495057; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 16px;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #495057; font-weight: 600;">Subject:</td>
                    <td style="padding: 8px 0; color: #212529; font-size: 16px;">${subject}</td>
                  </tr>
                </table>
              </div>
              
              <!-- Message -->
              <div style="background: #ffffff; padding: 25px; border-radius: 12px; border: 2px solid #e9ecef;">
                <h2 style="color: #212529; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 4px; height: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 2px; margin-right: 12px;"></span>
                  Message
                </h2>
                <div style="color: #495057; line-height: 1.8; font-size: 15px; white-space: pre-wrap; background: #f8f9fa; padding: 20px; border-radius: 8px;">${message}</div>
              </div>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                  Reply to ${name}
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="color: #6c757d; margin: 0; font-size: 13px; line-height: 1.6;">
                This email was sent from your portfolio contact form at <a href="https://eugineobiero.com" style="color: #667eea; text-decoration: none;">eugineobiero.com</a>
              </p>
              <p style="color: #adb5bd; margin: 10px 0 0 0; font-size: 12px;">
                © ${new Date().getFullYear()} Eugine Obiero. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

