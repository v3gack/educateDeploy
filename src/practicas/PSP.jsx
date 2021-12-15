import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PSP(){
    let history = useHistory();
    const questions = [
		{
			questionText: '100+34',
			answerOptions: [
				{ answerText: '124', isCorrect: false },
				{ answerText: '133', isCorrect: false },
				{ answerText: '134', isCorrect: true  },
				{ answerText: '144', isCorrect: false },
			],
		},
		{
			questionText: '125+100',
			answerOptions: [
				{ answerText: '225', isCorrect: true },
				{ answerText: '226', isCorrect: false },
				{ answerText: '325', isCorrect: false },
				{ answerText: '325', isCorrect: false },
			],
		},
		{
			questionText: '176+99',
			answerOptions: [
				{ answerText: '256', isCorrect: false },
				{ answerText: '265', isCorrect: false },
				{ answerText: '275', isCorrect: true },
				{ answerText: '245', isCorrect: false },
			],
		},
		{
			questionText: '350+350',
			answerOptions: [
				{ answerText: '800', isCorrect: false },
				{ answerText: '750', isCorrect: false },
				{ answerText: '600', isCorrect: false },
				{ answerText: '700', isCorrect: true },
			],
		},
		{
			questionText: '274+21',
			answerOptions: [
				{ answerText: '289', isCorrect: false },
				{ answerText: '295', isCorrect: false },
				{ answerText: '285', isCorrect: false },
				{ answerText: '296', isCorrect: true },
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
                     history.push("/LecSNP");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>SUMA - NIVEL PLANTA</h1>
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
export default PSP;

