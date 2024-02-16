// https://docs.amplify.aws/javascript/build-a-backend/auth/set-up-auth/#determine-your-auth-integration-path
import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_ID || '',
            userPoolClientId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_CLIENT_ID || '',
            identityPoolId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_IDENTITY_POOL_ID || '',
        },
    },
});

export const currentConfig = Amplify.getConfig();
