import HeroSection from "@/app/components/HeroSection";
import Faq from "@/app/components/Faq";

const currentYear = new Date().getFullYear();

export default function Home() {
    return (
        <div className={"font-sans"}>
            <HeroSection />
            <Faq />
            <footer>
                <div className={"flex justify-center flex-wrap text-sm gap-x-8 gap-y-5 md:gap-x-10 max-w-[860px] m-auto pt-[35px] pb-10 md:pb-[62px] px-4 md:px-0"}>
                    <button>Terms & conditions</button>
                    <button>Privacy policy</button>
                    <button>Contact us</button>
                    <button>©{currentYear} All right reserved</button>
                </div>
            </footer>
        </div>
    );
}
