import {useReducer, createContext} from "react"
import questions from "../data"
import { ShuffeledAnswers } from "../helpers";

const initialState = {
    currentQuestionIndex: 0,
    questions,
    showResults: false,
    answers: ShuffeledAnswers(questions[0]),
    currentAnswer: '',
    correctAnswersCount: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case "NEXT_QUESTION" : 
            const showResults = state.currentQuestionIndex === state.questions.length -1 ;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            const answers = showResults ? [] : ShuffeledAnswers(state.questions[currentQuestionIndex])
            return {...state, currentQuestionIndex, showResults, answers, currentAnswer: ""}
        case "RESTART" : 
            return initialState;
        case "SELECT_ANSWER" :
            const correctAnswersCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ?
                        state.correctAnswersCount + 1 :
                        state.correctAnswersCount;
            return {...state, currentAnswer: action.payload, correctAnswersCount}
        default : 
            return state;
    }
    
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState)
    console.log("state" , value)
    return <QuizContext.Provider value={value} >{children} </QuizContext.Provider>
}