const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function Modulo() {
  // Variabili associate ai campi del modulo
  var nome = document.modulo.nome.value;
  var email = document.modulo.email.value;
  var firma = document.modulo.firma.value;
  // Espressione regolare dell'email
  var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
  //Effettua il controllo sul campo NOME
  if (nome == "" || nome == "undefined") {
    alert("Il campo Nome è obbligatorio.");
    document.modulo.nome.focus();
    return false;
  } else if ( !email_reg_exp.test(email) || email == "" || email == "undefined") {
      alert("Inserire un indirizzo email corretto.");
      document.modulo.email.focus();
      return false;
  }

  //Effettua il controllo sul campo FIRMA
  else if (
    firma == "" ||
    firma == "undefined" ||
    firma.indexOf("Inserisci qui il tuo slogan!") != -1
  ) {
    alert(
      "Il campo Firma è obbligatorio e non si può inserire la scritta predefinita."
    );
    document.modulo.firma.focus();
    return false;
  }
  //INVIA IL MODULO
  else {
   
    document.modulo.submit();
  }
}
