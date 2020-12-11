//1
alert("Hello world!");

//2
alert(10 + 7);

//3
const v=5
alert(v+2+3);

//4
let a = 2, b = "Привет"
alert(b / a);

//5
let c = ", м", d = "ир!"
alert(b + c + d);

//6
let k
alert(k);

//7.1
let f=false
alert(f + "=" + typeof f);
f = String(f);
alert(f + "=" + typeof f);

//7.2
let l=10, m=1000
alert(m/l)
alert(typeof (m/l));

//7.3
let n="777",p=333
alert(n+p);

//8
a=5//коэф.перед x^2
b=2//коэф.перед x
c=1//свободный член
d=b*b-4*a*c;
if (d<0) {
    alert("Нет корней")
} else { if (d===0)
    alert("x = "+(-b/2*a))
else {
    alert("x1 = "+(-b+Math.sqrt(d))/(2*a)+ "\n" +"x2 = "+(-b-Math.sqrt(d))/(2*a))
}}

//9
a=5;
b=10;
let s=2;
alert(`Начало диапазона: ${a}\n`+`Конец диапазона: ${b}\n`+`Шаг: ${s}\n`);
for (a; a<=b; a+=s) {
    alert(`Значение x = ${a}\n`+`y = ${a*a+a*a*a-3*a}\n`)
}



