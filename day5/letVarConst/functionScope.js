function f(){
    var a=20;
    let b="abc";
    const c=3.14;

    console.log("in function scope a:",a);
    console.log("in function scope b:",b);
    console.log("in function scope c:",c);
}

console.log("outside a:",a);
console.log("outside b:",b);
console.log("outside c:",c);