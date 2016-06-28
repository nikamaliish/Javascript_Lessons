/**
 * Created by User on 04.06.2016.
 */
function abcd() {
    var a = 1, b = 1, c, d;

    c = ++a; // инкремент стоит слева от операнда, поэтому опранд сразу увеличивается на 1
    alert(c); // выводит 2
    d = b++; // инкремент стоит справа от операнда, поэтому опранд увеличивается на 1 после выполнения операции
    alert(d); // выводит 1

    c = (2 + ++a); // инкремент стоит слева от операнда, поэтому опранд сразу увеличивается на 1, но при предыдущей операции а уже увеличилось на 1, т.о. 2+(2+1) -> 5
    alert(c); // 5
    d = (2 + b++);// инкремент стоит справа, поэтому опранд увеличивается на 1 после выполнения операции, но при предыдущей операции b уже увеличилось на 1, т.о. 2+2 -> 4
    alert(d); // 4

    alert(a); // a = 3 после двух инкрементов
    alert(b); // b = 3 после двух инкрементов
}

function getX() {
    var a = 2;
    var x = 1 + (a *= 2); // a = a*2, x = 1 + (2*2) = 5
    console.log(x);
}

function getFizzBizz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                console.log("FizzBizz");
            } else
                console.log("Fizz");
        } else if (i % 5 == 0) {
            if (i % 3 == 0) {
                continue;
            } else
                console.log("Bizz");
        } else
            console.log(i);
    }
}