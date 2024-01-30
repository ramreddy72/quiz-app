import { useContext} from "react"
import { QuizContext } from "../contexts/quiz"
import Question from "./Question"


const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    console.log("quizState", quizState)
   
    return (
    <div className="quiz">
        {quizState.showResults && (
            <div className="results"> 
                <div className="congratulations">Congratulations</div>
                <div className="results-info">
                    <div>you have completed the quiz.</div>
                    <div>you've got {quizState.correctAnswersCount} of {quizState.questions.length}</div>    
                </div>.
                <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>
            </div>
        )}
        {!quizState.showResults && (
            <div>
                <div className="score"> question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                <Question />

                <div className="next-button" onClick={() => dispatch({type: "NEXT_QUESTION"})} > Next question</div>
            </div>
        )}
    </div>
    )
}

export default Quiz