/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: [
      "1967",
      "1974", 
      "1962", 
      "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: [
      "Zelda", 
      "Ganon", 
      "Tom", 
      "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: [
      "Apollo 9", 
      "Mercury 1", 
      "Apollo 13", 
      "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/

let question = document.querySelector("#question");
let answers = document.querySelector("#answers");
let containerScore = document.querySelector("#score");
let score = 0;
let indexQuestion = 0;
let bonneRepIndex = questions[indexQuestion].correctAnswerIndex;
let bonneReponse = questions[indexQuestion].answers[bonneRepIndex]



document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------affichage du quizz-----------------------------------------
  genereQuestion();   
  function genereQuestion() {
    question.innerText = questions[indexQuestion].question;

     bonneRepIndex = questions[indexQuestion].correctAnswerIndex;
     bonneReponse = questions[indexQuestion].answers[bonneRepIndex]

    for(let i = 0; i < questions[indexQuestion].answers.length; i++){
      let reponse = document.createElement("li");
      reponse.classList.add("answer");
      reponse.innerText = questions[indexQuestion].answers[i];
      answers.appendChild(reponse);
    }
    
  };

      // ------------------------------------démarrage du quizz-----------------------------------------
      answers.addEventListener("click", (event) => {       
      // console.log(event.target.innerText);
      // console.log("bonne rep ", questions[indexQuestion].answers[bonneRepIndex]);
       
       function toto() { 
        if (event.target.innerText == bonneReponse ) { 
        indexQuestion ++;
        score ++;
        containerScore.innerText = score;
        answers.innerText = ""; //efface precedente reponse   
        genereQuestion();  
             
        }else{
          indexQuestion ++;
          answers.innerText = ""; //efface precedente reponse
          
        genereQuestion(); 
        }
        } 

        // -----------------------------------fin du quizz-----------------------------------------
        
        if (indexQuestion < questions.length ){
          question.innerText = `Merci d'avoir répondu :) votre score est de ${score} sur 4`;
          toto();
        }else{
          
          containerScore.innerText = score;
          answers.innerText = "";
        }
 
    })
});

//|| 