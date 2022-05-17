let num1 = null;
let num2 = null;

const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

const add = document.getElementById('addition');
const sub = document.getElementById('subtract');
const mult = document.getElementById('multiply');
const divide = document.getElementById('divide');

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

add.onclick = function() {
    num1 = parseInt(num1);
}

clear.onclick = function() {
    num1 = 0;
    document.getElementById('display').innerHTML = num1;
}

digit_0.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 0;
        num1 = num1.toString();
    } else {
        num1 += 0;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_1.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 1;
        num1 = num1.toString();
    } else {
        num1 += 1;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_2.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 2;
        num1 = num1.toString();
    } else {
        num1 += 2;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_3.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 3;
        num1 = num1.toString();
    } else {
        num1 += 3;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_4.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 4;
        num1 = num1.toString();
    } else {
        num1 += 4;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_5.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 5;
        num1 = num1.toString();
    } else {
        num1 += 5;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_6.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 6;
        num1 = num1.toString();
    } else {
        num1 += 6;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_7.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 7;
        num1 = num1.toString();
    } else {
        num1 += 7;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_8.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 8;
        num1 = num1.toString();
    } else {
        num1 += 8;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

digit_9.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = 9;
        num1 = num1.toString();
    } else {
        num1 += 9;
        num1 = num1.toString();
    }
    document.getElementById('display').innerHTML = num1;
}

equal.onclick = function() {
}