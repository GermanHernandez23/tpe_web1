const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");

//Pongo todos los caracteres del captcha en un array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){
  for (let i = 0; i < 6; i++) { //tomo 6 digitos delarray
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //paso los 6 codigos random al innerText
  }
}
getCaptcha(); //Llamamos al getCaptcha
//llamamos a getCaptcha y a removeContent en el boton de actualizar captcha
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});

checkBtn.addEventListener("click", e =>{
  e.preventDefault(); 
  statusTxt.style.display = "block";
  //agregando espacio después de cada carácter de los valores ingresados por el usuario porque agregué espacios al generar captcha
  let inputVal = inputField.value.split('').join(' ');
  if(inputVal == captcha.innerText){ //si el captcha es correcto
    statusTxt.style.color = "rgb(17 252 0";
    statusTxt.innerText = "No sos un Robot!!";
    setTimeout(()=>{ //llamando a removeContent y getCaptcha despues de 4 segundos
      removeContent();
      getCaptcha();
    }, 2000);
  }else{
    statusTxt.style.color = "rgb(17 252 0";
    statusTxt.innerText = "Por favor, vuelve a intentarlo";
  }
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}

// Funcion para el boton "Login" que te envia a la pestaña LOGIN.
document.getElementById("button_login").addEventListener("click", function() {
  // Redireccion a home.html
  window.location.href = "home.html";
});