import {TestReportProvider} from "@/app/components/providers/TestReportProvider";
import QuizResult from "../components/QuizResult";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gay test Online | Am I gay test",
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
    metadataBase: new URL("https://mygaytest.com"),
    alternates: {
        canonical: "https://mygaytest.com/quiz",
    },
    // openGraph: {
    //     title: "Gay test Online | Am I gay test",
    //     description: `Whether you're looking for a gay test online or wondering, "Am I gay?", take our My Gay Online Test and learn more about yourself.`,
    //     // url: "https://mygaytest.com/quiz",
    //     siteName: "Gay Test by mygaytest.com",
    //     images: [
    //         {
    //             url: "https://mygaytest.com/og-image.jpg",
    //             width: 1200,
    //             height: 630,
    //             alt: "Gay Test – Accurate, Free, and Fun Quiz",
    //         },
    //     ],
    //     type: "website",
    //     locale: "en_US",
    // },
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
        <meta name="description" content={`Whether you're looking for a gay test online or wondering, "Am I gay?", take our My Gay Online Test and learn more about yourself.`} />
        <QuizResult/>
    </TestReportProvider>
}