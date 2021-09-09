
let price = 0
let getOwnPropertyNames = ""
let description = ""
let img = jpg

/*
let cart = []
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
]*/

//Object.getOwnPropertyNames()

// Imprime nombres de variables y valores usando Array.forEach
//Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  //  print(val + " -> " + obj[val]);
  

//para pasar pantalla

function makeVisible1(){
    const container2 =document.querySelector('.container2')
    container2.classList.add('toggle')
}
function makeInvisible1(){
    const container2 =document.querySelector('.container2')
    container2.classList.remove('toggle')
}


//___________________________________


function eliminar(){
    const compra = document.querySelector('.compra')
    compra.classList.add('none')
	
}





// way3 (fastest and best way)//

function makeVisible2(){
    const container3 =document.querySelector('.container3')
    container3.classList.add('toggle')
}
function makeInvisible2(){
    const container3 =document.querySelector('.container3')
    container3.classList.remove('toggle')
}





//---------------------------------------------------
//esta función solo funciona en el primer plato, 
//hemos intentado poner en los demás epro no funciona
//puede que sea por el id jajajaja ahí quedamos ♥


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


//intento de eliminar platos con icono papelera (solo desaparece si le das al plato)
let dishes = document.querySelectorAll('#delete div');

dishes.forEach(box => {
    box.addEventListener('click', Hidde)
})

function Hidde() {
    this.style.opacity= 0;
}
 //intentolista platos para la seleccion hacia la tercera pantalla, igual me he flipado//
 
 //trying a forEach loop//
 
let loadPlates =[
    {
        id : 1,
        precio:52,
        img:'<img src="images/dishes/chicke_veggie_salad.jpg" alt="imagen comida" class="unic-dish">',
        h1:'Chicken Veggie Salad',
        h2:'With cheese sauce',
        
    },
    {
        id : 1,
        precio:23,
        img:'<img src="images/dishes/curry.jpg" alt="imagen comida" class="unic-dish">',
        h1:'Chicken Veggie Salad',
        h2:'With cheese sauce',
        
    },
    {
        id : 1,
        precio:21,
        img:'<img src="images/dishes/tacos.jpg">',
        h1:'Chicken Veggie Salad',
        h2:'With cheese sauce',
        
    },
   
]
let containerbox = document.querySelector ('.containerbox');

loadPlates.forEach((name,index) =>{
   containerbox.innerHTML+=`
    <div class ="plato">
    <img>${name.img}</img>
    <p>${name.precio}</p>
    <h1>${name.h1}</h1>
    <h2>${name.h2}</h2>
    </div>
    <div class="quantity">
    <button class="left" data-indice ="${indice}">-</button>
    <p class="number">02</p>
    <button class="right" data-indice ="${indice}">+</button>
    </div>
    </div>
    `;
});
function fillPage(){
containerbox.innerHTML =''
}

function plusItem(indice){
    loadPlates[indice].cantidad ++
    plusItem()
}
