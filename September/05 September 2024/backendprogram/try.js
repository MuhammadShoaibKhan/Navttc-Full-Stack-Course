// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }

// const array2 = [65, 44, 12, 4];
// const newArr2 = array2.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }

// const array2 = [10,55,100,2,3,4,4,5,6,7,8,9,10];

// function isLessfive(n){
//     return n < 5 
// }

// const newArr2 = array2.filter(isLessfive);

// const [first, second, ...rest] = array2

// console.log(first, second, rest)

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];

// const data = [
//     {
//         id: 1,
//         name: 'ali',
//     },
//     {
//         id: 2,
//         name: 'raza',
//     },
//     {
//         id: 3,
//         name: 'qureshi',
//     },
//     {
//         id: 4,
//         name: 'qureshi',
//     },
//     {
//         id: 5,
//         name: 'qureshi',
//     },
//     {
//         id: 6,
//         name: 'qureshi',
//     }
// ]

// const data_ali = data.filter((i)=> i.name === 'qureshi')

// console.log(data_ali)

function fetchData(callback) {
    setTimeout(() => {
      callback();
    }, 1000);
    console.log('ali')
  }
  
  function displayData() {
    console.log('hello');
  }
  

