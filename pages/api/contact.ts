import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer, { SendMailOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
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

    transporter.sendMail(mail, err => res.send(`Sorry, something went wrong: ${err}`));

    res.status(200).send('Success!');
  } else {
    res.status(400).send('Please use the webform');
  }
}
