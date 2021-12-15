import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PSS(){
    let history = useHistory();
    const questions = [
		{
			questionText: '20+8',
			answerOptions: [
				{ answerText: '28', isCorrect: true },
				{ answerText: '21', isCorrect: false },
				{ answerText: '26', isCorrect: false  },
				{ answerText: '27', isCorrect: false },
			],
		},
		{
			questionText: '13+8',
			answerOptions: [
				{ answerText: '19', isCorrect: false },
				{ answerText: '22', isCorrect: false },
				{ answerText: '17', isCorrect: false },
				{ answerText: '21', isCorrect: true },
			],
		},
		{
			questionText: '36+49',
			answerOptions: [
				{ answerText: '85', isCorrect: true },
				{ answerText: '84', isCorrect: false },
				{ answerText: '86', isCorrect: false },
				{ answerText: '79', isCorrect: false },
			],
		},
		{
			questionText: '34+42',
			answerOptions: [
				{ answerText: '71', isCorrect: false },
				{ answerText: '76', isCorrect: true },
				{ answerText: '81', isCorrect: false },
				{ answerText: '79', isCorrect: true },
			],
		},
		{
			questionText: '45+45',
			answerOptions: [
				{ answerText: '95', isCorrect: false },
				{ answerText: '92', isCorrect: false },
				{ answerText: '89', isCorrect: false },
				{ answerText: '90', isCorrect: true },
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
                     history.push("/suma");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>SUMA - NIVEL SEMILLA</h1>
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
export default PSS;

