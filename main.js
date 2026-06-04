// alert('Hello world');
console.log('Hello world');
console.error('This is an error');
console.warn('This is warning');

// variables  var , let , const
// let age = 30;
// const age = 30;
// age =31;

// console.log(age);

// let score;
// const score = 10;
// // score = 10;
// console.log(score);


// DATA TYPES strings , numbers , boolean , null ,undefined 

// const name ='mittal';
// const age= 27;
// const rating = 4.5;
// const isCool =  true;
// const x =null;
// const y = undefined;
// let z;

// console.log(typeof z);



// const name = 'abc';
// const age = 25;

// // Concatenation
// console.log('My name is '  + name +  ' and I am  ' + age);

// Teamplate string

// console.log(`My name is ${name} and I am ${age}`);

// const s = 'Hello World';

// console.log(s.length);

// Arrays- variables that hold mmultiple values
// const numbers = new Array(1,2,3,4,5);
// const fruits = ['apples', 'orange', 'peard', 10, true];

// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(fruits.indexOf('orange'));
// console.log(fruits);


const person = {
    firstName: 'mittal',
    lastName: 'rathva',
    age: 27,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.city);
// alert(person);

const { firstName, lastName, address: { city } } = person;
console.log(city);


person.email = 'mittal@gmail.com';
console.log(person);


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

// console.log(todos[0].text);

//  const  todoJSON = JSON.stringify(todos);
//  console.log(todoJSON);


// FOr loop++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for(let i = 0; i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }


// While 
// let i  = 0;
// while ( i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// for ( let todo of todos){
//   console.log(todo.text);
// }

// ForEach, map, filter

// todos.forEach(function(todo){
//  console.log(todo.text);
// });

// map return arrays
// const todoText = todos.map(function (todo) {
//     return todo.text;
// });
// console.log(todoText);


//filter
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompleted);



// if statement
const x = 4;
const y = 9;
// if(x === 10) {
//     console.log('x is 10');
// }else  if(x > 10){
//  console.log('x is greater than 10');
// }else {
//     console.log('x is less than 10');
// }


if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is ore 10');
}else  if(x > 10){
 console.log('x is greater than 10');
}else {
    console.log('x is less than 10');
}