function tocapom(){
    //document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick=tocapom;

function tocaclap(){
    //document.querySelector('.tecla_clap');
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick=tocaclap;

function tocatim(){
    //document.querySelector('.tecla_tim');
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick=tocatim;

function tocapuff(){
    //document.querySelector('.tecla_puff');
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick=tocapuff;

function tocasplash(){
    //document.querySelector('.tecla_splash');
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick=tocasplash;

function tocatoim(){
    //document.querySelector('.tecla_toim');
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick=tocatoim;

function tocapsh(){
    //document.querySelector('.tecla_psh');
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick=tocapsh;

function tocatic(){
    //document.querySelector('.tecla_tic');
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick=tocatic;

function tocatom(){
    //document.querySelector('.tecla_tom');
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick=tocatom;

//Adicionar o evento tecla
document.addEventListener("keydown", function(event){

    //mostra qual tecla foi adicionada ao evento
    console.log(event.key)
    //verificando botão específico 
    if(event.key==="q"){
        tocapom();
    }
    if(event.key==="w"){
        tocaclap();
    }
    if(event.key==="e"){
        tocatim();
    }
    if(event.key==="a"){
        tocapuff();
    }
    if(event.key==="s"){
        tocasplash();
    }
    if(event.key==="d"){
        tocatoim();
    }
    if(event.key==="z"){
        tocapsh();
    }
    if(event.key==="x"){
        tocatic();
    }
    if(event.key==="c"){
        tocatom();
    }
});
