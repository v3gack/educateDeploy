import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PRP(){
    let history = useHistory();
    const questions = [
		{
			questionText: '333-45',
			answerOptions: [
				{ answerText: '288', isCorrect: true },
				{ answerText: '298', isCorrect: false },
				{ answerText: '276', isCorrect: true  },
				{ answerText: '308', isCorrect: false },
			],
		},
		{
			questionText: '220-139',
			answerOptions: [
				{ answerText: '51', isCorrect: false },
				{ answerText: '81', isCorrect: true },
				{ answerText: '66', isCorrect: false },
				{ answerText: '78', isCorrect: false },
			],
		},
		{
			questionText: '645-27',
			answerOptions: [
				{ answerText: '621', isCorrect: false },
				{ answerText: '623', isCorrect: false },
				{ answerText: '618', isCorrect: true },
				{ answerText: '619', isCorrect: false },
			],
		},
		{
			questionText: '723-456',
			answerOptions: [
				{ answerText: '286', isCorrect: false },
				{ answerText: '139', isCorrect: false },
				{ answerText: '366', isCorrect: false },
				{ answerText: '267', isCorrect: true },
			],
		},
		{
			questionText: '936-372',
			answerOptions: [
				{ answerText: '564', isCorrect: true },
				{ answerText: '555', isCorrect: false },
				{ answerText: '523', isCorrect: false },
				{ answerText: '467', isCorrect: false },
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
                     history.push("/LecRNP");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>RESTA - NIVEL PLANTA</h1>
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
export default PRP;

