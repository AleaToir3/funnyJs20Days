const btnAffiche = document.getElementById("btnafficher");
const monForm = document.querySelector('.monForm');
const container = document.querySelector(".container")
const inputs = document.querySelectorAll("input[type='text']")

monForm.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs[0].value && inputs[1].value ? createCookie(inputs) : console.log('y a rien')
 
    pop()
});

btnAffiche.addEventListener('click', (e) => {
    e.preventDefault();  
    readCookie()
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
    listCookies.forEach((cookie,indexCookie) => {
        // console.log('le cookie',cookie,"sonINDEX:",indexCookie)
        cookie = cookie.split("=")
            containerPostit.innerHTML += `<div id="postit" name=${indexCookie}>
            <p>Nom : ${cookie[0]} </p>
            <p>Valeur : ${cookie[1]}</p>
            <span class="spanDelete">❌</span>
          </div>`

          const deleteSpans = document.querySelectorAll(".spanDelete")
        //   console.log(deleteSpans)
          deleteSpans.forEach((span)=>{
            span.addEventListener('click',(e)=>{
                // deleteCookie(listCookies,indexCookie)
            })

          }) 
    }); 
}

function deleteCookie(listDecookie,indexAsupprimer){
// console.log(listDecookie)
// console.log(indexAsupprimer)
}
