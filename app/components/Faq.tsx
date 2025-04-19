"use client";

import { useState } from "react";

type FaqProps = {
    title: string;
    answer: string;
}

const faq: FaqProps[] = [
    {
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },{
        title: "How gays are different from men?",
        answer: "Lorem ipsum dolor sit amet consectetur. Sollicitudin semper porttitor interdum convallis morbi consectetur risus ornare. Erat sagittis odio quis phasellus mattis nibh et semper elit. Purus consectetur rutrum a leo et pellentesque. Neque gravida donec tincidunt arcu. Id hac sagittis eget viverra. Quis semper at in vel feugiat. Bibendum.",
    },
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(-1);

    return <div className={"max-w-[860px] m-auto py-[80px]"}>
            <h2 className={"text-center text-[40px] font-bold pb-[70px]"}>FAQ’s</h2>

            <ul>
                {faq.map((faq: FaqProps, index: number) => {
                    const isActive = activeIndex === index;

                    return <li key={index}>
                        <div onClick={() => {
                            if (activeIndex === index) {
                                setActiveIndex(-1);
                            }

                            setActiveIndex(index)
                        }} className={"pb-1.5"}>
                            <span className={"text-[22px] font-light leading-10"}>{faq.title}</span>
                            <button className="text-[28px] font-bold transition-transform duration-300">
                              {isActive ? "–" : "+"}
                            </button>
                        </div>
                        {/*<div className={"text-[#979797] text-[22px] font-light leading-8"}>*/}
                        {/*    {faq.answer}*/}
                        {/*</div>*/}
                        <div
                            className="overflow-hidden transition-all duration-1000 ease-in-out"
                            style={{ height: isActive ? "auto" : "0px" }}>
                            <p  className={"text-[#979797] text-[22px] font-light leading-8"}>
                                {faq.answer}
                            </p>
                        </div>
                    </li>
                })}
            </ul>
    </div>
}