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


// подробный разбор проделанного.

// const schemeSvg = document.querySelector("#scheme-svg");
// 1 const - говорим что сейчас дадим имя для переменная?, область в которой будут проводится действия
// 2 schemeSvg - название переменной 
// 3 document - что-то типа создай документ куда ..
// 4 querySelector - перебери весь документ (до подключения JS)
// 5 ("#scheme-svg") - и добавь все значения входящии в область #scheme-svg
//                       в данном случае это DIV с ID, в котором много элементов. все они добавятся

// const totalPriceTag = document.querySelector(".price-total");
// аналогично. только сдесь мы находим одну строчку куда будем добавлять сумму 

// let cost = 200;
// обявили переменную (let) 
// с именем cost
// = 200 равную числу

// let totalPrice = 0;
// аналогично. сказали что начальное значение переменной totalPrice равно 0

// большой блок|||||
//   |||||||||||||||

// schemeSvg.addEventListener("click", (event) => {
   // schemeSvg. - говорим что в переменной schemeSvg. (блок с айдишкой)
   // addEventListener - "слушать события"
   // ("click",  - нажатие 
   // (event)  - когда произошло событие  ("click",
   // => - запустить следующую функцию ((выполнить?)  => {...} ) 
   
//    if (!event.target.classList.contains("booked")) {
   // if - если   () - условия для если
   // !event. - евент НЕсоответствует след выражению
   //  event. - евент ДА соответствует след выражению
   //  .target - цель по отношению к которой произошло событие что мы СЛУШАЛИ через addEventListener
   //  .classList  - перечень класов обэкта..  .contains("booked")) - содержит . айди, класс, тип?
   //  выполняэться следующая функция:

//       (event.target.classList.toggle("chosen"));
   //  !event. - евент НЕсоответствует след выражению
   //  event. - евент ДА соответствует след выражению
   //  .target - цель по отношению к которой произошло событие что мы СЛУШАЛИ через addEventListener
   //  toggle("chosen")); добавить класс? тект?

//       let totalChosen = schemeSvg.querySelectorAll(".chosen").length 
// let - создаем переменную с именем  totalChosen (для более удобного подсчета) 
// schemeSvg. - в обэкте schemeSvg.
// querySelectorAll(".chosen") - выбрать все обэкти  - с классом chosen
// length - сколько их. 1,2,3,4,5 - 5 позиций. длина 5? // 

//       totalPrice = totalChosen * cost;
//  переменная totalPrice = переменная totalChosen * на стоимость cost 

//       totalPriceTag.textContent = totalPrice;
//   totalPriceTag - элемент что мы определили, найдя при помощи querySelector (текстовая строка)
//  textContent - говорим что текст внутри будет записан как переменная totalPrice
//    }
// });


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||




// Конец js на странице


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