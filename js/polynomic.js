const pol= document.getElementById("pol");
const polx= document.getElementById("polx");
const result= document.getElementById("result");
const x = document.getElementById("X");

const makeTable = document.getElementById("maketable");
const reset = document.getElementById("reset");
const tables = document.getElementById("tables");
const frameTable  = document.getElementById("frameTable");
const rows = document.getElementById("rows");
const start =   document.getElementById("start");
const interval = document.getElementById("interval");
const newWindow= document.getElementById("newWindow");

const coeffs = document.getElementsByClassName("poly");
const exponents = document.getElementsByClassName("polExp");
const results = document.getElementsByClassName("results");


function computeFunction(x){
    var y = 0;
    for (i = 0 ; i < exponents.length; i++){
        var partial =  (coeffs[i].value * Math.pow(x , exponents[i].value)    );
        y = y + partial;
    }
    return y;
}

function quotientDiff ( x, h){
    
    return (computeFunction(x +h) -computeFunction(x) )/ h;
}


function quotientDiffSecond ( x, h){
    return (quotientDiff(x +h, h) -quotientDiff(x,h) )/ h  ;

}


result.addEventListener('focus',() =>{
    var res=0;
    for ( i = 0 ; i < exponents.length ; i++ )
    {
        var partial =  (coeffs[i].value * Math.pow(x.value, exponents[i].value)    );
        res = res +   partial;
        results[i].value = partial;

        //document.write(i);
    }
    
    result.value = res;
});

makeTable.addEventListener("click",()=>{
 var inputX= Number(start.value);
 var   functionTable=document.createElement("table");
 var titles= document.createElement("tr");
 var t1 = document.createElement("th");
 var t2 = document.createElement("th");
 var t3= document.createElement("th");
  var t3= document.createElement("th");
  var t4= document.createElement("th");
  

 // titles (th)
 t1.textContent=" x ";
 t2.textContent=" y ";
 t3.textContent=" y' ";
 t4.textContent=" y'' ";

 titles.append(t1,t2,t3,t4);

 functionTable.appendChild(titles);
 
//each row 
for (var i = 0 ; i < rows.value  ; i++){
    var row = document.createElement("tr");
for (var j = 0 ; j <1 ; j++){
 //x
    var cell = document.createElement("td");
    var cellText = document.createTextNode(( inputX).toFixed(2));
    cell.appendChild(cellText);
    row.appendChild(cell);
//y
    var cellY = document.createElement("td")    ;
    var cellTextY = document.createTextNode(computeFunction(inputX).toFixed(2));
    cellY.appendChild(cellTextY);
    row.appendChild(cellY);

//y'
    h= 0.0001;
    var cellYt= document.createElement("td")  ;
    var cellTextYt = document.createTextNode(quotientDiff(inputX, h).toFixed(2));
    cellYt.appendChild(cellTextYt);
    row.appendChild(cellYt);

 //y'h
    h= 0.0001;
    var cellYtt= document.createElement("td")  ;
    var cellTextYtt = document.createTextNode(quotientDiffSecond(inputX, h).toFixed(2));
    cellYtt.appendChild(cellTextYtt);
    row.appendChild(cellYtt);

}
functionTable.appendChild(row);
inputX=inputX + Number( interval.value);
}

 tables.appendChild(functionTable);
 if (newWindow.checked == true){
     var newDoc= window.open("");

     newDoc.document.write('<html><head><style> td{text-align:right; }  td, th {width : 4em;} '
     +'table, td, th { border: 1px solid black;} table {border-collapse: collapse;}</style>'
     +' </head><body></body> </html>');
     newDoc.document.body.appendChild(functionTable);
     
 }
});

reset.addEventListener("click", ()=>{
    var child = tables.lastElementChild;
    while(child){
        tables.removeChild(child);
        child = tables.lastElementChild;
    }

});
