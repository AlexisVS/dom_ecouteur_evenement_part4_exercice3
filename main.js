// # Exercice :
// >*En utilisant les class du fichier style.css*
// >*Cherche des methodes pour résoudre les énoncés suivants :*
// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
let h1 = document.querySelector('h1');
h1.classList.add('text-blue')
// ### 2. Au double clique du h3, rajoute la class text-error
let h3 = document.querySelector('h3');
h3.addEventListener('dblclick', () => {
    h3.classList.add("text-error")
})
// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
let p = document.querySelector('p');
p.addEventListener('click', () => {
    p.classList.toggle('text-style')
})
// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
let avantDernierParagraphe = document.querySelectorAll('p')[1];
let avantDernierParagrapheSpan = avantDernierParagraphe.querySelectorAll('span')
avantDernierParagraphe.addEventListener("click", (e) => {
    e.target.classList.add('bolder')
})
// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "border-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !
let dernierParagraphe = document.querySelectorAll('p')[2];
let dernierParagrapheSpan = dernierParagraphe.querySelectorAll('span');
dernierParagraphe.addEventListener("click", (event) => {
    dernierParagrapheSpan.forEach((element,i) => {
        element.classList.remove('bolder-red')
    })
    event.target.classList.add('bolder-red')
})