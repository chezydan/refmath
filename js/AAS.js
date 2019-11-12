const angleB = document.getElementById("B");
const angleA = document.getElementById("A");
const angleC = document.getElementById("C");
const c = document.getElementById("c");
const b = document.getElementById("b");
const a = document.getElementById("a");

function complement(A,C){
    return 180-A-C;
}
function sinOf(alpha){
    return Math.sin(alpha * Math.PI /180);
}

function solveSide(c,A,C){
    return c* sinOf(A) / sinOf(C);
}

angleB.addEventListener('focus', ( )=>{
    angleB.value= complement( angleA.value , angleC.value);
   
}
);

a.addEventListener('focus', ()=>{
    a.value=solveSide(c.value, angleA.value, angleC.value);
});


b.addEventListener('focus',()=>{
    b.value=  solveSide(c.value, angleB.value, angleC.value);
});
