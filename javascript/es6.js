"use strict"

let asif = "I am a boy";
const ashi = "I am a girl";
asif = "Asif is a boy."
document.writeln("<br>" + asif + ashi);
document.writeln("<br>" + ashi);
let a =10; a =20;
document.writeln("<br>" + a);
var func = function(x,y){ return x*y }; 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result) 
} 
product();
var foo = (x)=>x+15
console.log(foo(25));
var msg = ()=> console.log("You're awesome");
msg();

function* ask() { 
    const name = yield "What is your name?"; 
    const sport = yield "What is your favorite sport?"; 
    return `${name}'s favorite sport is ${sport}`; 
 }  
 const it = ask(); 
 console.log(it.next()); 
 console.log(it.next('Ethan'));  
 console.log(it.next('Cricket')); 
 