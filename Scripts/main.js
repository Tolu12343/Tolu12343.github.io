//function Person(name, height, yob, owner) {
//    this.name = name;
//    this.height = height;
//    this.yob = yob;
//    this.calculateAge = function () {
//        this.age = 2019 - yob;
//        return this.age;
//    };
//
//}
//
//
//
//
//
//document.querySelector('.para').style.display = "none";
//var John = new Person("John", "180cm", 1992);
//
//John.calculateAge();
//console.log("Your name is: " + John.name);
//
//console.log("Your height is: " + John.height);
//
//console.log(" Your year of birth is: " + John.yob);
//
//console.log("Your age is: " + John.age);
//
////
//alert("Hello " + John.name);

//document.write("Welcome " + John.name);

//document.querySelector('.introMessage').textContent = "Welcome " + John.name + '!';

//
//document.onclick = function name() {
//    document.querySelector('.btn').style.display = "none";
//    document.querySelector('.para').style.display = "block";
//    document.querySelector('.para').innerHTML = John.name + "'s age is : " + John.age + ", " + John.name + "'s height is : " + John.height + ", " + John.name + "'s year of birth is : " + John.yob + ", " + John.name + "'s age is : " + John.age;
//}

/* Second Exercise */
//document.querySelector('.introMessage').textContent = "Welcome " + Tolu.name + '!';
document.querySelector('.bord').style.display = "none";

var firstNum, secondNum, thirdNum, result;

function square(firstNum) {
    result = Math.pow(firstNum, 2);
    return result;
}
console.log(square(5));

function add(firstNum, secondNum, thirdNum) {
    result = firstNum + secondNum + thirdNum;
    return result;
}

console.log(add(5, 2, 3));


function personCreate(name, age, occupation) {
    Person1 = {};

    Person1.name = name,

        Person1.age = age,

        Person1.occupation = occupation
    return Person1;
}
var state = 0;
var Tolu = new personCreate("Tolu", 27, "Developer");


console.log("Person's name is: " + Tolu.name);
console.log("Person's age is: " + Tolu.age);
console.log("Person's occupation is: " + Tolu.occupation);

document.querySelector('.secondbutton').style.display = "none";


document.querySelector('.firstbutton').style.display = "none";






/** ALL event listeners */

document.getElementById('firstbut').addEventListener('click', function () {
    document.getElementById('firstbut').style.display = "none";
    document.querySelector('.para').style.display = "block";
    document.querySelector('.para').innerHTML = Tolu.name + "'s age is : " + Tolu.age + ", " + Tolu.name + "'s occupation is : " + Tolu.occupation;
    manipulate(state);
    document.querySelector('.secondbutton').style.display = "block";
})

function manipulate(state) {
    if (state === 1) {
        document.querySelector('.firstbutton').classList.remove('firstbutton');
    }


}
var result = Tolu.age;
document.getElementById('firstbut').addEventListener('click', function () {
    document.getElementById('firstbut').style.display = "none";
    document.querySelector('.para').style.display = "block";
    document.querySelector('.para').innerHTML = Tolu.name + "'s age is : " + Tolu.age + ", " + Tolu.name + "'s occupation is : " + Tolu.occupation;
    manipulate(state);
    document.querySelector('.secondbutton').style.display = "block";
})

document.querySelector('.secondbutton').addEventListener('click', function () {
    document.querySelector('.text').style.display = "block";
    result = result + 1;
    document.querySelector('.para').innerHTML = Tolu.name + "'s age is : " + result;
})
