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
    return Math.acos(sinalpha )*180 / Math.Pi    );
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


a.addEventListener('focus', ()=>{
    a.value= solveSideCos(b.value, c.value, angleA.value);
});


angleC.addEventListener('focus', ( )=>{
    if (c.value < b.value){
    angleC.value= solveAngle(c.value, a.value, angleA.value);
    angleB.value= complement( angleA.value , angleC.value);
    }
    else{
        angleB.value= solveAngle(b.value , a.value, angleA.value);
        angleC.value = complement(angleA.value, angleB.value);
    }
}
);




