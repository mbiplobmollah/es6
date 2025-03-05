// different ways of function 
// 1st way -----------------------------------
// function sum(num1,num2){
// return num1+num2;
// }


// const result = sum(10,20);
// console.log(result);


// 2nd way--------------------------------------------

// const sum2 = function(num1,num2){
//     return num1+num2;
// }
// console.log(sum2(10,20));


// 3rd way-------------------------------------------
// const sum2 = (num1,num2)=> num1+num2;
const sum2 = (num1,num2)=> {
    return num1+num2;
};

console.log(sum2(10,20))


const sum = (num1) => {
    console.log('hello', num1)
}

sum(50)