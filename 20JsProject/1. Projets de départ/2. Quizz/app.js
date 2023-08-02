const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const questions = [
        {
          question: "Quel est le plus grand mammifère terrestre ?",
          choices: ["Éléphant", "Lion", "Girafe", "Rhinocéros"],
          correctAnswer: "Éléphant",
        },
        {
          question: "Quel est le symbole chimique de l'eau ?",
          choices: ["Ai", "H2O", "O2", "CO2"],
          correctAnswer: "H2O",
        },
        {
          question: "Quelle est la capitale de la France ?",
          choices: ["Londres", "Paris", "Berlin", "Rome"],
          correctAnswer: "Paris",
        },
        {
          question: "Qui a peint la Joconde ?",
          choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
          correctAnswer: "Leonardo da Vincoi",
        },
      ]
const container = document.querySelector('.containerQuestions')
      function allQuestion(){
          questions.forEach((e,i) => {
            divQuestion = document.createElement("div")
            divQuestion.innerHTML = `
            <h3> ${e.question}</h3>
            ${e.choices.map((choix)=>{
              return `
                <input type="checkbox" id="" name="" value="" >
                <label for="" >${choix}</label>
              `
            }).join(" ")
        }
            
            `
            container.appendChild(divQuestion);
        });      }
allQuestion();


// repondre a toutes les questions (try catch)
// si err
        // si toutes les reponse pas valider alors demander de finir
        // si tout valider , alors mettre en rouge  ou vert 
//mettre un total de bonne et  mauvaise reponse 