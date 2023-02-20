 /* array.forEach() - executes a provided callback function once for each array element

let students = ["hannah", "pruthvi", "patrick"]
students.forEach(capital)
students.forEach(print)

function capital(element, index, array) {
   array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
  console.log(element)
}
 */


/* array.map() - executes a provided callback function once for each array element AND creates a new array 
let numbers = [1,2,3,4,5]
let squares = numbers.map(square)
let cubes = numbers.map(cube)

squares.forEach(print)
cubes.forEach(print)

function square(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}

function print(element) {
    console.log(element)
}
*/


/* array.filter() - creates a new array with all elements that pass the test provided by a function 

let ages = [18, 16, 21, 17, 19, 90]
let adults = ages.filter(checkAge)

adults.forEach(print)

function checkAge(element) {
    return element >= 18
}

function print(element) {
    console.log(element)
}
*/

/* array.reduce() - reduces an array to a single value 

let prices = [5, 10, 15, 20, 25]
let total = prices.reduce(checkOut)

console.log(`the total is ${total}`)

function checkOut(total, element) {
  return total+element
}

*/


/* array sorting in ascending and descending 
let grades = [100, 50, 90, 60,80, 70]
grades = grades.sort(descendingSort)
grades = grades.sort(ascendingSort)

grades.forEach(print)

function descendingSort(x, y) {
    return y-x
}
function ascendingSort(x, y) {
    return x-y
}

function print(element) {
    console.log(element)
}
*/

/* Map- object that holds key-value pairs of any datatype
const store = new Map([
  ["tshirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

let cart =0 
//store.get("tshirt")
//store.set("hat",40)
//store.delete("hat")
//console.log(store.has("underwear"))
//console.log(store.size)


console.log(cart)

store.forEach((value,key) => console.log(`${key} $${value}`)) */


/*object - a group of properties and methods 

const car = {
  model: "mustang",
  color: "red",
  year: 2023,
  
  drive: function() {
    console.log("you drive th car")

  },

  brake: function() {
    console.log("you've steppef on the brake")
  }
}

console.log(car.model)
console.log(car.color)

car.drive(); */


// this - reference to a particular object, it depends on the immediate context
//console.log(this)


/* class- blueprint for creating objects
// using constructor for unique properties

class Player {
  score = 0;

  pause() {
    console.log("you paused the game")
  }

  exit() {
    console.log("you exited the game");
  }

}

const player1 = new Player()

console.log(player1.score)  */

/* constructors - special method of a class, accepts arguments and assigns properties

class Student {
  constructor(name, age, gpa) {
    this.name = name
    this.age = age
    this.gpa = gpa
  }

  study() {
    console.log(`${this.name} is studying`)
  }
}

const student1 = new Student("hannah", 23, 3.5)
console.log(student1.name)
console.log(student1.age)
console.log(student1.gpa)
student1.study()  */

// static - belongs to class not to objects

/* inheritance- child class can inherit all methods and properties from another class

class animal {
  alive = true
  eat() {
    console.log(`This ${this.name} is eating`)
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`)
  }
}


class Rabbit extends animal{
  
  name = "rabbit"
  run() {
    console.log(`This ${this.name} is running`)
  }
}

class Fish extends animal {
  name = "fish"
  swim() {
    console.log(`This ${this.name} is swimming`)
  }
}

class Hawk extends animal {
  name = "hawk"
  fly() {
    console.log(`This ${this.name} is flying`)
  }
}

const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()

console.log(rabbit.alive)
rabbit.eat()
fish.sleep()  */

/* super - parent class, to invoke constructor of parent class
class animal{
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
class Rabbit extends animal {
  constructor(name, age, runspeed){
    super(name, age)
   this.runspeed = runspeed
  }
}
class Fish extends animal{
  constructor(name, age, swimspeed){
    super(name, age)
    this.swimspeed = swimspeed
  }
}
class Hawk extends animal{
  constructor(name, age, flyspeed){
    super(name, age)
    this.flyspeed = flyspeed
  }
}

const rabbit = new Rabbit("rabbit", 1, 40)
const fish = new Fish("fish", 2, 80)
const hawk = new Hawk("hawk", 3, 200)

console.log(rabbit.name)
console.log(fish.age)
console.log(hawk.flyspeed)  */

/* get- binds an object property to a function, when property is accessed
//it increases data security as well
//set - binds an object property to a function, when assigned a value

class Car{
  constructor(power){
    // readable not writeable
    this._gas = gas
    this._power = power
  }
  get power(){
    return this._power
  }
  get gas(){
    return this._gas
  }
  set gas(value){
    this._gas = value
  }
}
let car = new Car(400)
car.gas = 12222222222

console.log(car.power)  */


// anonymous objects - objects without a name, not directly referenced, less syntax and no need for unique names

/* error handling, throw- executes a user-defined error

try{
  let x = window.prompt("Enter a #")
  x = Number(x)

  if(isNaN(x)) throw "That wasn't a number"
  if(x == "") throw "That was empty"

  console.log(`${x} is a number`)
}
catch(error){
  console.log(error)
}
finally{
  console.log("This always executes")
}  */


// setTimeout() - invokes a function after a number of milliseconds
/* asynchronous function - doesnt pause execution of program

let timer1= setTimeout(firstMsg, 3000)
let timer2 = setTimeout(secondMsg, 6000)
let timer3  = setTimeout(thirdMsg, 9000) */

/* setInterval() - invokes a func repeatedly after a no. of milliseconds

let count = 0
let max = window.prompt("Count upto what number")
max = Number(max)

const myTimer = setInterval(countUp, 1000) 

function countUp() {
  count += 1
  console.log(count)
  if(count >= max) {
    clearInterval(myTimer)
  }
} */

