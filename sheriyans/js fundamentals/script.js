// - keywords like for if else var const let
var num = 5;

// - var const let
const PI = 3.14; // Value doesn't change

// Hoisting - Hoisting is JavaScript's default behavior of moving declarations to the top
// In other words; a variable can be used before it has been declared
console.log(day);
day = "Monday";
console.log(day);
var day;

// Types in JS
// primitives = number, string, null, undefined, boolean
// references = [] () {}
var a = 12;
var b = a;
b = b+2;

var A = [10,12, 14];
var B = A;
B[0] = 20;

// Conditionals
if(true){

}
else{

}


// Loops - for
for(var i = 0; i<5; i++){
    console.log(i);
}

// while(){

// }


// Functions
function doStuff(val){
    console.log(val);
}
doStuff("Done");

// Arrays - push pop shift unshift
var arr = [1,2,3];
arr.pop();
arr.push(4);
arr.shift();
arr.unshift(5);
arr.splice(1,1);

// Objects
var obj = {}; // blank obj
var values = {
    name : "Aditya",
    enrollmentno: "20UCS119",
    semester: 7,
    kuchhbolo : function(){} // Method of an object
};

console.log(values.name);

// Props vs Methods
// name, enrollmentno semester etc are props or properties
// we can change values of props 