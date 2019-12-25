const spM =document.getElementById("m");
const spX1 =document.getElementById("x1");
const spY1 =document.getElementById("y1");
const spSolve = document.getElementById("solvePointSlope");
const spFormula = document.getElementById("slopePointFormula");
const spIntercept = document.getElementById("spIntercept");
const spToSlopeIntercept = document.getElementById("spToSlopeIntercept");

function sign(num){
    if (num <0){
    return "-";}
    else{
    return "+";}
}


spSolve.addEventListener('focus' ,()=>{
    var spIntercept=0;
    var x1 = spX1.value;
    var y1 = spY1.value;
    var m = spM.value;
spFormula.innerHTML= "y " + sign(-y1) + Math.abs(y1)  + " = m(x"+ sign(-x1)+Math.abs(x1)+")" ;
var spIntercept = Number(-x1) *Number(m )+ Number(y1);
spIntercept.value=spIntercept;
spToSlopeIntercept.innerHTML= "y = "+ m + "x" + sign(spIntercept) + Math.abs(spIntercept);
});

