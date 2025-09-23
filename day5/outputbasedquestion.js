var a=20;
console.log(a);
b=30;
console.log(b);

function f(){
    console.log(a);
    var a=45;
    console.log(a);
}
f();
console.log(a);

function f(){
    a=b=90;
    console.log(typeof a);
    console.log(typeof b);
}