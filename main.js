// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

//lista dei miei membri sottoforma di oggetto
const membri = [
  {
    immagine:"./img/wayne-barnett-founder-ceo.jpg",
    nome: "Wayne Bernett",
    ruolo: "Founder e CEO"
  },
  
  {
    immagine:"./img/angela-caroll-chief-editor.jpg",
    nome: "Angela Caroll",
    ruolo: "Chief Editor"
  },

  {
    immagine:"./img/walter-gordon-office-manager.jpg",
    nome: "Walter Gordon",
    ruolo: "Office Manager"
  },
  {
    immagine:"./img/angela-lopez-social-media-manager.jpg",
    nome: "Angela Lopez",
    ruolo: "Social Media Manager"
  },
  {
    immagine:"./img/scott-estrada-developer.jpg",
    nome: "Scott Estrada",
    ruolo: "Developer"
  },
  {
    immagine:"./img/barbara-ramos-graphic-designer.jpg",
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer"
  },
];



const teamContainer = document.querySelector(".team-container")

//Scorriamo la lista dei membri per stamparli man mano dopo
for(i = 0; i < membri.length; i++){
    const membro = membri[i];
    console.log(membro);

printatrice(membro);
   
}

// Click bottone add
const add = document.querySelector("button");

//aggiunto la mia funzione
add.addEventListener("click", () => nuovoMembro())





/////FUNZIONE/////

//Aggiunta nuovi membri team usando una funzione
function nuovoMembro(){
// la funzione prende i valori e ci crea un oggetto
const nuovoMembro =
{
immagine : document.getElementById("image").value,
nome : document.getElementById("name").value,
ruolo : document.getElementById("role").value
};

//Pushiamo l'oggetto nell'array membri
membri.push(nuovoMembro)

//inception di funzione printatrice
printatrice(nuovoMembro)
}

//Funzone printatrice
//stampiamo i nostri membri e eventuali contenuti dentro l'html
function printatrice(teamMember){
teamContainer.innerHTML += `
<div class="team-card">
<div class="card-image">
<img src=${teamMember.immagine}/>
</div>
<div class="card-text">
<h3>${teamMember.nome}</h3>
 <p>${teamMember.ruolo}</p>
</div>
</div> ` 

console.table(membri)
}