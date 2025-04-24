import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {SITE_DOMAIN_NAME, SITE_NAME} from './utils/constant';
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"], variable: "--font-inter", display: "swap",
});

export const metadata: Metadata = {
    title: "Gay Test – Discover Your Sexual Orientation | Accurate & Fun Quiz",
    keywords: ["gay test", "am I gay", "sexuality quiz", "LGBTQ quiz", "online gay test", "gay quiz", "free gay test", "gay test for men", "gay test for women", "sexual orientation test", "queer quiz", "LGBT test", "how gay are you test",],
    authors: [{name: "Shubham Japkar", url: "https://linkedin.com/in/shubham-japkar"}],
    creator: "Shubham Japkar",
    publisher: "Shubham Japkar",
    metadataBase: new URL(SITE_NAME),
    alternates: {
        canonical: SITE_NAME,
    },
    openGraph: {
        title: "Gay Test – Discover Your Sexual Orientation | Accurate & Fun Quiz",
        description: "Wondering if you're gay? Take our evidence-based gay test and get instant results. It's free, fun, and private.",
        url: SITE_NAME,
        siteName: `Gay Test by ${SITE_DOMAIN_NAME}`,
        // images: [{
        //     url: "https://yourdomain.com/og-image.jpg",
        //     width: 1200, height: 630, alt: "Gay Test – Accurate, Free, and Fun Quiz",
        // },],
        type: "website",
    },
    robots: {
        index: true, follow: true, nocache: false, googleBot: {
            index: true, follow: true, noimageindex: false,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en" suppressHydrationWarning>
    <meta name="description" content="Take our free Gay Test to discover more about your sexual orientation. Based on real research, this fun and insightful quiz helps you explore your identity." />
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
        src="https://www.googletagmanager.com/gtag/js?id=G-T0QHXH1HHS"
        strategy="lazyOnload"/>
    <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T0QHXH1HHS');
          `}
    </Script>
    </html>);
}
