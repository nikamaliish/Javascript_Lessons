/**
 * Created by User on 04.06.2016.
 */
function getMin(var1, var2) {
    var min = var1 < var2 ? var1 : var2;
    console.log("Минимальный из двух аргументов: " + min);
    return min;
}


function countBs(str) {
    var sym = 'в',
        length = str.length;

    for (var i = 0, count = 0; i <= length; i++) {
        if (str.charAt(i) == sym) {
            count++;
        }
    }

    console.log("Количество вхождений символа 'в': " + count);
    return count;
}

function countChar(str, sym) {
    var length = str.length;

    for (var i = 0, count = 0; i <= length; i++) {
        if (str.charAt(i) == sym) {
            count++;
        }
    }

    console.log("Количество вхождений указанного символа: " + count);
    return count;
}


function isEven(num) {

    if (num == 0) {
        console.log(false);
        return false;
    }
    else if (num == 1) {
        console.log(true);
        return true;
    }
    else {
        if (num < 0) {
            return isEven(num + 2);
        } else {
            return isEven(num - 2);
        }
    }
}


