// un callback es una funcion que se pasa como parametro a otra funcion
// las funciones pueden ser de distintos tipos: declaradas, anonimas, de flecha



// // tipos de funciones 
// // funciones declaradas

// function example() {
//     console.log('hola');
// }

// // funciones anonimas
// let b = function() {
//     console.log('hola');
// }


// // funciones de flecha
// let c = () => {
//     console.log('hola');
// }


// let d = (number) => {
//     return number;
// }

// let d = number => number;

// console.log(d(8));

// let myFunction = (fruit) => {
//     console.log(fruit);
// }

// let fruits = ['banana', 'guava', 'grape'];
// fruits.forEach(myFunction);

// let fruits = ['banana', 'guava', 'grape'];
// fruits.forEach(function(fruta, indice, arreglo){
//     console.log('Hola');
//     console.log(fruta);
//     console.log(indice);
//     console.log(arreglo);
//     console.log('------------------------');
// });

// IMPLEMENTACION PROPIA DE FOREACH
// function myForEach(fruits, cb) {
//     for(let i = 0; i < fruits.length; i ++) {
//         cb(fruits[i], i, fruits);
//     }
// }

// let cbExample = (fruit, index, fruits) => {
//     console.log('hola');
//     console.log(fruit);
//     console.log(index);
//     console.log(fruits);
//     console.log('------------------');
// }

// function cbExample(fruit, index, fruits) {
//     console.log('hola');
//     console.log(fruit);
//     console.log(index);
//     console.log(fruits);
//     console.log('------------------');
// }

// myForEach(fruits, (fruit, index, fruits) => {
//     console.log('hola');
//     console.log(fruit);
//     console.log(index);
//     console.log(fruits);
//     console.log('------------------');
// });



// let numbers = [1, 5, 7, 10];

// let filteredNumbers = numbers.filter((number) => {return number > 0});
// console.log(filteredNumbers);


// let filteredUsers = users.filter((item)=>{
//     return item.age > 30;
// });
// console.log(filteredUsers);

// ----------------------------------

// let users = [{
//     name: 'Luis',
//     age: 5
// },{
//     name: 'Laura',
//     age: 20
// }, {
//     name: 'Juana',
//     age: 18
// }];

// let numbers = [1, 2, 5, 10, 20, 30, 2];


// let userFound = numbers.find((item, index)=>{
//     console.log(index);
//     return item > 9;
// });
// console.log(userFound);


let data = [{
    id: 1,
    product: 'Sweatshirt',
    price: 500
},{
    id: 2,
    product: 'Skirt',
    price: 200
}, {
    id: 3,
    product: 'Shirt',
    price: 180
}];


// let productIndex = data.findIndex((product)=>{return product.id === 2});
// console.log(productIndex);

// data.splice(productIndex, 1);
// console.log(data);

// let deletedIndex = 2;
// let filteredArray = data.filter((product)=>{return product.id !== deletedIndex});
// console.log(filteredArray);


// let newData = data.map((item)=>{
//     if(item.id === 2){
//         let newProduct = {
//             id: item.id,
//             product: item.product,
//             price: item.price * 2
//         }
//         return newProduct;
//     } else {
//         return item;
//     }
// });
// // console.log(newData);

// let numbers = [1,2,3,4,5];

// let filteredNumbers = numbers.filter((number)=>{return number > 3});
// console.log(filteredNumbers); // [4,5]

// let newArrayNumbers = filteredNumbers.map((number)=>{
//     if(number % 2 === 0) {
//         return number * 2;
//     } 

//     return number;
// });
// console.log(newArrayNumbers); // [8,10]


// let a = 1;



