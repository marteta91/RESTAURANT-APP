const navSlide = function(){
    const burger= document.querySelector ('.burger');
    const container2=document.querySelector('.container2');
    const back =document.querySelector('.back');
    const container1 =document.querySelector('.container1');


    burger.addEventListener('click', function(){
    container2.classList.add('active');
  


    });

    back.addEventListener('click', function(){
    container2.classList.remove('active');
    

    });
}
navSlide();