//10
let A=[], i, sum=0;
for (i=0; i<5; i++) {
    A[i]=Math.random() * (100) + 1;
    sum=sum+A[i]*A[i];
}
alert (`Сумма квадратов элементов = ${sum}`);

//11
let d = prompt("Введите двузначное число", 55);
d = parseInt(d,10);
alert(d.toString(2));

//12
let arr=['Оаоаоаоа', 'Привет', 'Аааа','Хахаха','ау'], k=0; //11 символов "а"
for (i=0; i < arr.length; i++) k+=arr[i].split('а').length-1
alert(k);

//13
let stud=['Иванов Иван, Петров Пётр, Ульянова Ульяна'];
alert(stud[0].split(', '));

//14
function HW(hello, world) {
    alert(hello+', '+world+'!')
}
HW ('Привет', 'мир');

//15
let m='строка';
function Vivod() {
m='ddd';
alert(m);
}
Vivod();

//16
function summa(v,y){
    return v+y;
}
let h = summa(5,11);
alert(h);
