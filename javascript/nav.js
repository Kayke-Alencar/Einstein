const nav = document.querySelector("nav");
const main = document.querySelector("main");
const body = document.querySelector("body");


const btnDoFechado = document.querySelector("#btn_da_nav_fechado");
const btnDoAberto = document.querySelector("#btn_da_nav_aberto");

let butaoAberto = ()=>{
    btnDoFechado.style.display = "none";
    btnDoAberto.style.display = "inline";
};

let butaofechado = ()=>{
    btnDoAberto.style.display = "none";
    btnDoFechado.style.display = "inline";

};

let bloquearScrool = ()=>{
    body.style.overflowY = "hidden";
}

let desbloquearScrool = ()=>{
    body.style.overflowY = "auto";
}

let fecharPeloMain = ()=>{
    main.addEventListener('click', ()=>{
        desbloquearScrool();
        butaofechado();
        nav.classList.remove("nav-aberto");
    });
};

function fecharPeloMenu(){
    btnDoAberto.addEventListener('click', ()=>{
        desbloquearScrool();
        butaofechado();


        nav.style.animationName = "fechandoNav";
        nav.style.animationDuration = "550ms";

        setTimeout(()=>{
            nav.classList.toggle("nav-aberto");
        }, 530);
        
    });
};

function abrir(){
    btnDoFechado.addEventListener('click', ()=>{
        butaoAberto();

        nav.style.animationName = "abrindoNav";
        nav.style.animationDuration = "550ms";
        nav.classList.toggle("nav-aberto");

        bloquearScrool();
        fecharPeloMain();
    });
};

abrir();
fecharPeloMenu();