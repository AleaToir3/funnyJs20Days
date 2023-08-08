let poid;
let taille;
let imc = 0;

let btncalcul = document.getElementById("btn");
let afficheur = document.getElementById("res");
let form = document.getElementById("form");
let imgres = document.getElementById("imgres");

document.getElementById("taille").addEventListener("input", (e) => {
  taille = e.target.value;
});

document.getElementById("poid").addEventListener("input", (e) => {
  poid = e.target.value;
});

btncalcul.addEventListener("click", calculFinale);

function verification(value) {
  if (!isNaN(value) && value != "undefined" && value) {
    return true;
  } else return false;
}

function calculFinale() {
  afficheur.innerHTML = "";

  let img = document.createElement("img");
  img.alt = "res-img";

  if (verification(poid) == true && verification(taille) == true) {
    imc = Math.round(poid / taille ** 2);
    if (imc > 25) {
      console.log("ERR 1");
      img.src = "./img/fat.png";
      afficheur.style.color = "red";
      // Surpoids ou pré-obésité	De 25 à 30	Accru
    }
    if (imc < 18.5) {
      img.src = "./img/os.png";
      console.log("ERR 2");
      afficheur.style.color = "orange";
      // Maigreur	De 16.5 à 18.5	Accru
    }
    if (imc >= 18.5 && imc < 25) {
      console.log("ERR 3");
      afficheur.style.color = "green";
      img.src = "./img/win.png";
      // Corpulence normale	De 18.5 à 25	Faible
    }
  }
  afficheur.appendChild(img);
  afficheur.innerHTML += `<p>${imc}</p>`;
}

