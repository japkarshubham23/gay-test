import {TestReportProvider} from "@/app/components/providers/TestReportProvider";
import QuizResult from "../components/QuizResult";

export default function Page() {
    return <TestReportProvider>
        <QuizResult/>
    </TestReportProvider>
}