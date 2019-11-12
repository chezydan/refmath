
const bu=document.getElementById("butSin");



bu.addEventListener('click', ()=>{
    alert("hi");
});



function sinOf(alpha){
    return Math.sin(alpha * Math.PI /180);
}

function displaySin(elem){
    alert(t);
   // elem.value="test";
}

function test(t){
    alert("test");
}
const rulSINsinA= document.getElementById("rulSINsinA");
const rulSINA= document.getElementById("rulSINA");

var t = "aasdf";
rulSINA.addEventListener('blur',    function() {displaySin(t)}, false );
bu.addEventListener('click',function(){ displaySin(t)}, false);