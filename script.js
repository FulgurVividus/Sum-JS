//! last in-class problem -> corrected some issues 

// let userNum = +prompt('Enter a number from 1 to 10: ');
// let multResult = '';

// if (!isNaN(userNum) && userNum > 0 && userNum <= 10) {
//     for (d = 1; d <= 10; d++) {
//         let mult = userNum * d;
//         multResult += `${userNum} * ${d} = ${mult}\n`;
//     }
//     alert(multResult);
// } else {
//     alert('Wrong input(s)');
// }

//! Sum factorial 

// let userNum = +prompt('Enter a number: ');
// let sumResult = 0;

// if (!isNaN(userNum) && userNum > 0) {
//     for (i = 1; i <= userNum; i++) {
//         sumResult += i;
//     }
//     alert(`The sum starting from 1 till your given number is: ${sumResult}`);
// } else {
//     alert('Wrong input(s)');
// }


//! Problem A

function ageCalc(name, birthYear, presentYear) {
    //? getting user inputs
    name = prompt('Enter your name: ');
    birthYear = +prompt('Enter your birth year: ');
    presentYear = +prompt('Enter the present year: ');
    let realAge = presentYear - birthYear;

    //? logic part 
    if (!isNaN(birthYear) && !isNaN(presentYear) && name != '') {
        return alert(`1. Name: ${name}\n2. Birth Year: ${birthYear}\n3. Present Year: ${presentYear}\n${name}, your age is ${realAge}`);
    } else {
        alert('Error not data.');
    }
};
ageCalc();


//! Problem B

function randomProblems(userRandomNumber, userAnswers) {
    //? getting some inputs 
    userRandomNumber = +prompt('Enter the number of problems you want to solve: ');
    // userAnswers = +prompt();
    // doing random operators
    const operators = ['+', '-', '*', '/'];
    const randomOperators = operators[Math.floor(Math.random() * operators.length)];
    // doing random numbers 
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    //? implementing some logic
    if (!isNaN(userRandomNumber) && !isNaN(userAnswers)) {
        for(i = 0; i <= userRandomNumber; i++) {
            let problem = `${num1} ${randomOperators} ${num2} =`;
            alert(problem += i);
        };
    } else if (operators == '/' && num2 == 0) {
        return randomProblems();
    } else {
        alert('Error not data.');
    }
};
randomProblems();