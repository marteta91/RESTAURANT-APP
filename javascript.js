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


//intento de eliminar platos con icono papelera (solo desaparece si le das al plato)
let boxes = document.querySelectorAll('#delete div');

boxes.forEach(box => {
    box.addEventListener('click', Hidde)
})

function Hidde() {
    this.style.opacity= 0;
}
 //intentolista platos para la seleccion hacia la tercera pantalla, igual me he flipado//
 let dish one =Chicken veggie salad 
 let dish two=Tacos
 let dish three=Multon Curry
 let dish four=Bravas
 let dish five=Carrot Cake
 let dish six=Cheesecake
 let dish seven=Brownie
 let dish eight=Pancakes
 let dish nine=Pizza
 let dishes =3
 switch(dishes){
     case 0:
         console.log("Chicken Veggie Salad")
         function
    
    break;
    case 1:
        console.log("Tacos")
        document.write("Tacos");
    break;
    case 3:
        console.log("Multton Curry")
        document.write("Multton Curry");
    break;
    case 4:
        console.log("Bravas")
        document.write("Bravas");
    break;
    case 5:
    console.log("Carrot Cake")
    document.write("Carrot Cake");
    break;
    case 6:
        console.log("Cheesecake")
        document.write("Cheesecake");
    break;
    case 7:
        console.log("Brownie")
        document.write("Brownie");
    break;
    case 8:
        console.log("Pancakes")
        document.write("Pancakes");
    break;
    case 9:
        console.log("Pizza")
        document.write("Pizza");
    break;
 }

 /*funcion con jv para que se vean los palto en la primera pagina*/