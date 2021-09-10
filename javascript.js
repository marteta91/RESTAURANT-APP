let dishes = [
    {
        price: 12,
        name: "Chicken Veggie Salad",
        description: "With cheese sauce",
        img: "images/dishes/chicke_veggie_salad.jpg"
    },

    {
        price: 8,
        name:"Tacos",
        description: "With Guacamole",
        img: "images/dishes/tacos.jpg"
    },

    {
        price: 12,
        name: "Mutton Curry",
        description: "With with basmati rice<",
        img: "images/dishes/curry.jpg"     
    },

    {
        price: 5,
        name: "Bravas",
        description: "With salsa picante",
        img: "images/dishes/patatas-bravas.jpg"
    },

    {
        price: 3,
        name: "Carrot Cake",
        description: "One portion",
        img: "images/dishes/carrot-cake.jpg"
    },

    {
        price: 3,
        name: "Cheesecake",
        description: "One portion",
        img: "images/dishes/cheesecake.jpg"
    },

    {
        price: 3,
        name: "Brownie",
        description: "One portion",
        img: "images/dishes/brownie.jpg"      
    },

    {
        price: 8, 
        name: "Pancakes",
        description: "6 unites",
        img: "images/dishes/pancakes.jpg"      
    },

    {
        price: 8,
        name: "Pizza",
        description: "Three portions",
        img: "images/dishes/pizza.jpg"      
    }
]


//Object.getOwnPropertyNames()

// Imprime nombres de variables y valores usando Array.forEach
//Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  //  print(val + " -> " + obj[val]);



//para ver el carrito
function makeVisible1(){
    const container2 =document.querySelector('.container2')
    container2.classList.add('toggle')
}
//para ir atrás de carrito a pagina 1
function makeInvisible1(){
    const container2 =document.querySelector('.container2')
    container2.classList.remove('toggle')
}
//para ver detalles de la foto
function makeVisible2(){
    const container3 =document.querySelector('.container3')
    container3.classList.add('details')
}

//para salir de detalles foto (pag3)
function makeInvisible2(){
    const container3 =document.querySelector('.container3')
    container3.classList.remove('details')
}
//para que desaparezca toda la compra
function eliminar(){
    const compra = document.querySelector('.compra')
    const empty = document.querySelector('.empty')
    compra.classList.add('none');
    empty.classList.add('show')
}

//primer botón suma y resta

window.onload=function(){
    var minusBtn = document.getElementById("minus")
        plusBtn = document.getElementById("plus")
        numberPlace = document.getElementById("numberPlace"),
        number = 0, /// number value
        min = 0, /// min number
        max = 30; /// max number
        
    minusBtn.onclick = function(){
        if (number>min){
           number = number-1; /// Minus 1 of the number
           numberPlace.innerHTML = number ; /// Display the value in place of the number
           console.log(number,numberPlace)
        }
                
    }
    plusBtn.onclick = function(){
        if(number<max){
           number = number+1;
           numberPlace.innerHTML = number ; /// Display the value in place of the number
        }     
     
           
    }
   
}



 
