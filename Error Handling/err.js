//dom selector
/*
let x = document.querySelector(".message").value;
let addNumber = document.querySelector(".button");
let message = document.querySelector(".err");
addNumber.addEventListener("click",addfun);
function addfun(e) {
    e.preventDefault();
    try {
        if (x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    } catch (error) {
        message.innerHTML = "Input is " + error;
    }
}
*/


// try {
//     adkldf
// } catch (error) {
//     console.log(error.message);
// }

console.log(window === globalThis);