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


function integerplus(){
    const less = document.querySelector('.less');
    const number = document.querySelector('.number');
    const add = document.querySelector('.add');

    let integer=0;
    integer+= 1;
    number.innerHTML=integer;

}
function integerminus(){
    const less = document.querySelector('.less');
    const number = document.querySelector('.number');
    const add = document.querySelector('.add');

    let integer=0;
    integer-= 1;
    number.innerHTML=integer;

}