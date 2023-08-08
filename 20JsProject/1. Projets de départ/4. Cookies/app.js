const btnAffiche = document.getElementById("btnafficher");
const monForm = document.querySelector('.monForm');
const container = document.querySelector(".container")

document.cookie = "coincoin=John Doe";

btnAffiche.addEventListener('click', (e) => {
    e.preventDefault();  
    pop()

    e.stopPropagation();  

});

monForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('=================valider===================');
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