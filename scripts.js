let num1 = null;
let num2 = null;
let operation = null;

const clear = document.getElementById('clear');
const evaluate = document.getElementById('evaluate');
const decimal = document.getElementById('decimal');
const backspace = document.getElementById('backspace');

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

const countDecimals = function(value) {
    let text = value.toString()

    if (text.indexOf('e-') > -1) {
      let [base, trail] = text.split('e-');
      let deg = parseInt(trail, 10);
      return deg;
    }

    if (Math.floor(value) !== value) {
      return value.toString().split(".")[1].length || 0;
    }
    return 0;
  }

add.onclick = function() {
    num1 = parseFloat(num1);
    operation = 'add';
}

sub.onclick = function() {
    num1 = parseFloat(num1);
    operation = 'sub';
}

mult.onclick = function() {
    num1 = parseFloat(num1);
    operation = 'mult';
}

divide.onclick = function() {
    num1 = parseFloat(num1);
    operation = 'div';
}

backspace.onclick = function() {
    if (operation === null) {
        num1 = num1.slice(0, -1);
        document.getElementById('display').innerHTML = num1;
    } else {
        num2 = num2.slice(0, -1);
        document.getElementById('display').innerHTML = num2;
    }
}

evaluate.onclick = function() {
    num2 = parseFloat(num2);
    let answer = 0;
    
    if (operation === 'add') {
        answer = num1 + num2;
    }
    if (operation === 'sub') {
        answer = num1 - num2;
    }
    if (operation === 'mult') {
        answer = num1 * num2;
    }
    if (operation === 'div') {
        answer = num1 / num2;
    }
    
    if (countDecimals(answer) > 5) {
        answer = answer.toFixed(5);
    }
    
    // Converts to string to use .length
    answer = answer.toString();
    if (answer.length > 9) {
        document.getElementById('display_container').style.fontSize = "3rem";
    } else if (answer.length > 7) {
        document.getElementById('display_container').style.fontSize = "3.5rem";
    }
    answer = parseFloat(answer);
    answer = answer.toLocaleString();
    document.getElementById('display').innerHTML = "=" + answer;
    num1 = null;
    num2 = null;
    operation = null;
}

clear.onclick = function() {
    num1 = null;
    num2 = null;
    operation = null;
    document.getElementById('display').innerHTML = 0;
    document.getElementById('display_container').style.fontSize = "4rem";
}

decimal.onclick = function() {
    if (num1 === null && num2 === null) {
        num1 = ".";
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        num1 = num1.toString();
        num1 += ".";
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 === null) {
        num2 = ".";
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        num2 += ".";
        document.getElementById('display').innerHTML = num2;
    }
}

digit_0.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 0;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 0;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null) {
        num2 = 0;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 0;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_1.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 1;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 1;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 1;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 1;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_2.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 2;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 2;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 2;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 2;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_3.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 3;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 3;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 3;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 3;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_4.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 4;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 4;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 4;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 4;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_5.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 5;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 5;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 5;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 5;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_6.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 6;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 6;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 6;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 6;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_7.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 7;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 7;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 7;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 7;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_8.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 8;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 8;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 8;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 8;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}

digit_9.onclick = function() {
    document.getElementById('display_container').style.fontSize = "4rem";
    if (num1 === null && num2 === null) {
        num1 = 9;
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation === null) {
        if(num1.length <= 9) {
            num1 += 9;
        }
        num1 = num1.toString();
        document.getElementById('display').innerHTML = num1;
    } else if (operation !== null && num2 == null) {
        num2 = 9;
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    } else {
        if(num2.length <= 9) {
            num2 += 9;
        }
        num2 = num2.toString();
        document.getElementById('display').innerHTML = num2;
    }
}