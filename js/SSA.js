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
function cosOf(alpha){
    return Math.cos(alpha * Math.PI /180);
}

function aSin(sinAlpha){
    return  (Math.asin(sinAlpha)*180   / Math.PI) ;
}

function aCos(sinalpha){
    return Math.acos(sinalpha )*180 / Math.PI    ;
}

function solveSide(c,A,C){
    return c* sinOf(A) / sinOf(C);
}

function solveSideCos(b,c,angleA){
    return Math.sqrt( Math.pow(b,2) + Math.pow(c,2) - 2*b*c *cosOf(angleA)     );
}


function solveAngle(a, c, C) {
    var sinA = a * sinOf(C) / c;
    return aSin(sinA);
}

const angleC2 = document.getElementById("C2");

angleC.addEventListener('focus', ()=>{
    angleC.value= solveAngle( c.value, b.value,  angleB.value);
    angleC2.value = 180 - angleC.value;
    

});

const angleA2 = document.getElementById("A2");

angleA.addEventListener('focus', ()=>  {
    angleA.value= complement(angleB.value, angleC.value);
    angleA2.value = complement( angleB.value, angleC2.value );   
});


a.addEventListener('focus', ()=> {
    a.value = solveSide(b.value, angleA.value, angleB.value);
});

a2.addEventListener('focus', ()=> {
    a2.value = solveSide(b.value, angleA2.value, angleB.value);
});
