const Solve = document.getElementById("solve");
const Result = document.getElementById("result");

const a =document.getElementById("a");
const b =document.getElementById("b");
const C =document.getElementById("C");

const sinC=document.getElementById("sinC");
const Display=document.getElementById("display");
Solve.addEventListener('click', () => {
    Result.textContent=  (Math.sin(C.value * Math.PI / 180)*a.value*b.value*(1/2)).toFixed(3);
    sinC.innerHTML ="sin(C)="+ ((Math.sin(C.value * Math.PI /180))).toFixed(3);
});


a.addEventListener('input',displayABsinStatus);
b.addEventListener('input',displayABsinStatus);
C.addEventListener('input', displayABsinStatus);

