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
          correctAnswer: "Leonardo da Vinci",
        },
      ]
const monForm = document.getElementById('monForm')
const container = document.querySelector('.containerQuestions')

function affichage(){
    questions.forEach((e,i) => {            
      divQuestion = document.createElement("div")
      divQuestion.innerHTML = `
      <div id="question${i}" class="card">
      <h3> ${e.question}</h3>
      ${e.choices.map((choix,choixi)=>{
        const pp = document.querySelectorAll(`input[name='${choix}']`)
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


monForm.addEventListener("submit",(e)=>{
  let score = 0;
  e.preventDefault()
  const casesCoches = document.querySelectorAll('input:checked');
  if(casesCoches.length < questions.length){
    container.classList.add("errsimple")
  }else{
    container.classList.remove("errsimple")
    casesCoches.forEach((input)=>{      
      if(input.value == questions[input.id].correctAnswer ){
        score++
        input.parentNode.classList.add("valid")
        input.parentNode.classList.remove("err")      
      }else{
        input.parentNode.classList.remove("valid")
        input.parentNode.classList.add("err")
      }
      if(score == casesCoches.length){
        monForm.innerHTML = '🏆'
        monForm.style.fontSize = "20rem";
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
      }
    })
  }
})

affichage()
