"use client";
import { useState } from "react";
import MinusIcon from "@/app/icons/MinusIcon";

type FaqProps = {
    title: string;
    answer: string;
}

const faq: FaqProps[] = [
    {
        title: "What is the purpose of this Gay Test?",
        answer: "This quiz is designed to help you reflect on your attractions and identity, offering insight rather than a clinical diagnosis."
    },
    {
        title: "How accurate is the Gay Test at reflecting my feelings?",
        answer: "It’s a self‑guided tool based on common patterns of attraction—helpful for reflection but not definitive."
    },
    {
        title: "Can taking this test influence my orientation?",
        answer: "No. The questions are neutral prompts and won’t change your natural feelings or identity."
    },
    {
        title: "Is it normal to be uncertain about my feelings before taking the test?",
        answer: "Absolutely. Many people aren’t sure where they stand until they’ve given it some thought."
    },
    {
        title: "How should I interpret my test results?",
        answer: "Use the outcome as a conversation starter with yourself or others—think of it as a guide, not a label."
    },
    {
        title: "How long does it take to complete the Gay Test?",
        answer: "Most users finish in about five minutes."
    },
    {
        title: "Are my responses and results kept private?",
        answer: "Yes. We do not store any personal data or link your answers back to you."
    },
    {
        title: "Can minors take this test, and is parental consent required?",
        answer: "Anyone can try it, but if you’re under 18 check with a guardian or counselor for support."
    },
    {
        title: "What if my results don’t match how I feel?",
        answer: "Trust your own sense of self—results are only one perspective and may not capture everything."
    },
    {
        title: "Where can I find support or resources after taking the test?",
        answer: "Look for local LGBTQ+ centers, online forums, or helplines to connect with understanding communities."
    }
];


export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(-1);

    return <div className={"max-w-[860px] m-auto py-[80px]"}>
            <h2 className={"text-center text-[36px] md:text-[40px] font-bold pb-[70px]"}>FAQ’s</h2>

            <ul className={"flex flex-col gap-5 md:gap-7 px-4 md:px-0"}>
                {faq.map((faq: FaqProps, index: number) => {
                    const isActive = activeIndex === index;

                    return <li key={index}>
                        <div onClick={() => {
                            if (activeIndex === index) {
                                return setActiveIndex(-1);
                            }

                            setActiveIndex(index)
                        }} className={"grid grid-cols-[1fr_25px] justify-between pb-1.5"}>
                            <span className={"text-[16px] md:text-[22px] font-light leading-7 md:leading-10"}>{faq.title}</span>
                            <button className="flex justify-center mt-[5px] pt-[10px] relative">
                                <div className={`absolute transition-transform duration-300 ${!isActive ? 'rotate-90' : ''}`}>
                                    <MinusIcon />
                                </div>
                                <div className={"absolute"}>
                                    <MinusIcon />
                                </div>
                            </button>
                        </div>
                        <div
                            className="overflow-hidden transition-all duration-1000 ease-in-out"
                            style={{ height: isActive ? "auto" : "0px" }}>
                            <p className={"text-[#979797] text-[16px] md:text-[22px] font-light leading-[26px] md:leading-8"}>
                                {faq.answer}
                            </p>
                        </div>
                    </li>
                })}
            </ul>
    </div>
}