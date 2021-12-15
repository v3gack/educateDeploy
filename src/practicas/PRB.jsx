import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PRB(){
    let history = useHistory();
    const questions = [
		{
			questionText: '30-25',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '5', isCorrect: true },
				{ answerText: '4', isCorrect: false  },
				{ answerText: '1', isCorrect: false },
			],
		},
		{
			questionText: '17-8',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '9', isCorrect: true },
				{ answerText: '6', isCorrect: false },
				{ answerText: '5', isCorrect: false },
			],
		},
		{
			questionText: '84-24',
			answerOptions: [
				{ answerText: '60', isCorrect: true },
				{ answerText: '70', isCorrect: false },
				{ answerText: '24', isCorrect: false },
				{ answerText: '50', isCorrect: false },
			],
		},
		{
			questionText: '99-99',
			answerOptions: [
				{ answerText: '4', isCorrect: false },
				{ answerText: '0', isCorrect: true },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
			],
		},
		{
			questionText: '66-36',
			answerOptions: [
				{ answerText: '30', isCorrect: true },
				{ answerText: '40', isCorrect: false },
				{ answerText: '20', isCorrect: false },
				{ answerText: '10', isCorrect: false },
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
                     history.push("/LecRNB");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>RESTA - NIVEL BROTE</h1>
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
export default PRB;

