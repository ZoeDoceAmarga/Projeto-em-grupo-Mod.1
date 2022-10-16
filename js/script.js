// Fechar o Popup
const popup = document.getElementById('modalPromo');
function closePop(){
  popup.style.display = 'none';
}


// Interação da Página de Produtos
const modalProdutos = document.querySelector('.modal_produtos');
function closePopup(){
  modalProdutos.style.display = 'none';
}
var modal_produtos = document.getElementById('modal_produtos_pop');
function botaoComprar(){
  modal_produtos.style.display = 'flex';
}

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