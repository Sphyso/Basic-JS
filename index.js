console.log('Hello World');
//Objects
let person = {
    name: 'Sifio',
    age: 22,
    occupation: 'Software Developer'
};
//Dot Notation
person.name = 'Sifiso';
//Bracket Notation
person['age'] = 23;
//For Bracket can be dynamic, change while application is running.
let selection = 'occupation'
person[selection] = 'C# Developer';
//Printing for object
/*
console.log(person.name);
console.log(person.age);
console.log(person.occupation);*/

//Arrays
let chelseaPlayers = ['Palmer', 'Felix'];
chelseaPlayers[2] = ['Nkunku'];
chelseaPlayers[3] = 4;
/*Printing Array
console.log(chelseaPlayers[0]);
console.log(chelseaPlayers.length);
console.log(chelseaPlayers);*/

//Functions
/*function isCold(name){
    if(name == 'Palmer'){
        console.log(name + ' is a cold player.')
    } else{
        console.log(name + ' is not a cold player.')
    }
}

function calculate(num){
    let square = num * num;
    return square;
}

isCold('Palmer');
isCold('Saka');

console.log(calculate(5));*/

//OOP
//Object literals
const rectangle = {
    //Length and width are properties
    length: 5,
    width: 10,
    //calculateArea is a method or function
    calculateArea: function(){
        let area = this.length * this.width
        console.log(area);
    }
};

rectangle.calculateArea();

//Factory function (Return an object)
function createCircle(radius){
    return {
        //If key and value are the same, you can remove key ES6.
        radius,
        draw: function(){
        console.log('draw');
        }
    };

}

const circle = createCircle(5);
circle.draw();

//Constuctor function (Uses this and new Keywords)
function Circle(radius){
    this.radius = radius,
    this.draw = function() {
        console.log('draw another');
    }
}

//Forgetting new Keyword creates a global variable.
const otherCircle = new Circle(1);
otherCircle.draw();
//Functions are objects.
// {} - References this keyword in function
Circle.call({}, 1);

