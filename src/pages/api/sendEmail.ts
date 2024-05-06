/* eslint @typescript-eslint/no-explicit-any: off */

import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        // nodemailer のトランスポートを作成します。
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.CONTACT_SEND_MAIL_ADDRESS, // 送信元のメールアドレス
                pass: process.env.CONTACT_SEND_MAIL_PASSWORD, // 送信元のメールアドレスのパスワード
            },
        });

        // メールの内容を定義
        const { name, email, message } = req.body;
        const mailOptions = {
            from: process.env.CONTACT_SEND_MAIL_ADDRESS,
            to: process.env.CONTACT_SEND_MAIL_ADDRESS,
            subject: '【Tukky Tech Blog】お問い合わせがありました',
            text: `お名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
            html: `<p>お名前: ${name}</p><p>メールアドレス: ${email}</p><p>メッセージ: ${message}</p>`,
        };

        // メールを送信
        const info = await transporter.sendMail(mailOptions);

        // レスポンスを返却
        res.status(200).json({ message: 'Email sent.', info });
    } else {
        // それ以外の HTTP メソッドの場合、405 Method Not Allowed を返却
        res.status(405).json({ message: 'Method not allowed.' });
    }
}
