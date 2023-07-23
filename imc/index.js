let taille = document.getElementById('taille').addEventListener("input",(e)=>{
taille = e.target.value;
})

let poid = document.getElementById('poid').addEventListener("input",(e)=>{
    poid = e.target.value;
    })
  
let btncalcul = document.getElementById("btn")
let afficheur = document.getElementById('res')
let form = document.getElementById("form")
let imc = 0

function verification(value){
    if(!isNaN(value) && value != "undefined" && value ){
        console.log("cest bon ", value);
        return true
    }else return false
}

btncalcul.addEventListener('click',calculFinale)


function calculFinale(){
    if(verification(poid) == true && verification(taille) == true){
        imc = poid / ( taille * taille )
    }
    afficheur.innerHTML  = imc
}