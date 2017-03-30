function decimalbinary() {
var a = document.getElementById("decimal").value;
var r = a;
var original = a;
var c = 0;
var d = [];
var e = 0;
while (e*1!==r*1) {
e = 0;
for (var b=1;c===0;b*=2) {
	if (a*1-b*1<a/2) {
		d.push(b);
		c=1;
    a-=b;
	}
}
c=0;
for (var f=0;f<d.length;f++) {
	var g=d[f];
	e+=g;
}
}
var z = 0;
var j = []
for (var x=1; x<r*2; x*=2) {
	for (var y=0;y<d.length;y++) {
		if (d[y]===x) {
			j.push(1);
			z=1;
		} 
	} if (z===0) {
		j.push(0);
	}
	z=0;
}
j.reverse();
if (j[0] === 0) {
	delete j[0];
}
var k = j.join("");
document.getElementById("dec").innerHTML = "The original decimal number was " + original;
document.getElementById("bin").innerHTML = "The binary number is " + k;
}


function binarydecimal() {
var number = document.getElementById("binary").value;
var original = number;
var dup = number;
output = [];
sNumber = number.toString();
var count=0;
var add=0.5;
for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}
for (var a=output.length*1-1;a>-1;a--) {
	add*=2;
	if (output[a]===1) {
		count+=add;
	}
}
document.getElementById("bina").innerHTML = "The original binary number was " + original;
document.getElementById("deci").innerHTML = "The decimal number is " + count;
}
