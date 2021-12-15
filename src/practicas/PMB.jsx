import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PMB(){
    let history = useHistory();
    const questions = [
		{
			questionText: '3x10',
			answerOptions: [
				{ answerText: '40', isCorrect: false },
				{ answerText: '20', isCorrect: false },
				{ answerText: '30', isCorrect: true  },
				{ answerText: '50', isCorrect: false },
			],
		},
		{
			questionText: '12x2',
			answerOptions: [
				{ answerText: '24', isCorrect: true },
				{ answerText: '25', isCorrect: false },
				{ answerText: '34', isCorrect: false },
				{ answerText: '14', isCorrect: false },
			],
		},
		{
			questionText: '10x5',
			answerOptions: [
				{ answerText: '50', isCorrect: true },
				{ answerText: '60', isCorrect: false },
				{ answerText: '55', isCorrect: false },
				{ answerText: '65', isCorrect: false },
			],
		},
		{
			questionText: '3x17',
			answerOptions: [
				{ answerText: '51', isCorrect: true },
				{ answerText: '41', isCorrect: false },
				{ answerText: '56', isCorrect: false },
				{ answerText: '46', isCorrect: true },
			],
		},
		{
			questionText: '21x4',
			answerOptions: [
				{ answerText: '64', isCorrect: false },
				{ answerText: '74', isCorrect: false },
				{ answerText: '84', isCorrect: true },
				{ answerText: '94', isCorrect: true },
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
                     history.push("/LecMNB");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>MULTIPLICACIÓN - NIVEL BROTE</h1>
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
export default PMB;

