"use client";

import {useEffect, useRef, useState } from "react";
import CompleteIcon from "@/app/icons/CompleteIcon";
import ArrowIcon from "../icons/ArrowIcon";
import {IOption, ITestReport, useTestReport} from "@/app/components/providers/TestReportProvider";
import OptionSelectionIcon from "@/app/icons/OptionSelectionIcon";
import Image from "next/image";
import logo from "@/app/images/logo.png";
import { useRouter } from "next/navigation";

function ProgressBar() {
    const {quiz} = useTestReport();

    const [widthElement, setWidthElement] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const products = (quiz.filter(e=> e.selectedIndex !== -1).length + 1);
    const progressInPx: number = ((widthElement / 10) * (products))

    useEffect(() => {
        if (ref.current) {
            setWidthElement(ref.current.offsetWidth);
        }
    }, [ref])

    return  <div ref={ref}
                 className={"relative"}>
        <div style={{
            width: `${progressInPx}px`,
            background: "linear-gradient(90deg, #3850D4 0%, #8636BB 15.38%, #B9358A 33.65%, #DC4936 50%, #E57B2D 62.5%, #E2AE34 74.04%, #CCBA3B 86.06%, #9DC147 100%)"
        }} className={"absolute top-0 h-[5px] bg-[#FFFFFF33] w-1/2 rounded-[10px] transition-all duration-700 ease-in-out"}></div>
        <div
            style={{
                left: `${progressInPx - 8}px`,
            }}
            className={"absolute h-[13px] top-[-3.5px] bg-[#9FC046] w-1 z-1 transition-all duration-700 ease-in-out"}></div>
        <div style={{
            left: `${progressInPx - 4}px`,
        }} className={"absolute h-[13px] top-[-3.5px] left-1 bg-black w-1 z-1 transition-all duration-700 ease-in-out"}></div>

        {/*full width black bar*/}
        <div className={"absolute top-0 h-[5px] bg-[#FFFFFF33] w-full rounded-[10px]"}></div>

        <div className={"flex items-center justify-between pt-2.5"}>
            {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className={"transition-all duration-700 ease-in-out"}>
                    {i != 0 && ((products > i) ? <div className={"w-[20px] md:w-[30px]"}>
                            <CompleteIcon />
                        </div> : <span
                            className={`font-medium transition-all duration-700 ease-in-out 
                        ${products !== i ? 'opacity-20 text-sm md:text-base' : 'opacity-100 text-base md:text-xl'}`}>
                      {`Q${i}`}
                    </span>
                    )}
                </div>
            ))}
        </div>
    </div>
}

