// Scope of var let and const in javascript

var x=1;//var doesn't throw any error if we re-define or re-declare the varaible

var x=2;
console.log(x);

//but when we use the keyword let. it throws the error
// let y=1;
// let y=2;//error
// console.log(y);


//Both var and let will allow reassignment
let a=1;
a=2;
console.log(a);

var b=2;
b=5;
console.log(b);


//const keyword do not alllow re-assignment of the variables
// const c=6;
// c=7;//error
// console.log(c);

//hence use let whenever you have the need of re assigning the value of a varaible but you do not want the value to be changed then use const.


//scopes

//global scope
var p=5;
let q=6;
const r=7;

console.log("Global:",p);
console.log("Global:",q);
console.log("Global:",r);

function myFunc(){
    console.log("Inside Function the value of global variable p:",p);
    console.log("Inside Function the value of global variable q:",q);
    console.log("Inside Function the value of global variable r:",r);
    
    {
    console.log("Inside Block the value of global variable p:",p);
    console.log("Inside Block the value of global variable q:",q);
    console.log("Inside Block the value of global variable r:",r); 
    }
}
myFunc();



function myFunc2(){
    var p=10;
    const r=12;
    console.log("Inside Function the value of global variable p which is reassigned in function:",p);
    console.log("Inside Function the value of global variable q:",q);
    console.log("Inside Function the value of global variable r which is reassigned in function:",r);
    
    {
        var p=15;
        const r=20;
    console.log("Inside Block the value of global variable p which is reassigned in block:",p);
    console.log("Inside Block the value of global variable q:",q);
    console.log("Inside Block the value of global variable r which is reassigned in block:",r); 
    }
}
myFunc2();




function myFunc3(){
    var p=30;
    const r=31;
    
    {
     var p=35;//var is function scoped not block scope, hence it will override the value of p=30 to p=35
     const r=38;//const is block scope
     console.log("Inside Block the value of global variable p:",p);
     console.log("Inside Block the value of global variable q:",q);
     console.log("Inside Block the value of global variable r:",r); 
    }
    
    console.log("Inside Function the value of global variable p:",p);
    console.log("Inside Function the value of global variable q:",q);
    console.log("Inside Function the value of global variable r:",r);
}
myFunc3();


/*
Hence:
Global: everywhere in the program;
Local: in a function block. not global;

NOTE: var initiates function () scoped variables; let and const initiates block{}level scope


AVOID using var, stick with const and let;
use const if you want the value to not to be changed
use let if you know in the program you will reassign the value
