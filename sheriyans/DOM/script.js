// 4 Pillars of DOM
// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS  - Must write in camelCase
// 4. Event Listener

// var a = document.querySelector("h1");
// a.innerHTML = "HTML CHANGED";

// a.style.color = "red";
// console.log(a);

// a.addEventListener("click", function(){
//     a.style.color = "green";
// });

var btn = document.querySelector("button");
var bulb = document.querySelector("#bulb");

var flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        console.log("Bulb ON");
    }else{
        bulb.style.backgroundColor = "transparent";
        console.log("Bulb OFF");
    }
    flag = !flag;
});