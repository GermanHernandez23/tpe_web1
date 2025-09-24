"use strict";

// Header sticky
let prevScrollpos = window.pageYOffset;
let headerHeight = document.querySelector("header").offsetHeight;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let header = document.querySelector("header");
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-${headerHeight}px`;
  }
  prevScrollpos = currentScrollPos;
};

// CAPTCHA + validación
//FORM CAPTCHA
// Obtención de los elementos del DOM
document.getElementById('submitBtn').addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const notification = document.getElementById('notification');

  // Comprobar si todos los campos están llenos
  if (name && email && subject && message) {
    // Mostrar notificación de éxito
    notification.className = 'notification success'; // Añadir clase de éxito
    notification.innerText = 'Formulario enviado exitosamente!';
    notification.style.display = 'block'; // Mostrar la notificación
    setTimeout(() => {
      notification.style.display = 'none'; // Ocultar la notificación después de 3 segundos
    }, 3000);

    // Simulación de envío del formulario
    setTimeout(() => {
      // Limpiar los campos del formulario
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    }, 3000);
  } else {
    // Mostrar notificación de error
    notification.className = 'notification error'; // Añadir clase de error
    notification.innerText = 'No se han completado los campos';
    notification.style.display = 'block'; // Mostrar la notificación
    setTimeout(() => {
      notification.style.display = 'none'; // Ocultar la notificación después de 3 segundos
    }, 3000);
  }
})

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  // Asigna el evento click al botón de generar captcha
  document.getElementById('generarCaptchaBtn').addEventListener('click', generarCaptcha);

  // Asigna el evento submit al formulario
  document.getElementById('miFormulario').addEventListener('submit', validarCaptcha);

  // Genera un captcha inicial
  generarCaptcha();
});
let captcha;

function generarCaptcha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const longitud = 6;
    let captchaGenerado = '';

    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        captchaGenerado += caracteres.charAt(indice);
    }

    captcha = captchaGenerado;
    document.getElementById('captchaDisplay').innerText = `Captcha: ${captcha}`;
}

let mensajeCaptcha = document.getElementById('mensajeCaptcha');
function validarCaptcha(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  const inputCaptcha = document.getElementById('captchaInput').value;

  if (inputCaptcha === captcha) {
    mensajeCaptcha.className = 'success';
    mensajeCaptcha.textContent = 'Captcha correcto. Enviando formulario...';

      document.getElementById('miFormulario').submit();
    
  } else {
    mensajeCaptcha.className = 'error';
    mensajeCaptcha.textContent = 'Captcha incorrecto. Intenta de nuevo.';
  }
}