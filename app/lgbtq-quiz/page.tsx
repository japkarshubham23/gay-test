import {Metadata} from "next";
import LgbtqTest from "@/app/components/blogs/LgbtqTest";

export const metadata: Metadata = {
    title: `Understanding the "LGBTQ Test" in the USA: Identity, Self-Discovery, and Awareness`,
    keywords: [
        "LGBTQ quiz",
        "LGBTQ test",
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
    authors: [{name: "Shubham Japkar", url: "https://linkedin.com/in/shubham-japkar"}],
    creator: "Shubham Japkar",
    publisher: "Shubham Japkar",
    metadataBase: new URL("https://mygaytest.com/"),
    alternates: {
        canonical: "https://mygaytest.com/lgbtq-quiz",
    },
    // openGraph: {
    //     title: `Understanding the "LGBTQ Test" in the USA: Identity, Self-Discovery, and Awareness`,
    //     description: `Discover how LGBTQ tests help explore sexual orientation and gender identity. Learn about their purpose, types, and role in self-discovery.`,
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
    return (
        <div>
            <meta name="description" content={`Discover how LGBTQ tests help explore sexual orientation and gender identity. Learn about their purpose, types, and role in self-discovery.`} />
            <LgbtqTest/>
        </div>
    );
}
