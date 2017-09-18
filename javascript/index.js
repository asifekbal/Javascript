
document.write("Hello World!!!<br>");
var a = 10;
var b = "asif";
var c = function myFunc() {
    document.writeln("This is a Function");
    // window.location="http://www.google.com";
}
var d = true;
document.writeln("<b>" + typeof a + "</b> <br>");
document.writeln(typeof b + "<br>");
document.writeln(typeof c + "<br>");
document.writeln(typeof d + "<br>");
c.apply();
var f = new Function("x","y","return x*y");
document.writeln(f(10,20));
var ck = document.cookie;
function addPrice(price) {
    this.price = price;
}
var book = new Object();
book.title = "The Complete Java";
book.author = "Asif Ekbal";

function magzine(publisher,year) {
    this.publisher = publisher;
    this.year = year;
    this.price = addPrice;
}
magzine.prototype.lang = null;
var mag = new magzine("Tutorialspoint","2015");
mag.price(10);
mag.lang="Hindi";

document.writeln("<br> Book name : " + book.title);
document.writeln("<br> Book author : " + book.author);
document.writeln("<br> Magzine Publisher : " + mag.publisher);
document.writeln("<br> Magzine Year : " + mag.year);
document.writeln("<br> Magzine price : " + mag.price);
document.writeln("<br> Magzine language : " + mag.lang);

var n = new Number(1217);
var s = new String("Hi Asif, How are you");
var fruits = ["apple","mango",10,"banana","guava",25];
document.writeln("<br> Number value : " + n.constructor);
document.writeln("<br> String value : " + s.toUpperCase());
document.writeln("<br> String value : " + fruits.forEach(function (val) {
    document.writeln("<br>" + val);
}));

var d = new Date();
document.writeln("<br>" + d);
document.writeln("<br>" + Math.sqrt(144));
asif = "I am a boy";
document.writeln("<br>" + asif);




