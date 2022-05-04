const calculateTheNumbers = (operand) => {
    // Your code here...
    let eq
    console.log('add the numbers...');
    let num1 = document.querySelector('#num1').value;
    console.log(num1);
    let num2 = document.querySelector('#num2').value;
    console.log(num2);
    let result = Number(num1) operand Number(num2);
    document.querySelector('#answer').innerHTML = result;
}

const addTheNumbers = () => {
    let operand = +;
    calculateTheNumbers();
}


// const addTheNumbers = (ev) => {
//     // Your code here...
//     console.log('add the numbers...');
//     let num1 = document.querySelector('#num1').value;
//     console.log(num1);
//     let num2 = document.querySelector('#num2').value;
//     console.log(num2);
//     let result = Number(num1) + Number(num2);
//     document.querySelector('#answer').innerHTML = result;
// }

// const subtractTheNumbers = (ev) => {
//     // Your code here...
//     console.log('add the numbers...');
//     let num1 = document.querySelector('#num1').value;
//     console.log(num1);
//     let num2 = document.querySelector('#num2').value;
//     console.log(num2); 
//     let result = Number(num1) - Number(num2);
//     document.querySelector('#answer').innerHTML = result;
    
// }

// const multiplyTheNumbers = (ev) => {
//     // Your code here...
//     console.log('add the numbers...');
//     let num1 = document.querySelector('#num1').value;
//     console.log(num1);
//     let num2 = document.querySelector('#num2').value;
//     console.log(num2); 
//     let result = Number(num1) * Number(num2);
//     document.querySelector('#answer').innerHTML = result;
    
// }

// const divideTheNumbers = (ev) => {
//     // Your code here...
//     console.log('add the numbers...');
//     let num1 = document.querySelector('#num1').value;
//     console.log(num1);
//     let num2 = document.querySelector('#num2').value;
//     console.log(num2); 
//     let result = Number(num1) / Number(num2);
//     document.querySelector('#answer').innerHTML = result; 

// }