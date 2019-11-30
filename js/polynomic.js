const pol= document.getElementById("pol");
const polx= document.getElementById("polx");
const result= document.getElementById("result");
const x = document.getElementById("X");

const makeTable = document.getElementById("maketable");
const frameTable  = document.getElementById("frameTable");
const rows = document.getElementById("rows");
const start =   document.getElementById("start");
const interval = document.getElementById("interval");


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
 t1.textContent=" x ";
 t2.textContent=" y ";
 titles.appendChild(t1);
 titles.appendChild(t2);
 frameTable.appendChild(titles);
 
 
for (var i = 0 ; i < rows.value  ; i++){
    var row = document.createElement("tr");
for (var j = 0 ; j <1 ; j++){
    var cell = document.createElement("td");
    var cellText = document.createTextNode(inputX);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cellY = document.createElement("td")    ;
    var cellTextY = document.createTextNode(computeFunction(inputX));
    cellY.appendChild(cellTextY);
    row.appendChild(cellY);
}
functionTable.appendChild(row);
inputX=inputX + Number( interval.value);
}

 frameTable.appendChild(functionTable);
});