const pol= document.getElementById("pol");
const polx= document.getElementById("polx");
const result= document.getElementById("result");
const x = document.getElementById("X");


const numbers = document.getElementsByClassName("poly");
const exponents = document.getElementsByClassName("polExp");
const results = document.getElementsByClassName("results");


result.addEventListener('focus',() =>{
    var res=0;
    for ( i = 0 ; i < exponents.length ; i++ )
    {
        var partial =  (numbers[i].value * Math.pow(x.value, exponents[i].value)    );
        res = res +   partial;
        results[i].value = partial;

        //document.write(i);
    }
    
    result.value = res;
});