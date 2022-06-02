let increse_btn = document.querySelector(".increase_btn");
let decrese_btn = document.querySelector(".decrease_btn")


let count_value = document.querySelector(".counter");
let parse_value = parseInt(count_value.innerText);



increse_btn.addEventListener("click", ()=>{
     count_value.innerText = parse_value++;

     if(parse_value >= 0) {
          count_value.style.color = "green";
     }
})


decrese_btn.addEventListener("click", ()=>{
     count_value.innerText = parse_value--;

     if(parse_value <= -2) {
          count_value.style.color = "red";
     }
})