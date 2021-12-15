import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PRA(){
    let history = useHistory();
    const questions = [
		{
			questionText: '2034-1530',
			answerOptions: [
				{ answerText: '504', isCorrect: true },
				{ answerText: '404', isCorrect: false },
				{ answerText: '634', isCorrect: false  },
				{ answerText: '544', isCorrect: false },
			],
		},
		{
			questionText: '3829-245',
			answerOptions: [
				{ answerText: '3564', isCorrect: false },
				{ answerText: '3584', isCorrect: true },
				{ answerText: '3892', isCorrect: false },
				{ answerText: '3664', isCorrect: false },
			],
		},
		{
			questionText: '1525-75',
			answerOptions: [
				{ answerText: '1450', isCorrect: true },
				{ answerText: '1445', isCorrect: false },
				{ answerText: '1435', isCorrect: false },
				{ answerText: '1425', isCorrect: false },
			],
		},
		{
			questionText: '6329-268',
			answerOptions: [
				{ answerText: '6031', isCorrect: false },
				{ answerText: '6131', isCorrect: false },
				{ answerText: '6310', isCorrect: false },
				{ answerText: '6061', isCorrect: true },
			],
		},
		{
			questionText: '9328-6421',
			answerOptions: [
				{ answerText: '2907', isCorrect: true },
				{ answerText: '2387', isCorrect: false },
				{ answerText: '2807', isCorrect: false },
				{ answerText: '2183', isCorrect: false },
			],
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
    return  (
		
        <div className = {styles.ini}>
		
			<button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecRNA");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>RESTA - NIVEL ÁRBOL</h1>
        <div className={styles.ap}>
			{showScore ? (
				<div className={styles.scoresection}>
					<p className={styles.respuesta}>Tu puntuacion es:</p>
					<p className={styles.respuesta}>{score} sobre {questions.length}</p>
				</div>
			) : (
				<>
					<div className={styles.questionsection}>
						<div className={styles.questioncount}>
							<h1 className={styles.titulo}>Pregunta {currentQuestion + 1}/{questions.length}</h1>	
						</div>
						<div className={styles.questiontext}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answersection}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className = {styles.bt} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                      
				</>
			)}
		</div>
        </div>
    );
    
}
export default PRA;

