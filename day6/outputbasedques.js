var a=20;
console.log(a);
a=30;
console.log(a);

function fun(){
    console.log(a);
    var a=45;
    console.log(a);
}
fun();
console.log(a);

function f(){
    a=b=90;
    console.log(typeof a);
    console.log(typeof b);
}
f();
console.log(a);
console.log(b);