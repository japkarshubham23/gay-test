import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {SITE_DOMAIN_NAME, SITE_NAME} from './utils/constant';
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"], variable: "--font-inter", display: "swap",
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en" suppressHydrationWarning>
    <body
        cz-shortcut-listen="true"
        className={`${inter.variable} antialiased --font-inter`}>
    {children}
    <div style={{
        background: "linear-gradient(90deg, #3850D4 0%, #8636BB 15.38%, #B9358A 33.65%, #DC4936 50%, #E57B2D 62.5%, #E2AE34 74.04%, #CCBA3B 86.06%, #9DC147 100%)"
    }} className={"h-1.5 w-dw"}>
    </div>
    </body>

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
    </html>);
}
