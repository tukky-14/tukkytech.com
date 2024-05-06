/* eslint @typescript-eslint/no-explicit-any: off */

'use client';

import React, { useState } from 'react';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSendDisabled, setIsSendDisabled] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setIsSendDisabled(true);

            const formData = {
                name,
                email,
                message,
            };

            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            setName('');
            setEmail('');
            setMessage('');

            if (response.ok) {
                console.log('Email sent.');
            } else {
                console.log('Email not sent.');
            }

            alert('お問い合わせを送信しました。');
            setIsSendDisabled(false);
        } catch (error) {
            console.error(error);
            alert('お問い合わせの送信に失敗しました。');
            setIsSendDisabled(false);
        }
    };

    return (
        <Container>
            <Header isTop={false} />
            <div className="mx-auto max-w-screen-xl">
                <main className="w-screen bg-white px-4 py-5 sm:max-w-screen-md">
                    <div className="mx-auto mb-40 max-w-md">
                        <h1 className="mb-6 text-2xl font-semibold">お問い合わせ</h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="mb-1 block">名前:</label>
                                <input
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-400 focus:outline-none"
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    value={name}
                                />
                            </div>
                            <div>
                                <label className="mb-1 block">メール:</label>
                                <input
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-400 focus:outline-none"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    value={email}
                                />
                            </div>
                            <div>
                                <label className="mb-1 block">メッセージ:</label>
                                <textarea
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-400 focus:outline-none"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                ></textarea>
                            </div>
                            <button
                                className={`${(!name || !email || !message || isSendDisabled) && 'opacity-60 hover:cursor-not-allowed'} rounded-md bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600 focus:bg-cyan-600 focus:outline-none`}
                                disabled={!name || !email || !message || isSendDisabled}
                                type="submit"
                            >
                                送信
                            </button>
                        </form>
                    </div>
                </main>
            </div>
            <Footer />
        </Container>
    );
};

export default Contact;
