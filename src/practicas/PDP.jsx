import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PDP(){
    let history = useHistory();
    const questions = [
		{
			questionText: '102÷6',
			answerOptions: [
				{ answerText: '15', isCorrect: false },
				{ answerText: '13', isCorrect: false },
				{ answerText: '17', isCorrect: true  },
				{ answerText: '16', isCorrect: false },
			],
		},
		{
			questionText: '120÷10',
			answerOptions: [
				{ answerText: '14', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '15', isCorrect: false },
				{ answerText: '13', isCorrect: false },
			],
		},
		{
			questionText: '645÷15',
			answerOptions: [
				{ answerText: '43', isCorrect: true },
				{ answerText: '45', isCorrect: false },
				{ answerText: '42', isCorrect: false },
				{ answerText: '40', isCorrect: false },
			],
		},
		{
			questionText: '360÷6',
			answerOptions: [
				{ answerText: '60', isCorrect: true },
				{ answerText: '70', isCorrect: false },
				{ answerText: '65', isCorrect: false },
				{ answerText: '75', isCorrect: false },
			],
		},
		{
			questionText: '245÷5',
			answerOptions: [
				{ answerText: '47', isCorrect: false },
				{ answerText: '45', isCorrect: false },
				{ answerText: '41', isCorrect: false },
				{ answerText: '49', isCorrect: true },
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
                     history.push("/LecDNP");
                 }         
             }>
                🠔atrás
            </button>
			<h1 className={styles.tituloP}>DIVISIÓN - NIVEL PLANTA</h1>
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
export default PDP;

