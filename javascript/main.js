let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');
toggle.addEventListener('change',(event) =>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark_mode');
    if(checked == true){
        label_toggle.innerHTML='<img src="images/assets/light-on.svg">';
    }else if (checked == false){
        label_toggle.innerHTML='<img src="images/assets/light-off.svg">';
    }
})