"use client";

import gayTest from "@/app/images/gay-test-banner.png"
import TickIcon from "@/app/icons/TickIcon";
import StartIcon from "@/app/icons/StartIcon";
import TimerIcon from "@/app/icons/TimerIcon";
import PersonalizeIcon from "@/app/icons/PersonalizeIcon";
import { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionsIcon from "@/app/icons/QuestionsIcon";
import Image from "next/image";
import logo from "../images/logo.png"


export default function HeroSection() {
    const router = useRouter();
    const [navigationLoading, setNavigationLoading] = useState(false);
    const [btnStyle, setBtnStyle] = useState({
        color: "black",
        background: "white",
    });

    const handleMouseEnter = () => {
        setBtnStyle({
            color: "#FFFFFF",
            background: "linear-gradient(90deg, #3550E6 5.25%, #9F39E3 18.54%, #F439B2 34.32%, #EB4934 48.44%, #E87D2E 59.24%, #F2B62B 69.21%, #F3DC38 79.59%, #C4F353 91.64%)"
        });
    };

    const handleMouseLeave = () => {
        if (!navigationLoading) {
            setBtnStyle({
                color: "black",
                background: "white"
            })
        }
    };

    const handleNavigation = () => {
        setNavigationLoading(true);
        setTimeout(() => {
            router.push('/quiz')
        }, 1500)
    }

    return <div style={{
        backgroundImage: `url(${gayTest.src})`,
        backgroundRepeat: 'no-repeat'
    }} className={"bg-center md:bg-bottom bg-size-[750px] lg:bg-size-[1100px]"}>
        <div className={"bg-[linear-gradient(180deg,rgba(7,8,2,0)_4.26%,rgba(7,8,2,0.431756)_30.86%,rgba(7,8,2,0.779555)_59.73%,#070802_85.25%)] lg:bg-[linear-gradient(180deg,rgba(7,8,2,0)_5%,rgba(7,8,2,0.431756)_36.2%,rgba(7,8,2,0.779555)_69.71%,#070802_100%)]"}>
            <header className={"flex justify-center py-5 lg:py-8"}>
                <Image src={logo.src} alt={"logo"} height={100} width={100} />
            </header>

            <div className={"flex flex-col justify-between pb-2.5 px-[16px] md:px-0 max-w-[500px] m-auto h-[calc(100dvh_-_110px)] md:h-[calc(100vh_-_135px)]"}>
                <div className={"flex justify-center gap-6"}>
                    <div
                        className={"flex gap-1 md:gap-3 px-2.5 md:px-3 py-2 md:py-2.5 bg-[#11100C] border-[1px] rounded-md border-r-2 border-[#3A3935]"}>
                        <div className={"flex items-center"}>
                            <TickIcon/>
                        </div>
                        <div>
                            <div className={"text-[10px] md:text-xs pb-0.5 font-medium"}>Verified by Real People</div>
                            <div className={"text-xs md:text-[16px] font-medium"}>92.4% Accuracy</div>
                        </div>
                    </div>

                    <div
                        className={"flex gap-1 md:gap-3 px-2.5 md:px-3 py-2 md:py-2.5 bg-[#11100C] border-[1px] rounded-md border-r-2 border-[#3A3935]"}>
                        <div className={"flex items-center"}>
                            <StartIcon/>
                        </div>
                        <div>
                            <div className={"text-[10px] md:text-xs pb-0.5 font-medium"}>RATED BY REAL USERS</div>
                            <div className={"text-xs md:text-[16px] font-medium"}>98.9% Liked</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={"flex flex-col justify-center items-center"}>
                        <h2 style={{
                            background: "linear-gradient(90deg, #3550E6 5.25%, #9F39E3 18.54%, #F439B2 34.32%, #EB4934 48.44%, #E87D2E 59.24%, #F2B62B 69.21%, #F3DC38 79.59%, #C4F353 91.64%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }} className={"text-[42px] md:text-6xl font-extrabold md:font-bold"}>Am I GAY?
                        </h2>
                        <div className={"text-[16px] md:text-[22px] leading-7 text-center"}>Take a quiz to check if you’re gay or not.</div>

                        <div className={"py-4.5 md:py-8 px-2.5 w-full"}>
                            <button
                                onClick={handleNavigation}
                                style={btnStyle}
                                className={`rounded-[10px] w-full bg-white py-3.5 md:py-[18px] text-xl font-medium transition duration-500 md:duration-300 cursor-pointer`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                {navigationLoading ? <div className="flex justify-center items-center">
                                    <span>Loading</span>
                                    <span className="animate-bounce [animation-delay:0s]">.</span>
                                    <span className="animate-bounce [animation-delay:0.2s]">.</span>
                                    <span className="animate-bounce [animation-delay:0.4s]">.</span>
                                </div> : <span>Take the quiz</span>}
                            </button>
                        </div>
                    </div>
                    <div className={"flex md:grid md:grid-cols-3 flex-wrap gap-2.5 md:gap-5"}>
                        <div
                            className={"flex flex-1 justify-center items-center rounded-[10px] gap-1.5 px-2 md:px-3 py-2.5 border-[1px] border-[#3C3C3C] cursor-auto"}>
                            <div className={"h-4 md:h-6"}>
                                <TimerIcon/>
                            </div>
                            <span className={"font-medium text-[10px] md:text-[16px] leading-2.5 md:leading-[21px] whitespace-nowrap"}>1 min quiz</span>
                        </div>
                        <div
                            className={"flex flex-1 justify-center items-center rounded-[10px] gap-1.5 px-2 md:px-3 py-2.5 border-[1px] border-[#3C3C3C] cursor-auto"}>
                            <div className={"h-4 md:h-6"}>
                                <QuestionsIcon/>
                            </div>
                            <span className={"font-medium text-[10px] md:text-[16px] leading-2.5 md:leading-[21px] whitespace-nowrap"}>10 questions</span>
                        </div>
                        <div
                            className={"flex flex-1 justify-center items-center rounded-[10px] gap-1.5 px-2 md:px-3 py-2.5 border-[1px] border-[#3C3C3C] cursor-auto"}>
                            <div className={"h-4 md:h-6"}>
                                <PersonalizeIcon/>
                            </div>
                            <span className={"font-medium text-[10px] md:text-[16px] leading-2.5 md:leading-[21px] whitespace-nowrap"}>Personalized</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}