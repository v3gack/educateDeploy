import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PMA(){
    let history = useHistory();
	const questions = [
		{
			questionText: '2142x5',
			answerOptions: [
				{ answerText: '10.710', isCorrect: true },
				{ answerText: '10.720', isCorrect: false },
				{ answerText: '11.720', isCorrect: false  },
				{ answerText: '11.710', isCorrect: false },
			],
		},
		{
			questionText: '3x4738',
			answerOptions: [
				{ answerText: '14.730', isCorrect: false },
				{ answerText: '14.214', isCorrect: true },
				{ answerText: '14.720', isCorrect: false },
				{ answerText: '15.620', isCorrect: false },
			],
		},
		{
			questionText: '1000x5',
			answerOptions: [
				{ answerText: '5000', isCorrect: true },
				{ answerText: '4000', isCorrect: false },
				{ answerText: '5500', isCorrect: false },
				{ answerText: '5050', isCorrect: false },
			],
		},
		{
			questionText: '1543x2',
			answerOptions: [
				{ answerText: '3.086', isCorrect: true },
				{ answerText: '3.087', isCorrect: false },
				{ answerText: '3.807', isCorrect: false },
				{ answerText: '3.806', isCorrect: false },
			],
		},
		{
			questionText: '3456x2',
			answerOptions: [
				{ answerText: '6.912', isCorrect: false },
				{ answerText: '6.821', isCorrect: false },
				{ answerText: '6.812', isCorrect: false },
				{ answerText: '7.012', isCorrect: true },
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
                     history.push("/LecMNA");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>MULTIPLICACIÓN- NIVEL ÁRBOL</h1>
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
export default PMA;

