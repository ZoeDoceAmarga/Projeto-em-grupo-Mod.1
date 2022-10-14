
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add("mostrar"); //adicionar a classe modal a classe mostrar onde está configurada para aparecer o modal, com um display flex


        // ao clicar no "x" ou fora do pop up, irá fechar, removendo a classe mostrar da classe modal
        modal.addEventListener('click', (evento) =>{
            if(evento.target.id == modalID || evento.target.className=='fechar'){
                modal.classList.remove('mostrar');
                localStorage.fechaModal=modalID
               }
            });
    }
  }

//ao clicar na div irá aparecer o popup
//   const logo = document.querySelector(".logo");
//   logo.addEventListener('click',() => 
//     iniciaModal("modalPromo"));


// pop-up vai aparecer ao scrolar o site
  document.addEventListener('scroll',() => {
    if(window.pageYOffset>400){
      iniciaModal("modalPromo")
    }
  })


// Menu Responsivo
// quando o media query estiver ativado e o botão for clicado, o menu irá aparecer porque o '.menu ul.open' está configurada com altura de 250px. E se o botão for clicado de novo, o menu irá desaparecer porque o '.menu ul" está com altura de 0px.
var ul = document.querySelector('.menu ul');
var buttonBurguer = document.querySelector('.buttonBurguer');
function menuRes(){
    if (ul.classList.contains('open')){
        ul.classList.remove('open')
        buttonBurguer.classList.remove('active');
    }else{
        ul.classList.add('open')
        buttonBurguer.classList.add('active');;
    }
}
// Verificação Formulário
/*Criando as Variaveis*/
const form = document.getElementById('form');
const campos = document.querySelectorAll('.input-check');
const spans = document.querySelectorAll('.span-check');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/*Função de erro*/
function setError(index){
  campos[index].style.border = '2px solid #db3236';
  spans[index].style.display = 'block';
}
/*Função de remoção do erro*/
function removeError(index){
  campos[index].style.border = '2px solid #3cba54';
  spans[index].style.display = 'none';
}
/*Função de validação do nome*/
function nameValidation(){
  if (campos[0].value.length < 3){
    setError(0);
  }
  else{
    removeError(0);
  }
}
/*Função de validação do email*/
function emailValidation(){
  if(!emailRegex.test(campos[1].value)){
    setError(1);
  }
  else{
    removeError(1);
  }
}
/*Função de validação do tel*/
function telValidation(){
  if(campos[2].value.length == 11){
    removeError(2);
  }
  else{
    setError(2);
  }
}