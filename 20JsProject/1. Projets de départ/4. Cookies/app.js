const btnAffiche = document.getElementById("btnafficher");
const monForm = document.querySelector('.monForm');
const container = document.querySelector(".container")
const inputs = document.querySelectorAll("input[type='text']")

monForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = inputs[0].value;
    const valeur = inputs[1].value;
    if(nom&&valeur){
        createCookie(nom,valeur)
        pop("ajout")
        inputs[0].value = '';
        inputs[1].value ='';
    }
});

btnAffiche.addEventListener('click', (e) => {
    e.preventDefault();
    readCookie()
    e.stopPropagation();
});

function pop(status) {
    const div = document.createElement('div')
    div.classList.add("popupp")
    if(status == "ajout"){
        div.textContent = "🍪Ajouter ✅"
        div.style.background = "green"
    }else{
        div.textContent = "🍪Supprimer 🧹"
        div.style.background = "red"
    }
    div.classList.add("apparait")
    popupValidation.appendChild(div)

    setTimeout(function () {
        popupValidation.innerHTML = ""
    }, 3000)
}

function createCookie(nom,valeur) {
    return document.cookie = `${nom} = ${valeur}`
}

function readCookie() {
    
    let deleteSpans = document.querySelectorAll(".spanDelete")
    const listCookies = document.cookie ? document.cookie.split(";") : null;
    
    if(listCookies) {
        containerPostit.innerHTML = ""
        listCookies.forEach((cookie, indexCookie) => {
            const [nom, valeur] = cookie.trim().split("=");
            const postit = document.createElement('div');
            postit.id = "postit";
            postit.setAttribute("name", indexCookie);
    
            const nomPara = document.createElement('p');
            nomPara.textContent = `Nom : ${nom}`;
            const valeurPara = document.createElement('p');
            valeurPara.textContent = `Valeur : ${valeur}`;
            const deleteSpan = document.createElement('span');
            deleteSpan.classList.add("spanDelete");
            deleteSpan.textContent = "❌";
            deleteSpan.addEventListener('click', (e) => {
                console.log("SPAN",nom)
                deleteCookie(e, nom);
            });
    
            postit.appendChild(nomPara);
            postit.appendChild(valeurPara);
            postit.appendChild(deleteSpan);
            containerPostit.appendChild(postit);
        });
    }
}

function deleteCookie(e, nom) {
  

    document.cookie = `${nom}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
    e.target.parentNode.remove()
    pop("supp")
}
