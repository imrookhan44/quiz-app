import React, { useState } from 'react'
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(false)
    const [scoreCount, setsCoreCount] = useState(0)
    const questions = [
        {
            questionText: 'what is the capital of pakistan?',
            answerOption: [
                { answerText: 'Islamabad', isCorrect: true },
                { answerText: 'Karachi', isCorrect: false },
                { answerText: 'Lahore', isCorrect: false },
                { answerText: 'Faisalabad', isCorrect: false },

            ]
        },
        {
            questionText: 'which is the biggest city of pakistan?',
            answerOption: [
                { answerText: 'Islamabad', isCorrect: false },
                { answerText: 'Karachi', isCorrect: true },
                { answerText: 'Lahore', isCorrect: false },
                { answerText: 'Faisalabad', isCorrect: false },

            ]
        },
        {
            questionText: 'what is the populated of pakistan?',
            answerOption: [
                { answerText: 'Islamabad', isCorrect: false },
                { answerText: 'Karachi', isCorrect: true },
                { answerText: 'Lahore', isCorrect: false },
                { answerText: 'Faisalabad', isCorrect: false },

            ]
        },
        {
            questionText: 'where is the thumb of Quaid-e-Azam?',
            answerOption: [
                { answerText: 'Islamabad', isCorrect: false },
                { answerText: 'Karachi', isCorrect: true },
                { answerText: 'Lahore', isCorrect: false },
                { answerText: 'Faisalabad', isCorrect: false },

            ]
        },
        {
            questionText: 'what is the national animal of pakistan?',
            answerOption: [
                { answerText: 'Lion', isCorrect: false },
                { answerText: 'Dog', isCorrect: false },
                { answerText: 'Markhor', isCorrect: true },
                { answerText: 'Goat', isCorrect: false },

            ]
        },

    ]
    const handleClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1;
        if (isCorrect == true) {
            setsCoreCount(scoreCount + 1)

        }
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);

        } else {
            setScore(true)
        }
    }
    return (
        <div>

            <nav style={{ width: "100vw", height: "60px", backgroundColor: "#4e034a", padding: "10px" }}>
                <div id="heading">
                    <span>

                    Quiz App
                    </span>
                    <span>
                        Design by Imran khan
                        
                </span>
                </div>
                <h1  >Your Total score is   {
                    scoreCount
                }</h1>
            </nav>

            <div className="AppBackground">
                {score ? <div className="scoreBoard"> <h1>You Have {scoreCount} out 0f 5 </h1> </div> :
                    <div className="MainApp">
                        <div className="QuestionSection">
                            <h1 style={{ fontSize: "35px" }}>Question {currentQuestion + 1}
                                <span style={{ fontSize: "18px" }}>
                                    /{questions.length}
                                </span>

                            </h1>
                            <h2>
                                {
                                    questions[currentQuestion].questionText
                                }
                            </h2>
                        </div>
                        <div className="AnswerSection">
                            {/* {
                                questions[currentQuestion].answerOption.map(
                                    answerOption, id =>
                                        <div key={id}>

                                        <button>
                                            {answerOption.answerText}
                                        </button>
                                        </div>
                                )

                            } */}

                            {questions[currentQuestion].answerOption.map(answerOption =>
                                <div key={answerOption.answerText}>
                                    <button onClick={() => handleClick(answerOption.isCorrect)}>
                                        {answerOption.answerText}
                                    </button>

                                </div>
                            )}

                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default Quiz
