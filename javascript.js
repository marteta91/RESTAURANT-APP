let plates = [
  {
    id: 0,
    price: 12,
    name: "Chicken Veggie Salad",
    category: "Dinner",
    description: "With cheese sauce",
    img: "images/dishes/chicke_veggie_salad.jpg",
    buttonplus: "+",
    buttonminus: "-",
    number: "0",
  },

  {
    id: 1,
    price: 8,
    name: "Tacos",
    description: "With Guacamole",
    img: "images/dishes/tacos.jpg",
    buttonplus: "+",
    category: "fastfood",
    buttonminus: "-",
    number: "0",
  },

  {
    id: 2,
    price: 12,
    name: "Mutton Curry",
    description: "With with basmati rice<",
    img: "images/dishes/curry.jpg",
    buttonplus: "+",
    buttonminus: "-",
    category: "dinner",
    number: "0",
  },

  {
    id: 3,
    price: 5,
    name: "Bravas",
    category: "fastfood",
    description: "With salsa picante",
    img: "images/dishes/patatas-bravas.jpg",
    buttonplus: "+",
    buttonminus: "-",

    number: "0",
  },

  {
    id: 4,
    price: 3,
    name: "Carrot Cake",
    description: "One portion",
    img: "images/dishes/carrot-cake.jpg",
    buttonplus: "+",
    buttonminus: "-",
    category: "desserts",
    number: "0",
  },

  {
    id: 5,
    price: 3,
    name: "Cheesecake",
    description: "One portion",
    category: "desserts",
    img: "images/dishes/cheesecake.jpg",
    buttonplus: "+",
    buttonminus: "-",
    number: "0",
  },

  {
    id: 6,
    price: 3,
    name: "Brownie",
    description: "One portion",
    category: "desserts",
    img: "images/dishes/brownie.jpg",
    buttonplus: "+",
    buttonminus: "-",
    number: "0",
  },

  {
    id: 7,
    price: 8,
    name: "Pancakes",
    category: "desserts",
    description: "6 unites",
    img: "images/dishes/pancakes.jpg",
    buttonplus: "+",
    buttonminus: "-",
    number: "0",
  },

  {
    id: 8,
    price: 8,
    name: "Pizza",
    category: "Dinner",
    description: "Three portions",
    img: "images/dishes/pizza.jpg",
    buttonplus: "+",
    buttonminus: "-",
    number: "0",
  },
];
let containerbox = document.querySelector(".dishes");
let otherPlates = document.querySelector(".buy");
let subTotal = document.querySelector(".num Subtotal");
let button = document.querySelectorAll(".nav");

function renderProducts(menuItem) {
  plates.forEach((yass) => {
    containerbox.innerHTML += `
   <div class="column1">
     <div class="dish one">
         <img class="img-dish-one" onclick="makeVisible2()" src="${yass.img}">

           <div class="dish-description">
           <div class="dish-name">
               <h3 class="dish-price">$${yass.price}</h3>
               <h2 class="dish-title">${yass.name}</h2>
               <h3 class="dish-subtitle">${yass.description}</h3>

           </div>
           
           <div class="quantity">
               <button onclick ="addToCart(${yass.id})" class="addToCart-right" >Add To Cart</button>
           </div>

       </div>

   </div>
    `;
  });
}

renderProducts();

let cart = [];

function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    alert("product already in cart");
  } else {
    const item = plates.find((yass) => yass.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
    alert("product added to cart; Scroll down to open your cart");
  }
  updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubtotal();
}
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUNits;
    totalItems += item.numberOfUNits;
  });
  subTotal.innerHTML = `subTotal (${totalItems} items): $${totalPrice}`;
}

function renderCartItems() {
  otherPlates.innerHTML = "";
  cart.forEach((item) => {
    otherPlates.innerHTML += `
        <div class="dish five">
        <img class="img-dish-one" onclick="makeVisible2()" src="${item.img}">

          <div class="dish-description">
          <div class="dish-name">
              <h3 class="dish-price">${item.price}</h3>
              <h2 class="dish-title">${item.name}</h2>
              <h3 class="dish-subtitle">${item.description}</h3>

          </div>
          
          <div class="quantity">
              <button onclick = "changeNumberOfUnits('minus', ${item.id})" class="left" id="minus">-</button>
              <span class="number" id="numberPlace">${item.numberOfUnits}</span>
              <button onclick = "changeNumberOfUnits('plus', ${item.id})" class="right" id="plus">+</button>
          </div>

        </div>

     </div>
  `;
  });
}
//change number of units
//action is the minus or pluss on the onclick function
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
}

button.forEach(function (btn) {
  btn.addEventListener("click", function addIt(e) {
    let category = e.currentTarget.dataset.id;
    if (category === plates.category) {
      plates.forEach((rojo) => {
        cate.innerHTML = "";
        cate.innerHTML += `
       <div class="column1">
         <div class="dish one">
             <img class="img-dish-one" onclick="makeVisible2()" src="${rojo.img}">
    
               <div class="dish-description">
               <div class="dish-name">
                   <h3 class="dish-price">${rojo.price}</h3>
                   <h2 class="dish-title">${rojo.name}</h2>
                   <h3 class="dish-subtitle">${rojo.description}</h3>
    
               </div>
               
               <div class="quantity">
                   <button class="left" id="minus">${rojo.buttonminus}</button>
                   <span class="number" id="numberPlace">${rojo.number}</span>
                   <button onclick ="addToCart(${rojo.id})" class="right" id="plus">${rojo.buttonplus}</button>
               </div>
    
           </div>
    
       </div>
        `;
      });
    }
  });
});

cate = document.querySelector(".cate");
pic = document.querySelector(".pic");
console.log(cate);

// Imprime nombres de variables y valores usando Array.forEach
//Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
//  print(val + " -> " + obj[val]);

//para ver el carrito
function makeVisible1() {
  const container2 = document.querySelector(".container2");
  container2.classList.add("toggle");
}
//para ir atrás de carrito a pagina 1
function makeInvisible1() {
  const container2 = document.querySelector(".container2");
  container2.classList.remove("toggle");
}
//para ver detalles de la foto
function makeVisible2() {
  const container3 = document.querySelector(".container3");
  container3.classList.add("details");
}

//para salir de detalles foto (pag3)
function makeInvisible2() {
  const container3 = document.querySelector(".container3");
  container3.classList.remove("details");
}
//para que desaparezca toda la compra
function eliminar() {
  const compra = document.querySelector(".compra");
  const empty = document.querySelector(".empty");
  compra.classList.add("none");
  empty.classList.add("show");
}
