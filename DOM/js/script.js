// BOTÃO 1

const titulo = document.getElementById("titulo");
const btn1 = document.getElementById("btn1");

btn1.addEventListener('click', function(){
    titulo.classList.toggle("tituloCor")
})

// BOTÃO 2

const img = document.getElementById("imagem");
const btn2 = document.getElementById("btn2");

btn2.addEventListener('click', function(){
    img.src = './img/images.jpg'
});

// BOTÃO 3

const texto1 = document.getElementById("texto1");
const btn3 = document.getElementById("btn3");

btn3.addEventListener('click', function(){
    texto1.textContent = "Texto alterado!";
    texto1.style.backgroundColor = "rgb(198, 137, 238)"
})

// BOTÃO 3,5 E 6

const texto2 = document.getElementById("texto2");
const botoes = document.querySelectorAll(".btn-texto");

botoes.forEach(botao => {
    botao.addEventListener('click', function(){
        texto2.textContent = this.textContent;
    });
});