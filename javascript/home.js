// Funcion para el boton "User" que te envia a la pestaña LOGIN.
document.getElementById("button_user").addEventListener("click", function() {
  // Redireccion a login.html
  window.location.href = "login.html";
});

// Funcion para el boton "Login" que te envia a la pestaña LOGIN.
document.getElementById("button_login").addEventListener("click", function() {
  // Redireccion a index.html
  window.location.href = "index.html";
});

// Funcion para que el header me siga en la web.
window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}