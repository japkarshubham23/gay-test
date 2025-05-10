"use client";
import {ReactNode, useState} from "react";
import MinusIcon from "@/app/icons/MinusIcon";

type FaqProps = {
    title: string;
    answer: string | ReactNode;
}

const faq: FaqProps[] = [
    {
        title: "I am Gay Quiz: Identify Your True Self with a Fun Quiz",
        answer: "In today’s world, self-discovery and self-acceptance are more important than ever. Sometimes you have questions or doubt on your sexual orientation and you may be curious to know who you are. No problem because we have a \"I am Gay Quiz\" which helps you know about yourself better. The questions in My gay Quiz are designed to be light-hearted, insightful, and give a result based on your answers. Your identity is safe and confidential."
    },
    {
        title: "What is an \"I am Gay Quiz?\"",
        answer: "An \"I am Gay Quiz\" is a fun and engaging way to explore your sexuality. We have made a set of questions that help you judge different feelings under different situations, experiences, and attractions. From questions about romantic preferences to emotional connections, the “Am i Gay” quiz helps you gain clarity with no one judging you."
    },
    {
        title: "Why Take a Gay Quiz?",
        answer: "During normal day to day life, we may observe different thought patterns for the opposite gender. Exploring your sexuality is a personal journey, and sometimes it can get very confusing. A gay quiz can be a great starting point for anyone who is not sure about one’s orientation. It’s not meant to label you with something but help you better understand yourself. Whether you’re a teenager figuring things out, an adult exploring your identity, or simply someone who wants to have fun, a gay quiz can offer insights and spark important conversations."
    },
    {
        title: "Things to Keep in Mind",
        answer: <ol type="1" className={"flex flex-col gap-1 list-inside list-decimal"}>
                <li><span className={"font-bold"}>No Quiz Defines You</span>: Remember, a quiz is just a tool. Though it helps understand you better. Still, it's you who has to identify yourself.</li>
                <li><span className={"font-bold"}>Stay Honest</span>: The more truthful your answers, the more meaningful the results.</li>
                <li><span className={"font-bold"}>Have Fun</span>: Quizzes are meant to be enjoyable, so take them with a light heart.</li>
        </ol>
    },
    {
        title: "Ready for Your Gay Quiz?",
        answer: <div>
            So, why waste time? Even if you are not confused, take the test! Just know yourself better. Even straight or bisexual folks take this test to know better about themselves. If you’re ready to explore, take a gay quiz and see where it leads you. Use it as a starting point to understand yourself better or just as a fun activity with friends. No matter what, remember that your identity is valid, and it’s okay to take your time discovering who you are.<br/><br/>Start your journey of self-discovery today with an engaging and supportive gay quiz!
        </div>
    }
];


export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(-1);

    return <div className={"max-w-[860px] m-auto py-[80px]"}>
            <h2 className={"text-center text-[36px] md:text-[40px] font-bold pb-[70px]"}>FAQ’s</h2>

            <ul className={"flex flex-col gap-5 md:gap-7 px-4 lg:px-0"}>
                {faq.map((faq: FaqProps, index: number) => {
                    const isActive = activeIndex === index;

                    return <li key={index}>
                        <div onClick={() => {
                            if (activeIndex === index) {
                                return setActiveIndex(-1);
                            }

                            setActiveIndex(index)
                        }} className={"grid grid-cols-[1fr_25px] justify-between pb-1.5 cursor-pointer"}>
                            <span className={"text-[16px] md:text-[22px] font-light leading-7 md:leading-10"}>{faq.title}</span>
                            <button type="button"
                                    aria-label={isActive ? 'Collapse section' : 'Expand section'}
                                    aria-expanded={isActive} className="flex justify-center mt-[5px] pt-[10px] relative">
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
                            <div className={"text-[#979797] text-[16px] md:text-[22px] font-light leading-[26px] md:leading-8"}>
                                {faq.answer}
                            </div>
                        </div>
                    </li>
                })}
            </ul>
    </div>
}