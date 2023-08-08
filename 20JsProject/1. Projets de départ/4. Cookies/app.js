const btnAffiche = document.getElementById("btnafficher");
const monForm = document.querySelector('.monForm');
const container = document.querySelector(".container")
const inputs = document.querySelectorAll("input[type='text']")

document.cookie = "coincoin=John Doe";

monForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('=================valider===================');
    createCookie(inputs)
 
    pop()
});


btnAffiche.addEventListener('click', (e) => {
    e.preventDefault();  
    console.log(readCookie())
    e.stopPropagation();  
});

function pop(){
    const div = document.createElement('div')
    div.classList.add("popupp")
    div.textContent= "🍪Aouter ✅"
    popupValidation.appendChild(div)
    div.classList.add("apparait")    
    setTimeout(function(){
        popupValidation.innerHTML = ""
    },3000)    
}

function createCookie(inputs){
    console.log("coucou")
    let nom ;
    let valeur;
    inputs.forEach(input => {        
        console.log(input)
        if(input.name == "nom") nom = input.value
        if(input.name == "valeur") valeur = input.value 
    });    
    return document.cookie = `${nom} = ${valeur}`
}

function readCookie(){
    return document.cookie
}
// C R U D