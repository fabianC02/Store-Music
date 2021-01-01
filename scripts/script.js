// navegation
let buttonNav = document.querySelector(".nav-button");
let nav = document.querySelector(".nav");
let body = document.querySelector("body");

buttonNav.addEventListener('click',()=>{
    nav.classList.toggle("nav-hidden");
})

nav.addEventListener('click',()=>{
    buttonNav.click();
})

//slider

let slider = document.querySelector('.slider');
let btnR = document.querySelector(".button-right");
let btnL = document.querySelector(".button-left");

items = slider.children.length;

let translate = 100;
contador = 0;


let stopSlider = setInterval(() => {
    contador++;
    contador = desplazar(items,0);
    slider.style.transform = `translateX(-${translate*contador}%)`;
}, 2050);


function desplazar(cant,cont){
    if(contador == cant) contador = cont;
    return contador;
}

btnL.addEventListener("click",()=>{
    contador++;
    contador = desplazar(items,0)
    slider.style.transform = `translateX(-${translate*contador}%)`;
})


btnR.addEventListener("click",()=>{
    contador = desplazar(0,items)
    contador--;
    slider.style.transform = `translateX(-${translate*contador}%)`;
    contador = desplazar(0,items)
 })


/*Slider Products*/
let sliderProducts = document.querySelector('.featured-products-slider');
let buttonrp = document.querySelector('.button-right-products');
let buttonlp = document.querySelector('.button-left-products');


widthItem = sliderProducts.children[0].clientWidth;
lenItem = sliderProducts.children.length;
contItem = 0;


function viewSlider(){
    widthSlider = sliderProducts.clientWidth;
    itemView = Math.floor(widthSlider / widthItem);
    itemViewcont = lenItem - itemView;
    itemViewcont += 1;
}

viewSlider();


function optionButton(button,option){
    
    switch (option) {
        case 'enabled':
            button.style.opacity = `1`;
            break;
    
        case 'disabled':
            button.style.opacity = `0.4`;
            break;
    }

}


window.addEventListener('resize',()=>{
    viewSlider();
    buttonrp.click();
})


buttonrp.addEventListener('click',()=>{
    
    contItem++;

    if(itemViewcont <= contItem) {
        optionButton(buttonrp,'disabled');
        contItem = itemViewcont;
    } else{
        optionButton(buttonlp,'enabled');
    }

    sliderProducts.style.transform = `translateX(-${widthItem*contItem}px)`;
})

buttonlp.addEventListener('click',()=>{

    if(contItem <= 1) {
        optionButton(buttonlp,'disabled')
        sliderProducts.style.transform = `translateX(0%)`;
    }else{
        optionButton(buttonrp,'enabled')
        sliderProducts.style.transform = `translateX(${widthItem - (widthItem*contItem)}px)`;
        contItem--;
    }

    
})

