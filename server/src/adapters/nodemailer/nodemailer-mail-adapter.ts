import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0b1ea1b4f84d0e",
    pass: "afedeaf14ccece"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData){
     await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Guilherme Migliano <guimigliano@gmail.com>',
    subject,
    html: body
  })
  }
}