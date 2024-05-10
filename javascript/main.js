//Funcion para el modo oscuro
let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');
toggle.addEventListener('change',(event) =>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark_mode');
    if(checked == false){
        label_toggle.innerHTML='<img src="images/assets/sun.svg">';
    }else if (checked == true){
        label_toggle.innerHTML='<img src="images/assets/moon.svg">';
    }
})

//Funcion para que el header me siga en la web
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