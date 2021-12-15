import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PSA(){
    let history = useHistory();
    const questions = [
		{
			questionText: '1103+27',
			answerOptions: [
				{ answerText: '1130', isCorrect: true },
				{ answerText: '1134', isCorrect: false },
				{ answerText: '1213', isCorrect: false  },
				{ answerText: '1135', isCorrect: false },
			],
		},
		{
			questionText: '950+900',
			answerOptions: [
				{ answerText: '1800', isCorrect: false },
				{ answerText: '1850', isCorrect: true },
				{ answerText: '1950', isCorrect: false },
				{ answerText: '1910', isCorrect: false },
			],
		},
		{
			questionText: '3500+275',
			answerOptions: [
				{ answerText: '3775', isCorrect: true },
				{ answerText: '3700', isCorrect: false },
				{ answerText: '3875', isCorrect: false },
				{ answerText: '3975', isCorrect: false },
			],
		},
		{
			questionText: '400+4355',
			answerOptions: [
				{ answerText: '4765', isCorrect: false },
				{ answerText: '4355', isCorrect: false },
				{ answerText: '4885', isCorrect: false },
				{ answerText: '4755', isCorrect: true },
			],
		},
		{
			questionText: '205+3335',
			answerOptions: [
				{ answerText: '3545', isCorrect: false },
				{ answerText: '3555', isCorrect: false },
				{ answerText: '3550', isCorrect: false },
				{ answerText: '3540', isCorrect: true },
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
                     history.push("/LecSNA");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>SUMA - NIVEL ÁRBOL</h1>
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
export default PSA;

