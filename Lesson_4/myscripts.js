/**
 * Created by User on 04.06.2016.
 */
function getMin(id1, id2) { // сделала через передачу id из input, передавать готовые аргументы прямо в функцию совсем просто
    document.getElementById('result1').innerHTML = "Минимальный из двух аргументов: " + min(id1, id2);
}

function min(id1, id2) {
    var var1 = parseInt(document.getElementById(id1).value),
        var2 = parseInt(document.getElementById(id2).value),
        min;
    var1 < var2 ? min = var1 : min = var2;
    return min;
}


function countBs(id1) {
    var string = document.getElementById(id1).value,
        symbol = 'b',
        length = string.length;
    console.log(length);
    for (var i = 0, count = 0; i <= length; i++) {
        if (string.charAt(i) == symbol) {
            count++;
        }
    }

    document.getElementById('result2').innerHTML = "Количество вхождений символа 'b': " + count;
    return count;
}

function countChar(id1, id2) {
    var string = document.getElementById(id1).value,
        symbol = document.getElementById(id2).value,
        length = string.length;

    for (var i = 0, count = 0; i <= length; i++) {
        if (string.charAt(i) == symbol) {
            count++;
        }
    }

    document.getElementById('result2').innerHTML = "Количество вхождений указанного символа: " + count;
    return count;
}


function getBoolean() {
    var n = parseInt(document.getElementById("number").value);
    isEven(n);

    function isEven(n) {
        if (n == 0) {
            document.getElementById('result3').innerHTML = "Результат: " + n;
            return false;
        }
        else if (n == 1) {
            document.getElementById('result3').innerHTML = "Результат: " + n;
            return true;
        }
        else {
            console.log(n);
            if (n < 0) {
                return isEven(n + 2);
            } else {
                return isEven(n - 2);
            }
        }
    }
}

