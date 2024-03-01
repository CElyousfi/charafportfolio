import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(req , res)
{
    const result = await req.json();
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'mail.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_EMAIL_ADDRESS,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });
    const mailOptions = {
        from : `${result.email}`,
        to: process.env.GMAIL_EMAIL_ADDRESS,
        subject: 'Demande de contact',
        html: `<!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    background-color: #fff;
                    padding: 20px;
                    margin: 0 auto;
                    max-width: 600px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #444;
                }
                .info {
                    margin-bottom: 20px;
                    line-height: 1.6;
                }
                .info span {
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Portfolio - Demande de Contact pour Freelance :</h2>
                <p class="info"><span>Full Name: </span> ${result.name}</p>
                <p class="info"><span>Email Address: </span>${result.email}</p>
                <p class="info"><span>Sujet de Contact: </span>${result.subject}</p>
                <p class="info"><span>Message du client: </span>${result.message}</p>
            </div>
        </body>
        </html>
        `,
    };
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email Envoyeé avec succés !' });
    } catch (error) {
        return NextResponse.error();
    }
}