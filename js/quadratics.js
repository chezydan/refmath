const solve = document.getElementById("solve") ;
const discriminant = document.getElementById("discriminant");
const res1 = document.getElementById("result1");
const res2 = document.getElementById("result2");

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");


class Complex{
    constructor(r,i=0){
        this.i = i;
        this.r = r;

    }
    display(){
            return this.r +"+"+this.i +"i" ;
    }
    getR(){
        return this.r;
    }
    getI(){
        return this.i;
    }

}


class Quadratic{
    constructor(a,b,c){
        this.a=a;
        this.b= b;
        this.c =c;
    }
    getDiscriminant(){
        return ( Math.pow(this.b ,2))  - (4 *this.a * this.c);
    }

    imgDisplay(i){
        return i+"i";}
        

    Solve(){
        var discr = this.getDiscriminant();
        //sqDisc = Math.sqrt(4);
       // res1.innerHTML=Math.sqrt(discr,2);
            
       var Roots= new Array();
        if (discr < 0){
            
            var negSqDisc = Math.sqrt(discr * (-1) , 2);
            var real =  -this.b/ (2*this.a);
            var imag = negSqDisc /(2*this.a);
            //compRes= new Complex(1,2);//(-this.b/ (2*this.a) , negSqDisc /(2*this.a));
            
            Roots.push(real +"+" +this.imgDisplay(imag));
            Roots.push(real +"-"+(this.imgDisplay(imag)));
            return Roots;
        }
        else{
            
            var sqDisc = Math.sqrt(discr,2);
           // res1.innerHTML=sqDisc;
            Roots.push( (-this.b + sqDisc)/  (2* this.a ).toFixed(3)) ;
           
            Roots.push( (-this.b - sqDisc)/  (2* this.a).toFixed(3)) ;

            return Roots;
        }
    }
}


    c1 = new Complex(1,3);
qua = new Quadratic(Number(a.value),Number(b.value),Number(c.value));

solve.addEventListener("click", ()=>{
    qua = new Quadratic(Number(a.value),Number(b.value),Number(c.value));
 
    var d = qua.getDiscriminant();
    discriminant.value =d;
    var s = qua.Solve();
    res1.value = s[0];//.toFixed(3);
    
        res2.value = s[1];//.toFixed(3);
});

