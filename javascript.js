Array = [
    {
        price: 12
        name: "Chicken Veggie Salad"
        description: "With cheese sauce"
        img: "images/dishes/chicke_veggie_salad.jpg"
    },

    {
        price: 8 
        name:"Tacos"
        description: "With Guacamole"
        img: "images/dishes/tacos.jpg"
    },

    {
        price: 12
        name: "Mutton Curry"
        description: "With with basmati rice<"
        img: "images/dishes/curry.jpg"     
    },

    {
        price: 5 
        name: "Bravas"
        description: "With salsa picante"
        img: "images/dishes/patatas-bravas.jpg"
    },

    {
        price: 3
        name: "Carrot Cake"
        description: "One portion"
        img: "images/dishes/carrot-cake.jpg"
    },

    {
        price: 3
        name: "Cheesecake"
        description: "One portion"
        img: "images/dishes/cheesecake.jpg"
    },

    {
        price: 3
        name: "Brownie"
        description: "One portion"
        img: "images/dishes/brownie.jpg"      
    },

    {
        price: 8 
        name: "Pancakes"
        description: "6 unites"
        img: "images/dishes/pancakes.jpg"      
    },

    {
        price: 8
        name: "Pizza"
        description: "Three portions"
        img: "images/dishes/pizza.jpg"      
    }
]

//Object.getOwnPropertyNames()

// Imprime nombres de variables y valores usando Array.forEach
//Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  //  print(val + " -> " + obj[val]);
  


function makeVisible1(){
    const container2 =document.querySelector('.container2')
    container2.classList.add('toggle')
}
function makeInvisible1(){
    const container2 =document.querySelector('.container2')
    container2.classList.remove('toggle')
}


//ways to do this//


//way 1//

/*const navSlide = function(){
    const burger= document.querySelector ('.burger');
    const container2=document.querySelector('.container2');
    const back =document.querySelector('.back');
    const container1 =document.querySelector('.container1');


    burger.addEventListener('click', function(){
    container2.classList.add('active');
    container1.classList.add('hide');
    
  


    });

    back.addEventListener('click', function(){
    isNotVisible(container2)
    container1.classList.remove('hide');
    

    });
}
navSlide(); */

//way2//

//another way, making "isNotVisible" a funtion. instead of writing "container3.classList.remove('toggle')"
//we make "isNotVisible" a function, added instructions(elementToEdit.classList.remove('toggle');) to it 
//and only have to write isNotVisible(container3) instead of container3.classList.remove('toggle'); don't 
//forget to write onclick=makeVisible() in html

//like this// =>

/*function makeV(elementToEdit){
    elementToEdit.classList.add('toggle');
}
function makeInv(anything){
    anything.classList.remove('toggle')
}


function makeVisible(){
    const container3 = document.querySelector('.container3');
    makeV(container3)
}
function makeInvisible(){
    const container3 = document.querySelector('.container3');
    makeInv(container3)
}*/

// way3 (fastest and best way)//

function makeVisible2(){
    const container3 =document.querySelector('.container3')
    container3.classList.add('toggle')
}
function makeInvisible2(){
    const container3 =document.querySelector('.container3')
    container3.classList.remove('toggle')
}

/*
function integerplus(){
    const less = document.querySelector('.less');
    const number = document.querySelector('.number');
    const add = document.querySelector('.add');

    let num1=0;
    num1= num1 + 1;
    number.innerHTML= num1;

}
function integerminus(){
    const less = document.querySelector('.less');
    const number = document.querySelector('.number');
    const add = document.querySelector('.add');

    let num1 = 0;
    num1= num1 - 1;
    number.innerHTML= num1;

}*/




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


//para que desaparezca toda la compra


function eliminar(){
    const compra = document.querySelector('.compra')
    compra.classList.add('none')
	
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
 
 
 /*Chicken veggie salad-0
 Tacos-1
 Multon Curry-2
 Bravas-3
 Carrot Cake-4
 Cheesecake-5
 Brownie-6
 Pancakes-7
 Pizza-9
 let dishes =3
 switch(dishes){
     case 0:
         console.log("Chicken Veggie Salad")
    break;
    case 1:
        console.log("Tacos")
    break;
    case 3:
        console.log("Multton Curry")
    break;
    case 4:
        console.log("Bravas")
    break;
    case 5:
    console.log("Carrot Cake")
    break;
    case 6:
        console.log("Cheesecake")
    break;
    case 7:
        console.log("Brownie")
    break;
    case 8:
        console.log("Pancakes")
    break;
    case 9:
        console.log("Pizza")
    break;
 }

 */