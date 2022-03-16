let modalF = document.querySelector('#modalForm')

function validar() {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
  
    if (nome.value == "") {
      alert("Nome não informado");
      nome.focus();
    }
    if (sobrenome.value == "") {
      alert("Sobrenome não informado");
      sobrenome.focus();
    }
    if (email.value == "" || !validateEmail(email.value)) {
      alert("E-mail não informado");
      email.focus();
    } else {
      alert("Formulário enviado!");
      //formulario.submit();
    }
  }

function validarF() {
    var nomeF = document.getElementById("nomeF");
    var sobrenomeF = document.getElementById("sobrenomeF");
    var emailF = document.getElementById("emailF");
  
    if (nomeF.value == "") {
      alert("Nome não informado");
      nomeF.focus();
    }
    if (sobrenomeF.value == "") {
      alert("Sobrenome não informado");
      sobrenomeF.focus();
    }
    if (emailF.value == "" || !validateEmail(emailF.value)) {
      alert("E-mail não informado ou inválido");
      emailF.focus();
    } else {
      alert("Formulário enviado!");
      modalF.classList.remove('active')
    }
  }

  function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };