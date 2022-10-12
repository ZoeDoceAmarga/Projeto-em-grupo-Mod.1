function botao(){
    document.getElementById('seuPedido').style = 'background-color: #52322F; color: white';
}
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