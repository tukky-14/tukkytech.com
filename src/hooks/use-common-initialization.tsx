import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useAuth } from './use-auth';

const useCommonInitialization = () => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    /**
     * 画面共通の初期化処理
     */
    useEffect(() => {
        const authCheck = async () => {
            const res = await isAuthenticated();
            console.log('isAuthenticated:', res);
        };
        authCheck();
    }, [isAuthenticated, router]);
};

export default useCommonInitialization;
