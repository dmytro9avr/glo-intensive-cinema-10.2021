const schemeSvg = document.querySelector("#scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
// const totalPriceTag создали переменную totalPriceTag 
// document.querySelector(".price-total") отправились искать по документу (в котором скрипт) обэкт с классном .price-total 
// document.querySelector(".price-total") сказали что она равна с обэктом под классом .price-total


let cost = 200;
// let - обявить переменную. cost - ее название и =200  значение
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
   if (!event.target.classList.contains("booked")) {
      (event.target.classList.toggle("chosen"));
      let totalChosen = schemeSvg.querySelectorAll(".chosen").length 
      totalPrice = totalChosen * cost;
      totalPriceTag.textContent = totalPrice;
   }
});


// const schemeSvg = document.querySelector("#scheme-svg");
// schemeSvg.addEventListener("click", (event) => {
//    if (!event.target.classList.contains("booked")) {
//       console.log("busy");
//       (event.target.classList.toggle("chosen"));
//    }
// });
//  сделали проверку "не содержит?" (!event.target.classList.contains("booked"))
//    не содержит - вешаем другой класс  (event.target.classList.toggle("chosen"));


// const schemeSvg = document.querySelector("#scheme-svg");
// schemeSvg.addEventListener("click", (event) => {
//    if (event.target.classList.contains("booked")) {
//       console.log("busy");
//    }
//    else (event.target.classList.toggle("chosen"));
// });
   // мой вариант. содержит - в консоль
   //             не содержит - добавить класс


// const schemeSvg = document.querySelector("#scheme-svg");
// schemeSvg.addEventListener("click", (event) => {
//    if (!event.target.classList.contains("booked")) {
//       console.log("не занято");
//    }
// });
   // проверяем не занято ли место


// if (event.target.classList.contains("booked")) проверка на соответствие
// if (!event.target.classList.contains("booked")) проверка на НЕсоответствие



// const schemeSvg = document.querySelector("#scheme-svg");
// schemeSvg.addEventListener("click", (event) => {
//    if (event.target.classList.contains("booked")) {
//       console.log("занято");
//    }
// });
      // проверяем занято ли место 

// const schemeSvg = document.querySelector("#scheme-svg");
// schemeSvg.addEventListener("click", (event) => {
//   event.target.classList.toggle("chosen");
// });
   // дает класс chosen елементу который кликаем




// const schemeSvg = document.querySelector("#scheme-svg");
// schemeSvg.addEventListener("click", (Event) => {
//    console.log(Event.target);
// });
// Event (клики) с указание на кого именно (target) в консоль