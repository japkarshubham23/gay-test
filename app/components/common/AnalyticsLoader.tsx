import Script from "next/script";

export default function AnalyticsLoader() {
    return <div>
        <Script
            type="text/javascript" async
            src="https://www.googletagmanager.com/gtag/js?id=G-T0QHXH1HHS"
            strategy="lazyOnload"/>

        {/* Inline GA configuration */}
        <Script
            type="text/javascript"
            id="google-analytics"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T0QHXH1HHS', {
              page_path: window.location.pathname,
            });
          `,
            }}
        />
    </div>
}