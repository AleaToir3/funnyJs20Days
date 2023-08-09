const btnAffiche = document.getElementById("btnafficher");
const monForm = document.querySelector('.monForm');
const container = document.querySelector(".container")
const inputs = document.querySelectorAll("input[type='text']")

monForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (inputs[0].value && inputs[1].value) {
        createCookie(inputs)
        pop("ajout")
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

function createCookie(inputs) {
    let nom;
    let valeur;
    inputs.forEach(input => {
        if (input.name == "nom") nom = input.value
        if (input.name == "valeur") valeur = input.value
    });
    inputs[0].value = ""
    inputs[1].value = ""
    return document.cookie = `${nom} = ${valeur}`
}

function readCookie() {
    const listCookies = document.cookie ? document.cookie.split(";") : null;
    let nom;
    let valeur;
    let deleteSpans = document.querySelectorAll(".spanDelete")
 
    if(listCookies) {
       console.log("coucou")
        containerPostit.innerHTML = ""
        listCookies.forEach((cookie, indexCookie) => {
            // console.log('le cookie',cookie,"sonINDEX:",indexCookie)
            cookie = cookie.split("=")
            containerPostit.innerHTML += `<div id="postit" name=${indexCookie}>
            <p>Nom : ${cookie[0]} </p>
            <p>Valeur : ${cookie[1]}</p>
            <span class="spanDelete">❌</span>
            </div>`
        });
        deleteSpans = document.querySelectorAll(".spanDelete")
        deleteSpans.forEach((span) => {
            span.addEventListener('click', (e) => {
                deleteCookie(e, listCookies)
            })

        })
    }
}

function deleteCookie(e, listCookies) {
    let id = e.target.parentNode.getAttribute('name')
    let nameAsupprimer = listCookies[id].split("=")

    document.cookie = `${nameAsupprimer[0]}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
    e.target.parentNode.remove()
    pop("supp")
}
