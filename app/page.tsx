import Logo from "@/app/images/Logo";
import HeroSection from "@/app/components/HeroSection";
import Faq from "@/app/components/Faq";

export default function Home() {
    return (
        <div className={"font-sans"}>
            <header className={"flex justify-center pt-[24px] md:pt-[50px] pb-[30px]"}>
                <Logo />
            </header>

            <HeroSection />
            <Faq />
            <footer>

            </footer>
        </div>
    );
}
