/**
 * Created by User on 04.06.2016.
 */
function getTriangle() {
    for (var i = 0, oneString = "$"; i < 7; i++, oneString += "$") {
        document.write(oneString + '<br>'); // document.writeln почему-то не работает
    }
}


function getTriangle2() {
    for (var i = 1, oneString = "$"; i < 8; i++) {
        document.write(oneString.repeat(i) + '<br>'); // document.writeln почему-то не работает
    }
}


function getChessBoard() {
    var oneString = "";
    for (var i = 0, j; i < 8; i++) {
        if (i % 2) {
            for (j = 0; j < 8; j++) {
                (j % 2) ? oneString += "#" : oneString += " ";
            }
        } else {
            for (j = 0; j < 8; j++) {
                (j % 2) ? oneString += " " : oneString += "#";
            }
        }
        oneString += "<br>";
    }
    console.log(oneString);
    document.write('<pre>' + oneString + '</pre>'); // при выводе на экран первый пробел исчезает и шахматная доска не получается(
}


function getChessBoard2() {
    var chessElements = ['#', ' '],
        chessBoard = '',
        oneString;
    for (var i = 0, j; i < 8; i++) {
        oneString = chessElements.join('').repeat(4);
        console.log(oneString);
        chessBoard += oneString + '<br>';
        chessElements.unshift(chessElements.pop());
    }
    document.write('<pre>' + chessBoard + '</pre>');
}


function getVarTarget() {
    var param1, param2, param3, target;
    param2 = 42;

    //target = param1 ? param1 : param2 ? param2 : param3 ? param3 : indefined;
    //console.log(target);

    target = param1 || param2 || param3 || indefined;
    console.log(target)
}


function stopLoop() {
    var i = 100;

    while (true) {
        console.log(i);
        i--;

        if (!i)
            break;
    }
}


function function1() {

    var toggle = true;

    if (toggle === true) {
        console.log('I am switched')
    }
    else if (toggle === false) {
        console.log('I am not switched')
    }
    else {
        console.log('What do you want from me?')
    }
}


function getObject() {
    var obj = {};
    console.log(!!obj);
}