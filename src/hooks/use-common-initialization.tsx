import { useEffect } from 'react';

import { currentAuthenticatedUser, useAuth } from './use-auth';

const useCommonInitialization = () => {
    const { setIsAuthenticated } = useAuth();

    /**
     * 画面共通の初期化処理
     */
    useEffect(() => {
        const authCheck = async () => {
            const res = await currentAuthenticatedUser();
            setIsAuthenticated(res);
        };
        authCheck();
    }, [setIsAuthenticated]);
};

export default useCommonInitialization;
