// navegation
let buttonNav = document.querySelector(".nav-button")
let nav = document.querySelector(".nav")
let body = document.querySelector("body")

buttonNav.addEventListener('click',()=>{
    nav.classList.toggle("nav-hidden")

})

//slider

let slider = document.querySelector('.slider');
let btnR = document.querySelector(".button-right")
let btnL = document.querySelector(".button-left")

items = slider.children.length

let translate = 100;
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
lenItem = sliderProducts.children.length
despl = widthItem
contItem = 0

widthSlider = sliderProducts.clientWidth;
itemView = Math.floor(widthSlider / widthItem);

itemViewcont = itemView;

window.addEventListener('resize',()=>{
    widthSlider = sliderProducts.clientWidth
    itemView = Math.floor(widthSlider / widthItem)
    sliderProducts.style.transform = `translateX(0)px`
})


buttonrp.addEventListener('click',()=>{
    contItem++

    sliderProducts.style.transform = `translateX(-${widthItem*contItem}px)`;

    console.log(itemViewcont)

    if(itemViewcont == lenItem){

        alert(`fin`)
    }



   console.log(`contador es ${contItem} y la cantidad de itemview es ${itemView}`)
})

buttonlp.addEventListener('click',()=>{

    
    if(contItem == 0 ) {
        sliderProducts.style.transform = `translateX(0)px`;
    }else{
        contItem--
        sliderProducts.style.transform = `translateX(${widthItem - (widthItem*contItem)}px)`;
        console.log(contItem)
    }

    
})

//  setInterval(() => {
   
//      sliderProducts.style.transform = `translateX(-${widthItem}px)`;
//      widthItem+=despl
//      itemView = Math.floor(widthSlider / widthItem)

//      console.log(itemView)

//      if(itemView == lenItem) alert('loquita')

// }, 2000);

