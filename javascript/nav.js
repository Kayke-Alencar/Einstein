const nav = document.querySelector("nav");

const btnDoFechado = document.querySelector("#btn-fechado");
const btnDoAberto = document.querySelector("#btn-aberto");


function abrir(){
    btnDoFechado.addEventListener('click', ()=>{
        btnDoFechado.style.display = "none";
        btnDoAberto.style.display = "inline";
        
        nav.style.animationName = "abrindoNav";
        nav.style.animationDuration = "550ms";



        nav.classList.toggle("nav-aberto");
    });
};

function fechar(){
    btnDoAberto.addEventListener('click', ()=>{
        btnDoAberto.style.display = "none";
        btnDoFechado.style.display = "inline";

        nav.style.animationName = "fechandoNav";
        nav.style.animationDuration = "550ms";

        setTimeout(()=>{
            nav.classList.toggle("nav-aberto");
        }, 530);
        
    });
};

abrir();
fechar();