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

console.table(membri);

const teamContainer = document.querySelector(".team-container")

//Scorriamo la lista dei membri per stamparli man mano dopo
for(i = 0; i < membri.length; i++){
    const membro = membri[i];
    console.log(membro);

    //stampiamo i nostri membri e eventuali contenuti dentro l'html
    teamContainer.innerHTML += `
    <div class="team-card">
    <div class="card-image">
    <img src=${membro.immagine}/>
    </div>
    <div class="card-text">
    <h3>${membro.nome}</h3>
     <p>${membro.ruolo}</p>
    </div>
  </div> ` 
}

//Aggiunta nuovi membri team usando una funzione
function nuovoMembro(){
    //List membri

}