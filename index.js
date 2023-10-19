// 1.WAYS TO PRINT IN Js
//console.log("Hello World");
//alert("me");
//document.write("This is document write")

//2. Javascript console API
// console.log("Hello World", 3 + 4 + 6 + 3, "Another way");
// console.warn("this is a warning")
// console.error("This is an error")

// 3.Js Variables
// vaariables are containers to store data values
var num1 = 18;
var num2 = 2.9999999999999;
console.log(num1 + num2);

//4.DATA TYPES IN Js

//strings
var str1 = "This is a string";
var str2 = 'This is also a string in single quote';

//Objects
var marks = {
    annie: 20,
    bobby: 57,
    henry: 88.74
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b)

var und = undefined;
console.log(und)

var n = null;
console.log(n);

var arr = [1, 2, "abc", 3, 4, 5]
console.log(arr);
console.log(arr[3]);

// OPERATORS IN Js
var a = 34;
var b = 56;
console.log("The value of a+b is", a + b);

//Assignment Operators
var c = b;
c /= 2;
console.log(c);

//Comparison Operators 
var x = 34;
var y = 344;
console.log(x != y)
console.log(x > y)
//function
function avg(j, h) {
    return (j + h) / 2;
}
k = avg(5, 11);
s = avg(9, 10);
console.log(s, k);

//condition in Js

var age = 8;
if ((age > 18)) {
    console.log('You are not a kid');
}
else {
    console.log('You are a kid')
}
//loops in java

var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
}
array.forEach(function (element) {
    console.log(element);
})

const at = 0;//constant

let j = 5;
while (j<array.length) {
    console.log(array[j]);
    j++; 
}
let myArr = ["Fan","Camera",34,null,true];
//Array method
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push('joya');
myArr.shift()//remove 1st element
myArr.unshift("Henry")
console.log(myArr);

//STRINGS METHODS IN Js
let myString = "Women Empowerment is on peak nowadays";
console.log(myString.length)
console.log(myString.indexOf("is"));
console.log(myString.slice(0,18));

let myDate = new Date()
console.log(myDate);

//DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('button')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement);

// Selecting using Query
sel = document.querySelector('.container')
console.log(sel)//only one element will be selected
sel = document.querySelectorAll('.container')
console.log(sel) 

function clicked() {
    console.log('The button was clicked')
}
window.onload = function() {
    console.log('The document was loaded')
}
//Events in Js
firstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
        console.log('Clicked on container')
})
firstContainer.addEventListener('mouseover',function(){
    console.log('Mouse on container')
})
firstContainer.addEventListener('mouseout',function(){
    console.log('Mouse out of container')
})
firstContainer.addEventListener('mouseup',function(){
    console.log('Mouse up when clicked on container')
})

//Arrow Functions
summ = (a,b)=>{
    return a+b;
}
//SetTimeout and setinterval
meow = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("cat says meow")
}
//clr = setTimeout(meow, 2000);
//clr = setInterval(meow, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
 
//JavaScript localStorage
/*localStorage.setItem('name', 'annu')
localStorage.getItem('name')*/

//JSON
// obj = {name: "joya",length: 4, a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso) 
// console.log(jso);//string
parsed = JSON.parse('{"name": "joya","length": 4, "a": {"this": "tha\\"t"}}')
console.log(parsed);

//Template literals - Backticks
a = 34
console.log(`this is my ${a}`)



 