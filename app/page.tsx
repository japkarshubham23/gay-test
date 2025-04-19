import Logo from "@/app/images/Logo";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
    return (
        <div className={"font-sans"}>
            <header className={"flex justify-center pt-[50px] pb-[30px]"}>
                <Logo />
            </header>

            <HeroSection />
            <footer>

            </footer>
        </div>
    );
}
