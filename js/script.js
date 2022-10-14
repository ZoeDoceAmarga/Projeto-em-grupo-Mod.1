
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