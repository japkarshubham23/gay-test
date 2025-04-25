import {TestReportProvider} from "@/app/components/providers/TestReportProvider";
import QuizResult from "../components/QuizResult";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gay Test Quiz – Find Out Your Sexual Orientation | Fun & Accurate",
    keywords: [
        "gay test quiz",
        "am I gay quiz",
        "sexual orientation quiz",
        "LGBTQ quiz",
        "online gay test",
        "gay quiz for men",
        "gay quiz for women",
        "queer quiz",
        "sexuality test",
        "how gay are you quiz"
    ],
    authors: [{ name: "Shubham Japkar", url: "https://linkedin.com/in/shubham-japkar" }],
    creator: "Shubham Japkar",
    publisher: "Shubham Japkar",
    metadataBase: new URL("https://yourdomain.com"),
    alternates: {
        canonical: "https://yourdomain.com/quiz",
    },
    openGraph: {
        title: "Gay Test Quiz – Find Out Your Sexual Orientation | Fun & Accurate",
        description: "Take our free, evidence-based gay test quiz to discover your sexual orientation. Instant results, private, and inclusive for all genders.",
        // url: "https://yourdomain.com/quiz",
        siteName: "Gay Test by yourdomain.com",
        images: [
            {
                url: "https://yourdomain.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Gay Test – Accurate, Free, and Fun Quiz",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
};


export default function Page() {
    return <TestReportProvider>
        <meta name="description" content="Take our free, evidence-based gay test quiz to discover your sexual orientation. Instant results, private, and inclusive for all genders." />
        <QuizResult/>
    </TestReportProvider>
}