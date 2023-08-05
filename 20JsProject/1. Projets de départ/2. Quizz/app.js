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
const monForm = document.getElementById('monForm')
const container = document.querySelector('.containerQuestions')

function affichage(){
    questions.forEach((e,i) => {            
      divQuestion = document.createElement("div")
      divQuestion.innerHTML = `
      <div id="question${i}">
      <h3> ${e.question}</h3>
      ${e.choices.map((choix,choixi)=>{
        const pp = document.querySelectorAll(`input[name='${choix}']`)
        // console.log(choix,choixi)
        return `
          <input type="radio" id="${i}" name="${i}" value="${choix}" >
          <label for="${i}" >${choix}</label> 
          `
        }).join(" ")}
        </div>
      `
    container.appendChild(divQuestion);
  });
}

function valideName (str){
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

monForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const casesCoches = document.querySelectorAll('input:checked');
  // if(casesCoches.length < questions.length){
  //   console.log('les 4 ne se pas cocher')
  // }else{

    //verifier que le name  === avec la question
    casesCoches.forEach((input)=>{
      console.log(input.parentNode)
      console.log("la question ",questions[input.id].question)
      console.log("input value ",input.value)
      console.log("correct reponse ",questions[input.id].correctAnswer)
      
    if(input.value == questions[input.id].correctAnswer ){
      input.parentNode.classList.add("valid")
      input.parentNode.classList.remove("err")
      
      console.log("bonne reponse");
      
    }else{
      input.parentNode.classList.remove("valid")
      input.parentNode.classList.add("err")
    }
    })
  // }
})

affichage()

// function
// creaction du quizz
//  si validation
// selectionner tout les input checked et si 

// repondre a toutes les questions (try catch)
// si err
        // si toutes les reponse pas valider alors demander de finir
        // si tout valider , alors mettre en rouge  ou vert 
//mettre un total de bonne et  mauvaise reponse 