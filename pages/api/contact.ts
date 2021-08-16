import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer, { SendMailOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    accessToken: process.env.EMAIL_ACCESS_TOKEN
  }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const recaptchaRaw = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${req.body.recaptcha}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        Accept: 'application/json'
      }
    }
  );

  const { success } = await recaptchaRaw.json();

  if (success) {
    const { email, title, message } = req.body;

    const mail: SendMailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: title,
      text: message,
      replyTo: email
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mail, (err, info) => {
        if (err) {
          reject(err);
        }
        if (info) {
          resolve(info);
        }
      });
    });

    res.status(200).send('Success!');
  } else {
    res.status(400).send('Please use the webform and complete the ReCAPTCHA.');
  }
}
