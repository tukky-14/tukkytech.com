import { Amplify } from 'aws-amplify';
import {
    signIn as signInAmplify,
    signOut as signOutAmplify,
    signUp as signUpAmplify,
    fetchAuthSession,
    getCurrentUser,
} from 'aws-amplify/auth';

import { currentConfig } from '../config/aws';

Amplify.configure(currentConfig);

export function signIn(username: string, password: string) {
    return signInAmplify({ username, password });
}

export function signOut() {
    return signOutAmplify();
}

export async function currentSession() {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        console.log(`The accessToken: ${accessToken}`);
        console.log(`The idToken: ${idToken}`);
    } catch (err) {
        console.log(err);
    }
}

export async function currentAuthenticatedUser() {
    try {
        const { username } = await getCurrentUser();
        // console.log(`The username: ${username}`);
        // console.log(`The userId: ${userId}`);
        // console.log(`The signInDetails: ${signInDetails}`);
        if (username) {
            return true;
        }
        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function signUp(username: string, password: string, email: string) {
    try {
        const result = await signUpAmplify({
            username,
            password,
            options: {
                userAttributes: {
                    email,
                },
            },
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

export function useAuth() {
    const isAuthenticated = async () => {
        try {
            return await currentAuthenticatedUser();
        } catch (err) {
            return false;
        }
    };

    return {
        isAuthenticated,
    };
}
