const solve = document.getElementById("solve") ;
const discriminant = document.getElementById("discriminant");
const res1 = document.getElementById("result1");
const res2 = document.getElementById("result2");

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");

class Quadratic{
    constructor(a,b,c){
        this.a=a;
        this.b= b;
        this.c =c;
    }
    getDiscriminant(){
        return ( Math.pow(this.b ,2))  - (4 *this.a * this.c);
    }

    Solve(){
        var discr = this.getDiscriminant();
        //sqDisc = Math.sqrt(4);
       // res1.innerHTML=Math.sqrt(discr,2);
            
        if (discr < 0){
            
            return null;
        }
        else{
            var Roots= new Array();
            var sqDisc = Math.sqrt(discr,2);
           // res1.innerHTML=sqDisc;
            Roots.push( (-this.b + sqDisc)/  (2* this.a )) ;
            //if (discr >0)
               Roots.push( (-this.b - sqDisc)/  (2* this.a)) ;

            return Roots;
        }
    }
}

qua = new Quadratic(Number(a.value),Number(b.value),Number(c.value));

solve.addEventListener("click", ()=>{
    var d = qua.getDiscriminant();
    discriminant.value =d;
    var s = qua.Solve();
    res1.innerHTML = s[1];
    res2.innerHTML = s[0];
});
