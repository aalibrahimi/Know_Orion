import { EmailContact } from '@/MyComponents/email-contact';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY as string);

/* eslint-disable */
export async function POST(req: any) {
  // Need to check if the mothod comming in is POST
  if (req.method === 'POST') {
    const content = await req.json()
    const { FirstName, LastName, email, phone, projectType, projectDetails } = content;
  try {
    const { data, error } = await resend.emails.send({
      from: 'Knoz&Orion Website <mailer@codewithali.com>',
      to: ['Knozalnajah@gmail.com'], // Knozalnajah@gmail.com
      subject: 'New Project Request',
      react: EmailContact({ FirstName, LastName, email, phone, projectType, projectDetails }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
}
