const btnAffiche = document.getElementById("btnafficher");
const monForm = document.querySelector('.monForm');
const container = document.querySelector(".container")
const inputs = document.querySelectorAll("input[type='text']")
containerPostit.innerHTML


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
        if(input.name == "nom") nom = input.value
        if(input.name == "valeur") valeur = input.value 
    });    
    return document.cookie = `${nom} = ${valeur}`
}

function readCookie(){
    const listCookies = document.cookie.split(";")
    let nom;
    let valeur;

    listCookies.forEach(cookie => {
        cookie = cookie.split("=")       
            containerPostit.innerHTML += `<div id="postit">
            <p>Nom : ${cookie[0]} </p>
            <p>Valeur : ${cookie[1]}</p>
            <span id="spanDelete">❌</span>
          </div>`
    }); 
}