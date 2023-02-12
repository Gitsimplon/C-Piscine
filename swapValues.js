
var a = 10;
var b = 20;

var swap = a;
a = b;
var result = "New value of a:"+ a;
console.log(result);
a = swap;
b = a;

result = "New value of a:"+ b;
console.log(result);
