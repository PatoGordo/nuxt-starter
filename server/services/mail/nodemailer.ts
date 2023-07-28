import transporter from "nodemailer";

export const mailTransporter = transporter.createTransport({
  host: String(process.env.MAIL_HOST),
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
