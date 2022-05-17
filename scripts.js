let num1 = null;
let num2 = null;

const digit_0 = document.getElementById('digit_0');
const digit_1 = document.getElementById('digit_1');
const digit_2 = document.getElementById('digit_2');
const digit_3 = document.getElementById('digit_3');
const digit_4 = document.getElementById('digit_4');
const digit_5 = document.getElementById('digit_5');
const digit_6 = document.getElementById('digit_6');
const digit_7 = document.getElementById('digit_7');
const digit_8 = document.getElementById('digit_8');
const digit_9 = document.getElementById('digit_9');

digit_1.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 1;
        num1.toString();
        num1 += 1;
    } 
    document.getElementById('test').innerHTML = num1;
    console.log(num1);
}