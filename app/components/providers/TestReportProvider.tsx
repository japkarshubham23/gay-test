'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import testQuestions from "../testQuestions.json";

export interface IOption { answer: string, impact: number }
export interface ITestReport {
    index: number;
    question: string;
    options: IOption[];
    selectedIndex: number;
}

interface TestReportContextType {
    quiz: ITestReport[];
    answer: (report: ITestReport) => void;
    clearAnswer: () => void;
    activeQuizIndex: number;
    setActiveQuizIndex: (index: number) => void;
}

const TestReportContext = createContext<TestReportContextType | undefined>(undefined);

interface TestReportProviderProps {
    children: ReactNode;
}

export const TestReportProvider: React.FC<TestReportProviderProps> = ({ children }) => {
    const [quiz, setQuiz] = useState<ITestReport[]>(testQuestions);
    const [activeQuizIndex, setActiveQuizIndex] = useState<number>(1);

    const answer = (report: ITestReport) => {
        setQuiz((prev:ITestReport[]): ITestReport[] => {
            return prev.map((e: ITestReport)=> {
                if (e.index === report.index) {
                    return report
                }
                return e;
            })
        });
    };

    const clearAnswer = () => {
        setQuiz([]);
    };

    return (
        <TestReportContext.Provider value={{ quiz, answer, clearAnswer, activeQuizIndex, setActiveQuizIndex }}>
            {children}
        </TestReportContext.Provider>
    );
};

export const useTestReport = (): TestReportContextType => {
    const context = useContext(TestReportContext);
    if (!context) {
        throw new Error('useTestReport must be used within a ITestReport');
    }
    return context;
};
