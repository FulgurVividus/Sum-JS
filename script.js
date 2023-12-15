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

let userNum = +prompt('Enter a number: ');
let sumResult = 0;

if (!isNaN(userNum) && userNum > 0) {
    for (i = 1; i <= userNum; i++) {
        sumResult += i;
    }
    alert(`The sum starting from 1 till your given number is: ${sumResult}`);
} else {
    alert('Wrong input(s)');
}