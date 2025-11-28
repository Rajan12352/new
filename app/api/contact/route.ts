import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, firstName, lastName, email, phone, message, companyName, companySize } = body;

        // Construct the full name based on available fields
        const fullName = name || `${firstName || ''} ${lastName || ''}`.trim();

        if (!email || !fullName || !message) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // Create a transporter using Gmail with connection pooling
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            pool: true, // Use pooled connections
            maxConnections: 1, // Limit to 1 connection for Gmail to avoid blocking
            maxMessages: 100, // Limit messages per connection
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Common styles for emails
        const emailStyles = `
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
        `;

        const headerStyle = `
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            color: white;
            padding: 20px;
            text-align: center;
        `;

        const contentStyle = `
            padding: 30px;
            background-color: #ffffff;
        `;

        const footerStyle = `
            background-color: #f9f9f9;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #888;
            border-top: 1px solid #e0e0e0;
        `;

        // Email to Admin (You)
        const adminMailOptions = {
            from: `"AutoGrow Contact Form" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `🚀 New Lead: ${fullName} - ${companyName || 'Contact Form'}`,
            html: `
                <div style="${emailStyles}">
                    <div style="${headerStyle}">
                        <h2 style="margin:0;">New Lead Received</h2>
                    </div>
                    <div style="${contentStyle}">
                        <p style="font-size: 16px;"><strong>You have a new message from the website contact form.</strong></p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee; width: 30%;"><strong>Name:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #0070f3;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
                            </tr>
                            ${companyName ? `
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${companyName}</td>
                            </tr>` : ''}
                            ${companySize ? `
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Size:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${companySize}</td>
                            </tr>` : ''}
                        </table>
                        <div style="margin-top: 25px; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
                            <p style="margin-top: 0; font-weight: bold; color: #555;">Message:</p>
                            <p style="margin-bottom: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    <div style="${footerStyle}">
                        <p>This email was sent from your AutoGrow website.</p>
                    </div>
                </div>
            `,
        };

        // Confirmation Email to User
        const userMailOptions = {
            from: `"AutoGrow Team" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: 'We received your message - AutoGrow',
            html: `
                <div style="${emailStyles}">
                    <div style="${headerStyle}">
                        <h2 style="margin:0;">Thanks for contacting us!</h2>
                    </div>
                    <div style="${contentStyle}">
                        <p>Hi ${fullName.split(' ')[0]},</p>
                        <p>Thanks for reaching out to AutoGrow! We've received your message and our team is already reviewing it.</p>
                        <p>We typically reply within 24 hours to discuss how we can help automate and scale your business.</p>
                        <div style="margin: 30px 0; padding: 20px; border-left: 4px solid #0070f3; background-color: #f0f7ff;">
                            <p style="margin: 0; font-style: italic; color: #555;">"${message}"</p>
                        </div>
                        <p>In the meantime, feel free to check out our <a href="https://autogrow.com/case-studies" style="color: #0070f3; text-decoration: none;">latest case studies</a>.</p>
                        <br>
                        <p>Best regards,</p>
                        <p><strong>The AutoGrow Team</strong></p>
                    </div>
                    <div style="${footerStyle}">
                        <p>&copy; ${new Date().getFullYear()} AutoGrow. All rights reserved.</p>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        console.log(`Emails sent successfully to ${email} and admin`);
        return NextResponse.json({ success: true, message: 'Emails sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        // Return more specific error message if available
        const errorMessage = error.message || 'Failed to send email';
        return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
    }
}
