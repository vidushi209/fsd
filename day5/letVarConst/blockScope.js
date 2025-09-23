{
    var a=20;
    let b="abc";
    const c=3.14;

    console.log("in block scope a:",a);
    console.log("in block scope b:",b);
    console.log("in block scope c:",c);
}

console.log("outside block scope a:",a);
console.log("outside block scope b:",b);
console.log("outside block scope c:",c);