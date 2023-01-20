// EXO-1


let input = document.getElementsByTagName("input");
input[0].addEventListener('focus',()=>{
    input[0].style.background = "blue";
})


// EXO-2

let input = document.getElementsByTagName("input");
input[1].addEventListener('focus',()=>{
    input[1].style.background = "blue";
})

input[1].addEventListener('focusout',()=>{
    input[1].style.background = "none";
})



/* Récupérer les trois paragraphes ainsi que le button avec getElementsByClassName(); et les stocker dans des variables */

Test 1


var premierParagraphe = document.getElementById('p1');
var secondParagraphe = document.getElementById('p2');
var dernierParagraphe = document.getElementById('p3');
var buttonExo = document.getElementById('buttonP');
var paragraphs = document.getElementsByClassName('paragraph');
var button = document.getElementsByClassName('button')[0];
paragraphs[0].innerHTML = paragraphs[1].innerHTML;
paragraphs[2].innerHTML = paragraphs[1].innerHTML;


// Test 2

let p1 = document.getElementsByClassName("premierParagraphe");

let p2 = document.getElementsByClassName("secondParagraphe");

let p3 = document.getElementsByClassName("dernierParagraphe");

let button = document.getElementsByClassName("buttonExo btn btn-primary");

button[0].addEventListener('click',()=>{
    p1[0].innerText += p2[0].innerText;
    p3[0].innerText += p2[0].innerText;
})



/* */


let button2 = document.getElementsByClassName("buttonExo btn btn-primary")[1];

button2.addEventListener('click',()=>{
    document.getElementById("exo4").innerText = input[2].value;
})



let premierParagraphe = document.getElementsByClassName('premierParagraphe')[0];
let secondParagraphe = document.getElementsByClassName('secondParagraphe')[0];
let dernierParagraphe = document.getElementsByClassName('dernierParagraphe')[0];
let button = document.getElementsByClassName("buttonExo btn btn-primary");

button[0].addEventListener('click',()=>{
    p1[0].innerText += p2[0].innerText;
    p3[0].innerText += p2[0].innerText;
})




let button2 = document.getElementsByClassName("buttonExo btn btn-primary")[1];
let input2 = document.getElementsByClassName("input")[2];
let nico = document.getElementById("exo4");

button2.addEventListener('click',()=>{
    nico=input2.value;
})
console.log(input2.type);


// // EXO5

let tart = document.getElementsByTagName('img')[1];

let tart2 =document.getElementsByTagName('img')[2];

tart2.onclick = function () { let chemin = tart.src; 
tart2.onclick = function () {tart2.src = chemin;
}}

OU

let img = document.getElementsByTagName('ìmg')[0];
let btn = document.getElementsByClassName('btn')[2];
let p = document.getElementsByTagName(`p`)[4].innerHTML.substring(10);

btn.addEventListener(`click`,()=>{
    img.setAttribute('src',p);
)};




// EXO6


Quand on clique sur la tartine, on récupère le chemin qui est stocké 

let button3 = document.getElementsByClassName("btn btn-primary mb-2")[0];

button3.addEventListener('click',()=>{
    document.getElementsByClassName("img-responsive")[0].src = document.querySelectorAll("p")[4].innerText.substring(10);
})



let tartines = document.getElementsByClassName("img-responsive")[1];
let button = document.getElementById(`btnCange`)
let source = tartines[1].src;
img[1].addEventListener('click',()=>{
    let source = tartines.src;
    source = tartines[1].src
});


exo7

let text1 = document.querySelectorAll('p')[5];
let text2 = document.querySelectorAll('p')[6];
let btnexo7 = document.getElementsById('btnChange');
console.log(btnexo7);
let temp;

btnexo7.addEventListener('click',()=>{
    temp = text1.innerText;
    text1.innerText = text2.innerText
    text2.innerText = temp;
})



let text1 = document.getElementById(`ex7p1`);
let text2 = document.getElementById(`ex7p2`);
let btnEx7 = document.getElementsById(`btnChange`);
console.log(btnEx7);
let temp;

btnEx7.addEventListener("click",()=>{
    temp = text1.innerHTML;
    text1.innerHTML = text2.innerHTML;
    text2.innerHTML = temp;
});







exo 4
let bouton = document.getElementsByClassName('buttonExo')[1];
let input = document.getElementsByTagName('input')[2];
let nico = document.getElementById('exo4');

bouton.addEventListener('click', () => {
    nico.innerText = input.value;
    console.log('click');
})

exo 5

let p = document.getElementsByTagName('p')[4];

let p2 = document.getElementsByClassName('btn')[2];

p2.onclick=function(){
    getElementsByTagName('img')[0].src = p.innerHTML.substring(10);
};

Methode 2

let img = document.getElementsByTagName('img')[0];
let btn = document.getElementsByClassName('btn')[2];
let p = document.getElementsByTagName('p')[4].innerHTML.substring(10);
btn.addEventListener('click', () => {
    img.setAttribute('src', p);
});

Exo 6
let img1 = document.getElementsByTagName('img')[1];
let img2 = document.getElementsByTagName('img')[2];
Attention Bonus 
let imgall = document.getElementsByClassName('img-responsive');
let btnChange = document.getElementById('ad');
let chemin;
imgall[1].addEventListener('click', () => {
    imgall[1].src = chemin;
    chemin = imgall[1].src;
});

imgall[2].addEventListener('click', () => {
    imgall[2].src = chemin;
    chemin = imgall[2].src;
});
btnChange.addEventListener('click',()=>{
    imgall[1].src = chemin;
    imgall[2].src = chemin;

})








// exo 4
let bouton = document.getElementsByClassName('buttonExo')[1];
let input = document.getElementsByTagName('input')[2];
let nico = document.getElementById('exo4');

bouton.addEventListener('click', () => {
    nico.innerText = input.value;
    console.log('click');
})

// exo 5

// let p = document.getElementsByTagName('p')[4];

// let p2 = document.getElementsByClassName('btn')[2];

// p2.onclick=function(){
//     getElementsByTagName('img')[0].src = p.innerHTML.substring(10);
// };

// Methode 2

let img = document.getElementsByTagName('img')[0];
let btn = document.getElementsByClassName('btn')[2];
let p = document.getElementsByTagName('p')[4].innerHTML.substring(10);
btn.addEventListener('click', () => {
    img.setAttribute('src', p);
});

// Exo 6
// let img1 = document.getElementsByTagName('img')[1];
// let img2 = document.getElementsByTagName('img')[2];
// Attention Bonus 
let imgall = document.getElementsByClassName('img-responsive');
let btnChange = document.getElementById('ad');
let chemin;
imgall[1].addEventListener('click', () => {
    // imgall[1].src = chemin;
    chemin = imgall[1].src;
});

imgall[2].addEventListener('click', () => {
    // imgall[2].src = chemin;
    chemin = imgall[2].src;
});
btnChange.addEventListener('click',()=>{
    imgall[1].src = chemin;
    imgall[2].src = chemin;

})

//exo 7
let text1 = document.querySelectorAll('p')[5]
let text2 = document.querySelectorAll('p')[6]
let btnexo7 = document.querySelectorAll('button')[4]
console.log(btnexo7);
let temp;

btnexo7.addEventListener('click',()=>{
    temp = text1.innerText;
    text1.innerText = text2.innerText
    text2.innerText = temp;
})