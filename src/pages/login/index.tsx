/* eslint @typescript-eslint/no-explicit-any: off */
'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { currentAuthenticatedUser, currentSession, signIn } from '@/hooks/use-auth';
import { translateErrorMessage } from '@/libs/cognito';

import blog from '../../images/blog.png';

const Login = () => {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            // 型アサーションを使用して、value プロパティへのアクセスを安全に行う
            const userIdInput = e.currentTarget.elements.namedItem('userId') as HTMLInputElement;
            const passwordInput = e.currentTarget.elements.namedItem('password') as HTMLInputElement;

            if (userIdInput && passwordInput) {
                const username = userIdInput.value;
                const password = passwordInput.value;

                const { isSignedIn } = await signIn(username, password);
                await currentSession();
                await currentAuthenticatedUser();

                if (isSignedIn) {
                    router.push('/');
                }
            }
        } catch (error: any) {
            console.log('error signing in', error);
            alert(translateErrorMessage(error.message));
        }
    };

    return (
        <div className="m-auto max-w-lg p-10">
            <div className="mb-4 flex items-center justify-center">
                <img alt="サイトのアイコン画像" className="mr-1 h-7 w-7" src={blog.src} />
                <div className="self-center whitespace-nowrap text-2xl font-semibold">Tukky Tech Blog</div>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input id="userId" label="ユーザID" name="userId" required={true} style="mb-4" type="text" />
                <Input id="password" label="パスワード" name="password" required={true} style="mb-6" type="password" />
                <div className="text-center">
                    <Button id="login" text="ログイン" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Login;
