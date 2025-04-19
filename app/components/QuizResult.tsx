"use client";

import Logo from "@/app/images/Logo";
import {useEffect, useRef, useState } from "react";
import CompleteIcon from "@/app/icons/CompleteIcon";
import ArrowIcon from "../icons/ArrowIcon";
import {IOption, ITestReport, useTestReport} from "@/app/components/providers/TestReportProvider";
import OptionSelectionIcon from "@/app/icons/OptionSelectionIcon";

function ProgressBar() {
    const {quiz, answer} = useTestReport();

    const [widthElement, setWidthElement] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const products = quiz.filter(e=> e.selectedIndex !== -1).length
    const progressInPx: number = ((widthElement / 10) * (products))

    useEffect(() => {
        if (ref.current) {
            setWidthElement(ref.current.offsetWidth);
        }
    }, [ref])

    return  <div ref={ref}
                 className={"relative pb-[110px]"}>
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
                    {i != 0 && ((products > i) ? <CompleteIcon /> : <span style={{
                        opacity: (products != i) ? 0.2 : 1,
                        fontSize: (products != i) ? "16px" : "20px"
                    }} className={`font-medium transition-all duration-700 ease-in-out`}>{`Q${i}`}</span>)}
                </div>
            ))}
        </div>
    </div>
}
export default function QuizResult() {
    const {quiz, answer} = useTestReport();
    const activeQuiz = quiz.find((e: ITestReport) => e.selectedIndex === -1)
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
        }, 1000)
    }


    return <div className={"min-h-[calc(100dvh_-_6px)]"}>
        <header className={"flex justify-center pt-[24px] md:pt-[50px] pb-[56px]"}>
            <Logo />
        </header>

        <div className={"max-w-[850px] w-full m-auto"}>
            {/**/}
            <ProgressBar />

            <div>
                <div className={"flex pb-[46px]"}>
                    <div>
                        <ArrowIcon/>
                    </div>
                    <div
                        className={"text-center text-[26px] font-medium leading-10 flex-1"}>{activeQuiz?.question}</div>
                </div>

                <ul className={"grid grid-cols-2 gap-[50px]"}>
                    {activeQuiz?.options.map((option: IOption, index: number) => {
                        const isOtherOptionClicked = buttonAction.selected === index;
                        const disableHover = (buttonAction.selected !== -1 && buttonAction.selected !== index)

                        return <li key={index}
                                   onClick={() => onSelectOption(index)}
                                   onMouseEnter={() => setButtonAction(e=> ({...e, hover: index}))}
                                   onMouseLeave={() => setButtonAction(e=> ({...e, hover: -1}))}
                                   className={`border border-[#565656] h-fit rounded-xl p-[1px] cursor-pointer ${((buttonAction.hover === index || isOtherOptionClicked) && !disableHover) ? "border border-transparent bg-[linear-gradient(90deg,_#464CD0_0%,_#8038BD_13.46%,_#AC3495_29.81%,_#D7463F_44.23%,_#E48C2F_57.21%,_#D7B438_72.6%,_#CFB63A_85.58%,_#B6BD41_100%)] bg-origin-border bg-clip-padding" : ""}`}>
                            <div className={"relative flex bg-black px-5 py-4 rounded-xl"}>
                                <div className={"flex-1 pr-[22px]"}>
                                    {option.answer}
                                </div>
                                <div
                                    className={`
                                            absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 
                                            transition-all duration-500 ease-in-out
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
    </div>
}