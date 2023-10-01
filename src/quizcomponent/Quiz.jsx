import React, { useState } from 'react';

import './QuizStyle.css';
import { Button } from 'react-bootstrap';

export default function Quiz() {
	const questions = [
		
		{
            questionText:"Have you ever been in therapy before?",
            answerOptions:[
                {answerText:"Yes",isCorrect:true},
                {answerText:"No",isCorrect:false},

            ]
        },
        {
            questionText:"What led you to consider therapy today?",
            answerOptions:[
                {answerText:"I've been feeling depressed",isCorrect:true},
                {answerText:"I feel anxious or overwhelmed",isCorrect:false},
                {answerText:"My mood is interfering with my job/school performance",isCorrect:false},
                {answerText:"I can't find purpose & meaning in my life",isCorrect:false},
                {answerText:"I am grieving",isCorrect:false},
                {answerText:"I need talk to through a specific challenge",isCorrect:false},
                {answerText:"I want to gain self confidence",isCorrect:false},
                {answerText:"I want to improve myself but I don't know where to start",isCorrect:false},
                {answerText:"Recommended to me (friend, family, doctor)",isCorrect:false},
                {answerText:"Just exploring",isCorrect:false},
                {answerText:"other",isCorrect:false},

            ]
        },
        {
            questionText:"How would you rate your current physical health?",
            answerOptions:[
                {answerText:"Good",isCorrect:true},
                {answerText:"Fair",isCorrect:false},
                {answerText:"Poor",isCorrect:false},

            ]
        },
        {
            questionText:"How would you rate your current eating habits?",
            answerOptions:[
                {answerText:"Good",isCorrect:true},
                {answerText:"Fair",isCorrect:false},
                {answerText:"Poor",isCorrect:false},

            ]
        },
        {
            questionText:"How would you rate your current sleeping habits?",
            answerOptions:[
                {answerText:"Good",isCorrect:true},
                {answerText:"Fair",isCorrect:false},
                {answerText:"Poor",isCorrect:false},

            ]
        },
        {
            questionText:"How would you rate your financial status?",
			answerOptions:[
                {answerText:"Good",isCorrect:true},
                {answerText:"Fair",isCorrect:false},
                {answerText:"Poor",isCorrect:false},
            ]
        },
        {
            questionText:"Are you currently experiencing overwhelming sadness, grief, or depression?",
            answerOptions:[
                {answerText:"Yes",isCorrect:true},
                {answerText:"No",isCorrect:false},

            ]
        },
        {
            questionText:"Little interest or pleasure in doing things?",
            answerOptions:[
                {answerText:"Not at all",isCorrect:true},
                {answerText:"Several days",isCorrect:false},
                {answerText:"More than half the day",isCorrect:false},
                {answerText:"Nearly every day",isCorrect:false},

            ]
        },
        {
            questionText:"Moving or speaking so slowly or the opposite being so fidgety or restless?",
            answerOptions:[
                {answerText:"Not at all",isCorrect:true},
                {answerText:"Several days",isCorrect:false},
                {answerText:"More than half the day",isCorrect:false},
                {answerText:"Nearly every day",isCorrect:false},
            ]
        },
        {
            questionText:"Trouble falling asleep, staying asleep or sleeping too much?",
            answerOptions:[
                {answerText:"Not at all",isCorrect:true},
                {answerText:"Several days",isCorrect:false},
                {answerText:"More than half the day",isCorrect:false},
                {answerText:"Nearly every day",isCorrect:false},
            ]
        },
        {
            questionText:"Feeling tired or having little energy?",
            answerOptions:[
                {answerText:"Not at all",isCorrect:true},
                {answerText:"Several days",isCorrect:false},
                {answerText:"More than half the day",isCorrect:false},
                {answerText:"Nearly every day",isCorrect:false},

            ]
        },
        {
            questionText:"Poor appetite or overeating?",
            answerOptions:[
                {answerText:"Not at all",isCorrect:true},
                {answerText:"Several days",isCorrect:false},
                {answerText:"More than half the day",isCorrect:false},
                {answerText:"Nearly every day",isCorrect:false},
            ]
        },
        {
            questionText:"Feeling bad about yourself?",
            answerOptions:[
                {answerText:"Not at all",isCorrect:true},
                {answerText:"Several days",isCorrect:false},
                {answerText:"More than half the day",isCorrect:false},
                {answerText:"Nearly every day",isCorrect:false},

            ]
        },
        {
            questionText:"Thoughts that you would be better off dead or of hurting yourself in some way?",
            answerOptions:[
                {answerText:"Not at all",isCorrect:true},
                {answerText:"Several days",isCorrect:false},
                {answerText:"More than half the day",isCorrect:false},
                {answerText:"Nearly every day",isCorrect:false},

            ]
        },
        {
            questionText:"How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
            answerOptions:[
                {answerText:"Not difficult at all",isCorrect:true},
                {answerText:"Somewhat difficult",isCorrect:false},
                {answerText:"Very difficult",isCorrect:false},
                {answerText:"Extremely difficult",isCorrect:false},

            ]
        },
        {
            questionText:"How often you drink alcohol?",
            answerOptions:[
                {answerText:"Never",isCorrect:true},
                {answerText:"Infrequently",isCorrect:false},
                {answerText:"Monthly",isCorrect:false},
                {answerText:"Weekly",isCorrect:false},
                {answerText:"Daily",isCorrect:false},

            ]
        },
        {
            questionText:"When was the last time you thought about suicide?",
            answerOptions:[
                {answerText:"Never",isCorrect:true},
                {answerText:"Over a year ago",isCorrect:false},
                {answerText:"Over 3 year ago",isCorrect:false},
                {answerText:"Over a months ago",isCorrect:false},
                {answerText:"Over 2 week ago",isCorrect:false},
                {answerText:"in the last 2 weeks",isCorrect:false},

            ]
        },
        {
            questionText:"How many times have you tried to commit suicide?",
            answerOptions:[
                {answerText:"Never",isCorrect:true},
                {answerText:"1 time",isCorrect:false},
                {answerText:"2 times",isCorrect:false},
                {answerText:"More than two times",isCorrect:false},

            ]
        },
	];
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const resetQuiz=()=>
	{
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
	}

	return (
        <div className='body' >
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You level is high.you must contact A counsellor and you can control yourself using the tretment in the treatment tab
					<>
					<button type='submit' onClick={resetQuiz}>Test Again</button>
					</>
                    <div>
					<Button  variant="primary" href="../pages/Councilling">Councilling</Button>
                    </div>
                    <div>
                    <Button variant="primary" href="../pages/Treatment">Treatment</Button>
					</div>
				</div>
			) 
			: (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </div>
	);
}
