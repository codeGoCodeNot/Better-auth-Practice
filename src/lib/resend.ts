import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailParams = {
  to: string;
  subject: string;
  text: string;
};

const sendEmail = async ({ to, subject, text }: SendEmailParams) => {
  await resend.emails.send({
    from: "noreply@minidashboard.johnsenb.dev",
    to,
    subject,
    text,
  });
};

export default sendEmail;
