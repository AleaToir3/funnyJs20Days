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
    console.log("creation de la div ");
    const div = document.createElement('div')
    div.classList.add("popupp")
    div.textContent= "COUCOU ICI"
    container.appendChild(div)
    div.classList.add("apparait")    
}