/* Date objects are used to work with date and time

let date = new Date() 


let year = date.getFullYear()
let dayofmonth = date.getDate()
let dayofweek = date.getDay()
let month = date.getMonth()
let hour = date.getHours()

date = date.toDateString()
console.log(date) */


/* synchronous - in an ordered sequence, with step by step instructions
//asynchronous - out of sequence, tasks that take time

console.log("Start")
setTimeout(() => console.log("this is asynchronous"), 5000)
console.log("ENd") */

/* console.time() - starts a timer you can use to track how long an operation takes
// give each timer a unique number

console.time("response time")

setTimeout(() => console.log("hello"), 3000)

console.timeEnd("response time") */

//promises - objects that encapsulates the result of an asynchronous operation
// lets async methods return values like sync methods
// "promising to return something in the future"

/*const promise = new Promise((resolve,reject) =>{
  let fileLoaded = false

  if(fileLoaded){
    resolve("File loaded")
  }
  else {
    reject("File not loaded")
  }

})

promise.then(value => console.log(value)).catch(error => console.log(error))



const wait = time => new Promise((resolve) => {
    
   setTimeout(resolve, time)
})

wait(3000).then(() => console.log("Thnaks for waiting"))

*/

/* async keyword makes a function return a promise

async function loadFile(){
   
  let fileLoaded = false

  if(fileLoaded){
    return "File Loaded"
  }
  else{
    throw "File NOT loaded"
  }
}

loadFile().then(value => console.log(value))
       .catch(error => console.log(error))

*/

// await - makes an async function wait for a promise

async function loadFile(){
   
  let fileLoaded = false

  if(fileLoaded){
    return "File Loaded"
  }
  else{
    throw "File NOT loaded"
  }
}

async function startProcess() {

  try{
    let msg = await loadFile()
    console.log(msg)
  }
  catch(error){
    console.log(error)
  }

}
startProcess()

*/

/* importing files from another .js file
// use export keyword in the other .js file to export 
import {PI, getCircum, getArea} from "./math_util.js"

console.log(PI)

let circum = getCircum(10)
console.log(circum)

let area = getArea(10)
console.log(area)
*/

/*DOM - Document Object Model
// An interface for changing the content of a page
//console.log(document)
//console.dir(document)
console.log(document.title)
console.log(document.URL) 
document.title = "TItle goes here" 
document.body.style.backgroundColor = "skyblue" */


/* element selectors
let element = document.getElementById("myTitle")
element.style.backgroundColor = "lightgreen"

let fruits = document.getElementsByName("fruits")
console.log(fruits)
fruits.forEach(fruit => {
  if(fruit.checked) {
    console.log(fruit.value)
  }
}) 

let vegetables = document.getElementsByTagName("li")
vegetables[0].style.backgroundColor = "lightgreen"

let desserts = document.getElementsByClassName("desserts")
desserts[0].style.backgroundColor = "lightgreen"

let element = document.querySelector("#myTitle")
element[0].style.backgroundColor = "lightgreen"

let element1 = document.querySelector(".myTitle")
element1[0].style.backgroundColor = "lightgreen"  */


/*  .fitstElementChild
.lastELementChild
.parentELement
.nextElementSibling
.previousElementSibling
.children[]
Array.from(.children)   */


/* add and change HTML elements
  .innerHTML  (but is vulnerable to XSS attacks)
  .textContent (more secure) 
  .append - adds to the end of the list
  .prepend - adds to the beginning of the list
  .insertBefore(given item, .getELementByTagName)

 const nameTag = document.createElement("h1")
nameTag.textContent = "BRO"
document.body.append(nameTag) */

/* to change CSS from JS file 
const title = document.getElementById("myTitle")
title.style.backgroundColor = "white"  
title.style.color = "black"
title.style.fontFamily = "consolas"  */


/* events
  .onclick - while clicking the respective button
  .onload - loads when button clicked
  .onmouseover - does something when hovered over
  .onmouseout - does something when leaves
  .onmousedown - does something when leaves
  .onmouseup - does something when hovered over  */


/*  .addEventListener(event, function, useCapture)
   adding many event handlers to one element
   even the same event invoking a different function 

   const innerDiv = document.getElementById("innerDiv")
   const outerDiv = document.getElementById("outerDiv")

   /*innerDiv.addEventListener("mouseover", changeRed)
   innerDiv.addEventListener("mouseout", changeGreen) 

   function changeRed() {
    innerDiv.style.backgroundColor = "red"
   }

   function changeGreen() {
    innerDiv.style.backgroundColor = "lightgreen"
   } 

   innerDiv.addEventListener(("click"), changeBlue)
   outerDiv.addEventListener("click", changeBlue, true)

   function changeBlue(){
    alert("You seleected this.id")
    this.style.backgroundColor = "lightblue"
   }  */

/* CANVAS API - a means for drawing graphics, used for animations, data visualisation
let canvas  = document.getElementById("myCan") 
let context = canvas.getContext("2d")  */


/* drawing lines on canvas
context.strokeStyle = "purple"
context.lineWidth = 10
context.beginPath()
context.moveTo(0,0)
context.lineTo(250, 250)
context.lineTo(250, 500)
context.moveTo(500, 0)
context.lineTo(250, 250)
context.stroke()  */

/*DRAW TRIANGLE
context.strokeStyle = "grey"
context.fillStyle = "yellow"
context.lineWidth = 10
context.beginPath()
context.moveTo(250, 0)
context.lineTo(0, 250)
context.lineTo(500, 250)
context.lineTo(250, 0)
context.strokeStyle()
context.fill()  */




 






 
