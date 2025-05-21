import {Metadata} from "next";

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
    authors: [{ name: "Shubham Japkar", url: "https://linkedin.com/in/shubham-japkar" }],
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
        <div className="text-white max-w-3xl mx-auto px-4 py-10 space-y-8">
            <meta name="description" content={`Discover how LGBTQ tests help explore sexual orientation and gender identity. Learn about their purpose, types, and role in self-discovery.`} />
            <h1 className="text-3xl font-bold text-purple-400">What is an LGBTQ Test?</h1>
            <p className="text-gray-200">
                An LGBTQ test is an online or self-reflective quiz designed to help individuals explore their sexual
                orientation or gender identity. These tests are not medical or official evaluations but are instead tools
                for self-discovery. They often ask questions about emotional attraction, romantic preferences, gender
                expression, and feelings toward identity labels.
            </p>
            <p className="text-gray-200">
                In the United States, where LGBTQ visibility and awareness have grown significantly, many young people turn
                to these tests as a starting point in understanding themselves better.
            </p>

            <h2 className="text-2xl font-semibold text-pink-300">Purpose of LGBTQ Tests</h2>
            <p className="text-gray-200">While the results of LGBTQ tests are not definitive or diagnostic, they can serve several useful purposes:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Encourage self-reflection on feelings and attractions.</li>
                <li>Provide language and terminology to describe one's identity.</li>
                <li>Reduce confusion and help normalize diverse identities.</li>
                <li>Create a safe, private space for individuals who may be questioning their identity, especially in unsupportive environments.</li>
            </ul>
            <p className="text-gray-200">
                For many in the U.S., where LGBTQ conversations are more mainstream, these tests offer an entry point into
                deeper understanding—especially for teens and young adults.
            </p>

            <h2 className="text-2xl font-semibold text-pink-300">Types of LGBTQ Tests in the U.S. Context</h2>
            <p className="text-gray-200">There are several types of LGBTQ tests commonly found in online platforms across the U.S.:</p>

            <div className="quiz-section space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-purple-200">1. Sexual Orientation Tests</h3>
                    <p className="text-gray-300">These help users consider whether they might identify as gay, lesbian, bisexual, pansexual, asexual, or otherwise.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-purple-200">2. Gender Identity Quizzes</h3>
                    <p className="text-gray-300">These focus on how individuals relate to gender and whether they may identify as transgender, nonbinary, genderfluid, or cisgender.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-purple-200">3. Spectrum or Kinsey Scale Quizzes</h3>
                    <p className="text-gray-300">Inspired by the Kinsey Scale (developed in the U.S. in the 1940s), these tests position users on a spectrum from exclusively heterosexual to exclusively homosexual, recognizing sexuality as fluid.</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-pink-300">Cultural Impact in the USA</h2>
            <p className="text-gray-200">
                In the United States, where open conversations about gender and sexuality have become more common—especially on platforms like TikTok, Reddit, and YouTube—LGBTQ tests often go viral. For many users, they are a fun but meaningful way to begin a deeper conversation about who they are. Schools, LGBTQ+ centers, and mental health professionals often acknowledge that these tools can play a helpful role, especially when followed by open dialogue or support.
            </p>

            <h2 className="text-2xl font-semibold text-pink-300">Limitations and Considerations</h2>
            <p className="text-gray-200">Despite their popularity, LGBTQ tests have limitations:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>They are not clinical tools and should not replace professional advice.</li>
                <li>They may oversimplify complex identities.</li>
                <li>Some tests lack scientific backing and may rely on stereotypes.</li>
            </ul>
            <p className="text-gray-200">
                In the U.S., mental health and LGBTQ advocacy organizations often emphasize that identity is personal, and self-acceptance is more important than fitting into a label defined by an algorithm.
            </p>

            <h2 className="text-2xl font-semibold text-pink-300">How to Use LGBTQ Tests Responsibly</h2>
            <p className="text-gray-200">If you or someone you know is taking an LGBTQ test, here are some helpful guidelines:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>View it as a starting point, not a conclusion.</li>
                <li>Use it to explore feelings, not to force a label.</li>
                <li>Follow up with research, community support, or professional guidance.</li>
                <li>Remember: there’s no right or wrong way to be LGBTQ.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-pink-300">Conclusion: A Tool for Exploration, Not Definition</h2>
            <p className="text-gray-200">
                In the diverse and evolving LGBTQ landscape of the United States, LGBTQ tests can be useful tools for self-awareness. While they don't define anyone, they can spark curiosity, reflection, and confidence. Every person’s journey is unique—and discovering one’s true identity is a deeply personal, evolving process that deserves respect, support, and pride.
            </p>
        </div>
    );
}
