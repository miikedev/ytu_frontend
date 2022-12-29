import { AnswerEight } from "../components/answerElement/AnswerEight"
import { AnswerFive } from "../components/answerElement/AnswerFive"
import { AnswerFour } from "../components/answerElement/AnswerFour"
import { AnswerOne } from "../components/answerElement/AnswerOne"
import { AnswerSeven } from "../components/answerElement/AnswerSeven"
import { AnswerSix } from "../components/answerElement/AnswerSix"
import { AnswerThree } from "../components/answerElement/AnswerThree"
import { AnswerTwo } from "../components/answerElement/AnswerTwo"
export const accordionData = [
    {
        id: 1,
        question: "What is YTUSU?",
        answerElement: <AnswerOne/> 
    },
    {
        id: 2,
        question: "How can I contact YTUSU?",
        answerElement: <AnswerTwo /> 
    },
    {
        id: 3,
        question: "What can I contact YTUSU for?",
        answerElement: <AnswerThree />
    },
    {
        id: 4,
        question: "How can I contact University Council - YTU?",
        answerElement: <AnswerFour />
    },
    {
        id: 5,
        question: "What are the names of majors in YTU?",
        answerElement: <AnswerFive />
    },
    {
        id: 6,
        question: "When was YTUSU founded?",
        answerElement: <AnswerSix />
    },
    {
        id: 7,
        question: "Where is YTUSU office situated?",
        answerElement: <AnswerSeven />
    },
    {
        id: 8,
        question: "Are there any student clubs in YTU?",
        answerElement: <AnswerEight />
    }
]