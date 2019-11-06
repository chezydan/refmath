const Solve = document.getElementById("solve");
const Result = document.getElementById("result");

const a =document.getElementById("a");
const b =document.getElementById("b");
const C =document.getElementById("C");

const sinC=document.getElementById("sinC");
Solve.addEventListener('click', () => {
Result.textContent=  Math.sin(C.value * Math.PI / 180)*a.value*b.value*(1/2);

sinC.value =Math.sin(C.value * Math.Pi /180);

});