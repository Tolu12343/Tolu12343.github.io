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
var firstNum, secondNum, thirdNum, result, name, age, occupation, active1 = 0,
    active2 = 0,
    active3 = 0,
    Person, result, counter, change = true;

/*initiaise hidden tags*/
document.querySelector('.bord').style.display = "none";

document.querySelector('.secondbutton').style.display = "none";

document.querySelector('.firstbutton').style.display = "none";
document.querySelector('.wrongMessage1').style.display = "none";
document.querySelector('.wrongMessage2').style.display = "none";
document.querySelector('.wrongMessage3').style.display = "none";



name = document.getElementById('name').value;
age = document.getElementById('age').value;
occupation = document.getElementById('occupation').value;
/* Creating event listeners */

document.getElementById('name').addEventListener('keyup', function () {
    change = true;
    document.querySelector('.wrongMessage1').style.display = "none";
    name = document.getElementById('name').value;
    document.getElementById('name').placeholder = "Name";
    document.getElementById('name').classList.remove('noInput');
    active1 = 1;
})

document.getElementById('age').addEventListener('keyup', function () {
    document.querySelector('.wrongMessage2').style.display = "none";
    age = document.getElementById('age').value;
    document.getElementById('age').placeholder = "Age";
    document.getElementById('age').classList.remove('noInput');
    active2 = 1;
})

document.getElementById('occupation').addEventListener('keyup', function () {
    document.querySelector('.wrongMessage3').style.display = "none";
    occupation = document.getElementById('occupation').value;
    document.getElementById('occupation').placeholder = "Occupation";
    document.getElementById('occupation').classList.remove('noInput');
    active3 = 1;
})

document.getElementById('clickHere').addEventListener('click', function () {
    Person = new personCreate(document.getElementById('name').value, document.getElementById('age').value, document.getElementById('occupation').value);
    if (name !== "" && age !== "" && occupation !== "") {
        nameChecker(name);
        ageChecker(age);
        occupationChecker(occupation);
        check(active1, active2, active3);
    } else {
        if (name === "") {
            document.getElementById('name').placeholder = "Enter your name!";
            document.getElementById('name').classList.add('noInput');
        } else {
            nameChecker(name);
        }

        if (age === "") {
            console.log("Hello");
            document.getElementById('age').placeholder = "Enter your age!";
            document.getElementById('age').classList.add('noInput');
        } else {
            ageChecker(age);
        }

        if (occupation === "") {
            document.getElementById('occupation').placeholder = "Enter your occupation!";
            document.getElementById('occupation').classList.add('noInput');
        } else {
            occupationChecker(occupation);
        }
    }


})




document.getElementById('firstbut').addEventListener('click', function () {
    document.getElementById('firstbut').style.display = "none";
    document.querySelector('.para').style.display = "block";
    document.querySelector('.para').innerHTML = Person.name + "'s age is : " + Person.age + ", " + Person.name + "'s occupation is : " + Person.occupation;
    manipulate(state);
    document.querySelector('.secondbutton').style.display = "block";
})

function manipulate(state) {
    if (state === 1) {
        document.querySelector('.firstbutton').classList.remove('firstbutton');
    }

}

document.getElementById('firstbut').addEventListener('click', function () {
    document.getElementById('firstbut').style.display = "none";
    document.querySelector('.introMessage').style.display = "none";
    document.getElementById('paragraph3').innerHTML = Person.name + "'s age is : " + Person.age + ", " + Person.name + "'s occupation is : " + Person.occupation;
    document.getElementById('paragragh3').style.display = "block";
    manipulate(state);
    document.querySelector('.secondbutton').style.display = "block";
})

document.querySelector('.secondbutton').addEventListener('click', function () {
    document.querySelector('.text').style.display = "block";
    result = result + 1;
    document.querySelector('.para').innerHTML = Person.name + "'s age is : " + result;
})




/* Simple functions created */

function square(firstNum) {
    result = Math.pow(firstNum, 2);
    return result;
}
console.log(square(5));

function add(firstNum, secondNum, thirdNum) {
    result = firstNum + secondNum + thirdNum;
    return result;
}

function check(a, b, c) {
    if (a === 1 && b === 1 && c === 1) {

        /* Remove the input tags */
        document.getElementById('name').style.display = "none";
        document.getElementById('age').style.display = "none";
        document.getElementById('occupation').style.display = "none";

        /* Remove the text */
        document.querySelector('.paragraph').style.display = "none";
        document.querySelector('.paragraph1').style.display = "none";
        document.querySelector('.paragraph2').style.display = "none";



        document.querySelector('.introMessage').textContent = "Welcome " + Person.name + '!';
        document.querySelector('.firstbutton').style.display = "block";
        document.getElementById('clickHere').style.display = "none";
        result = parseInt(Person.age);
    } else {
        if (a === 0) {
            document.getElementById('name').placeholder = "Enter your name!";
            document.getElementById('name').classList.add('noInput');
        }
    }
}
console.log(add(5, 2, 3));


function personCreate(name, age, occupation) {
    Person1 = {};

    Person1.name = name,

        Person1.age = age,

        Person1.occupation = occupation
    return Person1;
}

//function ageChecker(a) {
function ageChecker(a) {
    if (a != parseInt(a)) {
        document.querySelector('.wrongMessage2').style.display = "block";
        active2 = 0;
    } else {
        active2 = 1;
    }

}

function nameChecker(n) {
    for (i = 0; i < n.length; i++) {
        if (n.charCodeAt(i) >= 65 && n.charCodeAt(i) <= 90 || n.charCodeAt(i) >= 97 && n.charCodeAt(i) <= 122) {
            if (change === false) {
                change = false;
            } else {
                change = true;
            }

        } else {
            change = false;
        }

    }
    if (change === false) {
        document.querySelector('.wrongMessage1').style.display = "block";
        active1 = 0;
    } else {
        active1 = 1;
    }
}

function occupationChecker(o) {
    if (o.length < 4) {
        document.querySelector('.wrongMessage3').style.display = "block";
        active3 = 0;
    } else {
        active3 = 1;
    }

}
