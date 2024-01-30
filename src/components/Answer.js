const Answer = ({answerText, index, onSelectedAnswer, currentAnswer, correctAnswer}) => {
    const letterMapping = ['A', 'B', 'C','D']
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer

    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "" ;
    const disabledAnswerClass = currentAnswer ? "disabled-answer" : "";
    return(
        <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledAnswerClass}`}
             onClick={() => onSelectedAnswer(answerText)}>
            <div className="answer-letter">{letterMapping[index]}</div>
            <div className="answer-text" >{answerText}</div>
        </div>
    )
}

export default Answer