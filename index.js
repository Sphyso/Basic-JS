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
function isCold(name){
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

console.log(calculate(5));