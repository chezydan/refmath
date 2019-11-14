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

function solveAngleCos(a,b,c){
    return aCos(  (Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2)  )/ (2*b*c)) ;
}


function solveAngle(a, c, C) {
    var sinA = a * sinOf(C) / c;
    return aSin(sinA);
}

angleA.addEventListener('focus' ,() =>{
    angleA.value =solveAngleCos(a.value,b.value, c.value);
});
angleB.addEventListener('focus' ,() =>{
    angleB.value =solveAngleCos(b.value,a.value, c.value);
});
angleC.addEventListener('focus' ,() =>{
    angleC.value =solveAngleCos(c.value,b.value, a.value);
});
