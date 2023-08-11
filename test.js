const personne = {
    nom: "Doe",
    prenom: "John",
    age: 30
  };
  
  const { nom, prenom } = personne;
  
  console.log(nom);    // Affiche : "Doe"
  console.log(prenom);  // Affiche : "John"
  

const var1 = { nom: "Doe", prenom: "John" };
const var2 = { nom: "Smith", prenom: "Jane" };

const { nom: nomVar1, prenom: prenomVar1 } = var1;
const { nom: nomVar2, prenom: prenomVar2 } = var2;

console.log(nomVar1, prenomVar1);  // Affiche : "Doe" "John"
console.log(nomVar2, prenomVar2);  // Affiche : "Smith" "Jane"
