/* eslint @typescript-eslint/no-explicit-any: warn */

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect } from 'react';

import { config } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';

import { AuthProvider } from '@/hooks/use-auth';

import * as gtag from '../libs/gtag';

import type { AppProps } from 'next/app';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouterChange = (url: string) => {
            // Specify the type as string
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouterChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouterChange);
        };
    }, [router.events]);

    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
            />
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </>
    );
}
