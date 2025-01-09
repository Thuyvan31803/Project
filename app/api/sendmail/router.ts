import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Cấu hình transporter cho Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'lethuyvan3182003@gmail.com', 
        pass: 'xwlzfdvdpacwpzpy',
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'lethuyvan3182003@gmail.com', // Email nhận thông tin
        subject: `Liên hệ từ ${name}`,
        text: `Tên: ${name}\nEmail: ${email}\n\nLời nhắn:\n${message}`,
      });

      res.status(200).json({ message: 'Email đã được gửi thành công!' });
    } catch (error) {
      console.error('Lỗi gửi email:', error);
      res.status(500).json({ message: 'Có lỗi xảy ra. Vui lòng thử lại sau.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
