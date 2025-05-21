import HeroSection from "@/app/components/HeroSection";
import Faq from "@/app/components/Faq";
import Link from "next/link";
import type {Metadata} from "next";
import {SITE_DOMAIN_NAME, SITE_NAME} from "@/app/utils/constant";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
    title: "I am Gay Quiz | Quiz for gay | My gay Quiz",
    keywords: ["gay test", "am I gay", "sexuality quiz", "LGBTQ quiz", "online gay test", "gay quiz", "free gay test", "gay test for men", "gay test for women", "sexual orientation test", "queer quiz", "LGBT test", "how gay are you test",],
    authors: [{name: "Shubham Japkar", url: "https://linkedin.com/in/shubham-japkar"}],
    creator: "Shubham Japkar",
    publisher: "Shubham Japkar",
    metadataBase: new URL(SITE_NAME),
    alternates: {
        canonical: SITE_NAME,
    },
    // openGraph: {
    //     title: "I am Gay Quiz | Quiz for gay | My gay Quiz",
    //     description: `Take our fun and insightful "I am gay" quiz to discover more about yourself. a quiz for gay individuals. My gay quiz offers an engaging way to explore your identity.`,
    //     url: SITE_NAME,
    //     siteName: `Gay Test by ${SITE_DOMAIN_NAME}`,
    //     // images: [{
    //     //     url: "https://mygaytest.com/og-image.jpg",
    //     //     width: 1200, height: 630, alt: "Gay Test – Accurate, Free, and Fun Quiz",
    //     // },],
    //     type: "website",
    // },
    robots: {
        index: true, follow: true, nocache: false, googleBot: {
            index: true, follow: true, noimageindex: false,
        },
    },
};

export default function Home() {
    return (
        <div className={"font-sans"}>
            <meta name="description" content={`Take our fun and insightful "I am gay" quiz to discover more about yourself. a quiz for gay individuals. My gay quiz offers an engaging way to explore your identity.`} />
            <HeroSection />
            <Faq />
            <footer>
                <div className={"flex justify-center flex-wrap text-sm gap-x-8 gap-y-5 md:gap-x-10 max-w-[860px] m-auto pt-[35px] pb-10 md:pb-[62px] px-4 md:px-0"}>
                    <Link href={"/lgbtq-quiz"}>LGBTQ Quiz</Link>
                    <Link href={"/terms-and-conditions"}>Terms & conditions</Link>
                    <Link href={"/privacy-policy"}>Privacy policy</Link>
                    <Link href={"/contact-us"}>Contact us</Link>
                    <button>©{currentYear} All right reserved</button>
                </div>
            </footer>
        </div>
    );
}
