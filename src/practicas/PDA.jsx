import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PDA(){
    let history = useHistory();
    const questions = [
		{
			questionText: '2145÷5',
			answerOptions: [
				{ answerText: '429', isCorrect: true },
				{ answerText: '426', isCorrect: false },
				{ answerText: '420', isCorrect: false  },
				{ answerText: '430', isCorrect: false },
			],
		},
		{
			questionText: '3060÷612',
			answerOptions: [
				{ answerText: '4', isCorrect: false },
				{ answerText: '5', isCorrect: true },
				{ answerText: '2', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
			questionText: '1000÷5',
			answerOptions: [
				{ answerText: '200', isCorrect: true },
				{ answerText: '120', isCorrect: false },
				{ answerText: '20', isCorrect: false },
				{ answerText: '40', isCorrect: false },
			],
		},
		{
			questionText: '7896÷14',
			answerOptions: [
				{ answerText: '566', isCorrect: false },
				{ answerText: '564', isCorrect: true },
				{ answerText: '567', isCorrect: false },
				{ answerText: '569', isCorrect: false },
			],
		},
		{
			questionText: '1088÷272',
			answerOptions: [
				{ answerText: '4', isCorrect: true },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '5', isCorrect: false },
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
                     history.push("/LecDNA");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>DIVISIÓN - NIVEL ÁRBOL</h1>
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
export default PDA;

