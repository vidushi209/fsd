const num1= document.getElementById("num1").value;
const num2= document.getElementById("num2").value;
function add(){
    console.log(parseFloat(num1.value)+parseFloat(num2.value));
    console.log("add");

}
function sub(){
    console.log(parseFloat(num1.value)-parseFloat(num2.value));
    console.log("sub");
}
function mul(){
    console.log(parseFloat(num1.value)*parseFloat(num2.value));
    console.log("mul");
}
function div(){
    console.log(parseFloat(num1.value)/parseFloat(num2.value));
    console.log("div");
}