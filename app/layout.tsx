import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {SITE_NAME} from './utils/constant';

const inter = Inter({
    subsets: ["latin"], variable: "--font-inter", display: "swap",
});

export const metadata: Metadata = {
    title: "Gay Test – Discover Your Sexual Orientation | Accurate & Fun Quiz",
    description: "Take our free Gay Test to discover more about your sexual orientation. Based on real research, this fun and insightful quiz helps you explore your identity.",
    keywords: ["gay test", "am I gay", "sexuality quiz", "LGBTQ quiz", "online gay test", "gay quiz", "free gay test", "gay test for men", "gay test for women", "sexual orientation test", "queer quiz", "LGBT test", "how gay are you test",],
    authors: [{name: "YourSiteName", url: SITE_NAME}],
    creator: "YourSiteName",
    publisher: "YourSiteName",
    metadataBase: new URL(SITE_NAME),
    alternates: {
        canonical: SITE_NAME,
    },
    openGraph: {
        title: "Gay Test – Discover Your Sexual Orientation | Accurate & Fun Quiz",
        description: "Wondering if you're gay? Take our evidence-based gay test and get instant results. It's free, fun, and private.",
        url: SITE_NAME,
        siteName: "Gay Test by YourSiteName",
        images: [{
            url: "https://yourdomain.com/og-image.jpg", // Update with your OG image
            width: 1200, height: 630, alt: "Gay Test – Accurate, Free, and Fun Quiz",
        },],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gay Test – Free & Accurate Sexual Orientation Quiz",
        description: "Take our fun and private gay test to learn more about your sexual orientation. Instant results backed by psychology.",
        images: ["https://yourdomain.com/og-image.jpg"], // Same OG image
        creator: "@yourTwitterHandle", // Optional
    },
    category: "LGBTQ+",
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
    return (<html lang="en">
    <body
        cz-shortcut-listen="true"
        className={`${inter.variable} antialiased --font-inter`}>
            {children}
            <div style={{
                background: "linear-gradient(90deg, #3850D4 0%, #8636BB 15.38%, #B9358A 33.65%, #DC4936 50%, #E57B2D 62.5%, #E2AE34 74.04%, #CCBA3B 86.06%, #9DC147 100%)"
            }} className={"h-1.5 w-dvw"}>
            </div>
    </body>
    </html>);
}
