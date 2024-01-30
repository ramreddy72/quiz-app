export const ShuffeledAnswers = (question) => {

    const unShuffeledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ]

    return unShuffeledAnswers.map((unShuffeledAnswer) => ({
        sort: Math.random(),
        value: unShuffeledAnswer
    })).sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}