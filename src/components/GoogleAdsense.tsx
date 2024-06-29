/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';

import { css } from '@emotion/react';

type GoogleAdsenseProps = {
    client: string;
    slot: string;
    style?: React.CSSProperties;
};

declare global {
    interface Window {
        adsbygoogle: { [key: string]: unknown }[];
    }
}

const GoogleAdsense = ({ client, slot, style }: GoogleAdsenseProps) => {
    useEffect(() => {
        const adsScript = document.createElement('script');
        adsScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
        adsScript.async = true;
        document.body.appendChild(adsScript);

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error(err);
        }

        return () => {
            document.body.removeChild(adsScript);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className="mb-5"
            css={css`
                text-align: center;
            `}
        >
            <ins
                className="adsbygoogle"
                data-ad-client={client}
                data-ad-format="auto"
                data-ad-slot={slot}
                data-full-width-responsive="true"
                style={style}
            ></ins>
        </div>
    );
};

export default GoogleAdsense;