function TestReport() {
    const {quiz} = useTestReport();

    const [percentage, setPercentage] = useState(0);
    const rawScore = quiz.reduce((total, e: ITestReport) => {
        const impact = e?.options?.[e.selectedIndex]?.impact ?? 0;
        return e.selectedIndex !== -1 ? total + impact : total;
    }, 0);

    const testReport = Math.max(0, Math.min(100, rawScore));

    useEffect(() => {
        if (!testReport) {
            return
        }

        let current = 0;

        const stepUp = () => {
            if (current < 100) {
                current += 2;
                setPercentage(current);
                setTimeout(stepUp, 40); // speed of step up
            } else {
                stepDown()
            }
        };

        const stepDown = () => {
            if (current > testReport) {
                current -= 2;
                setPercentage(current);
                setTimeout(stepDown, 50); // slightly slower down for smoothness
            } else {
                setPercentage(testReport);
            }
        };

        stepUp();
    }, [testReport]);

    return (
        <div className="flex flex-col items-center justify-center bg-black text-white py-24">
            <div className="text-[36px] md:text-[46px] leading-8 md:leading-10 font-medium">
                You’re
            </div>
            <div
                style={{
                    background:
                        "linear-gradient(90deg, #3550E6 5.25%, #9F39E3 18.54%, #F439B2 34.32%, #EB4934 48.44%, #E87D2E 59.24%, #F2B62B 69.21%, #F3DC38 79.59%, #C4F353 91.64%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                className="text-[110px] md:text-[146px] font-extrabold transition-all duration-200"
            >
                {percentage}%
            </div>
            <div className="text-[36px] md:text-[46px] leading-8 md:leading-10 font-medium">
                Chances of GAY
            </div>
        </div>
    );
}

function TestQuiz() {
    const {quiz, answer, activeQuizIndex, setActiveQuizIndex} = useTestReport();
    const activeQuiz = quiz.find((e: ITestReport) => e.index === activeQuizIndex)
    const [buttonAction, setButtonAction] = useState({
        hover: -1,
        selected: -1
    })

    function btnActionDefault() {
        setButtonAction({
            hover: -1,
            selected: -1
        })
    }

    function onSelectOption(index: number) {
        if (!activeQuiz) {
            return
        }

        setButtonAction(e=> ({...e, selected: index}))
        setTimeout(()=> {
            answer({
                ...activeQuiz,
                selectedIndex: index
            })
            btnActionDefault()

            const lastActiveIndex = quiz.find((e: ITestReport) => e.selectedIndex === -1)
            setActiveQuizIndex((lastActiveIndex?.index || 0) + (lastActiveIndex?.index === activeQuiz.index ? 1 : 0))
        }, 1000)
    }

    useEffect(() => {
        setButtonAction(
            {
                hover: -1,
                selected: activeQuiz?.selectedIndex ?? -1
            }
        )
    }, [activeQuiz]);

    return <div className={"max-w-[850px] w-full mx-auto"}>
        {/**/}
        <ProgressBar />

        <div className={"py-[110px]"}>
            <div className={"flex pb-[46px]"}>
                <div onClick={() => {
                    setActiveQuizIndex(activeQuizIndex - 1)
                }} className={`w-4.5 transition-all duration-500 ease-in-out pt-0.5 md:pt-1 ${(activeQuiz?.index !== 1) ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}>
                    <ArrowIcon/>
                </div>
                <h2
                    className={"text-center text-lg md:text-[26px] font-medium leading-7 md:leading-10 flex-1"}>{activeQuiz?.question}</h2>
            </div>

            <ul className={"grid grid-cols-2 gap-[10px] md:gap-[50px]"}>
                {activeQuiz?.options.map((option: IOption, index: number) => {
                    const isOtherOptionClicked = buttonAction.selected === index;
                    const disableHover = (buttonAction.selected !== -1 && buttonAction.selected !== index)

                    return <li key={index}
                               onClick={() => onSelectOption(index)}
                               onMouseEnter={() => setButtonAction(e=> ({...e, hover: index}))}
                               onMouseLeave={() => setButtonAction(e=> ({...e, hover: -1}))}
                               className={`border border-[#565656] rounded-xl p-[1px] cursor-pointer ${((buttonAction.hover === index || isOtherOptionClicked) && !disableHover) ? "border border-transparent bg-[linear-gradient(90deg,_#464CD0_0%,_#8038BD_13.46%,_#AC3495_29.81%,_#D7463F_44.23%,_#E48C2F_57.21%,_#D7B438_72.6%,_#CFB63A_85.58%,_#B6BD41_100%)] bg-origin-border bg-clip-padding" : ""}`}>
                        <div className={"relative flex bg-black px-3 md:px-5 py-3 md:py-4 rounded-xl h-full"}>
                            <div className={"flex flex-1 items-center pr-[22px] text-sm md:text-[22px]"}>
                                {option.answer}
                            </div>
                            <div
                                className={`
                                            absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 
                                            transition-all duration-500 ease-in-out
                                            w-[20px] md:w-[22px]
                                            ${buttonAction.selected === index ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
                                        `}>
                                <OptionSelectionIcon />
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </div>
}

export default function QuizResult() {
    const router = useRouter()
    const {quiz} = useTestReport();

    const allAnswered = quiz.filter(e => e.selectedIndex !== -1).length === 10;

    return <div className={"flex flex-col min-h-[calc(100dvh_-_6px)] px-4 md:px-0"}>
        <header className={"flex justify-center pt-[24px] md:pt-[50px] pb-[56px]"}>
            <button className={"cursor-pointer"} onClick={() => {
                router.push('/')
            }}>
                <Image src={logo.src} alt={"logo"} height={100} width={100} />
            </button>
        </header>

        {allAnswered ? <TestReport /> : <TestQuiz />}
    </div>
}