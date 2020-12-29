// navegation
let buttonNav = document.querySelector(".nav-button")
let nav = document.querySelector(".nav")
let body = document.querySelector("body")

buttonNav.addEventListener('click',()=>{
    nav.classList.toggle("nav-hidden")

})

//slider

let slider = document.querySelector('.slider');
let btnL=document.querySelector(".button-right")
let btnR=document.querySelector(".button-left")

items = slider.children.length

let translate=100;
contador = 0;

 
let stopSlider = setInterval(() => {
    contador++;
    contador = desplazar(items,0)
    slider.style.transform = `translateX(-${translate*contador}%)`; 
}, 2000);


function desplazar(cant,cont){
    if(contador == cant) contador = cont;
    
    return contador;
}

btnR.addEventListener("click",()=>{
    contador++;
    contador = desplazar(items,0)
    slider.style.transform = `translateX(-${translate*contador}%)`; 
})


btnL.addEventListener("click",()=>{
    contador = desplazar(0,items)
    contador--;
    slider.style.transform = `translateX(-${translate*contador}%)`; 
    contador = desplazar(0,items)
 })
 