"use strict";

const tiendaBtn = document.getElementById("button_rescates");
if (tiendaBtn) {
  tiendaBtn.addEventListener("click", function () {
    window.location.href = "Rescates.html";
  });
}

const homeBtn = document.getElementById("button_home");
if (homeBtn) {
  homeBtn.addEventListener("click", function () {
    window.location.href = "home.html";
  });
}

const musicaBtn = document.getElementById("button_adopcion");
if (musicaBtn) {
  musicaBtn.addEventListener("click", function () {
    window.location.href = "adopciones.html";
  });
}

// Botón volver arriba (si existe)
const scrollUpBtn = document.getElementById("btn-up");
if (scrollUpBtn) {
  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Mostrar botón volver arriba si corresponde
window.addEventListener('scroll', function () {
  let backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // (Opcional) Cerrar menú al tocar un link
  const links = nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
});
