/**
 * Created by Администратор on 07.08.2016.
 */

//Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
//Да, именно так, через двойные скобки (это не опечатка). Например:
//
//sum(1)(2) = 3
//sum(5)(-1) = 4

function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4


//В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения.
//Его функционал состоит из двух возможностей:
//Добавить значение в буфер.
//Получить текущее содержимое.
//Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
//
//Создание объекта: var buffer = makeBuffer();.
//Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение
//в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
//Буфер должен преобразовывать все данные к строковому типу:
//Решение не должно использовать глобальные переменные.

function makeBuffer() {
    var text = '';

    return function (value) {
        if (arguments.length == 0) {
            return text;
        }
        text += value;
    };
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log(buffer()); // Замыкания Использовать Нужно!

buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

console.log(buffer()); // '010'


//Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера

function makeBuffer2() {
    var text = '';

    function buffer(value) {
        if (arguments.length == 0) {
            return text;
        }
        text += value;
    }

    buffer.clear = function () {
        text = '';
    };
    return buffer;
}

buffer = makeBuffer2();

buffer("Тест");
buffer(" тебя не съест ");
console.log(buffer()); // Тест тебя не съест

buffer.clear();

console.log(buffer()); // ""


//То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)
//Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field,
// чтобы пример выше заработал.

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}


var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

users.sort(byField('name'));
users.forEach(function (user) {
    console.log(user.name);
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function (user) {
    console.log(user.name, user.age);
}); // Маша, Вася, Петя


//Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те
// элементы arr, для которых func возвращает true.
//Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]".
// Использование должно быть таким:
//filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
//filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

function filter(arr, func) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (func(value))
            filteredArr.push(value);
    }
    return filteredArr;
}

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function (x) {
        return arr.indexOf(x) != -1;
    };
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function (a) {
    return a % 2 == 0
})); // 2,4,6

console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6
console.log(filter(arr, inArray([1, 2, 10]))); // 1,2


//Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер
//Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано.
//Предложите несколько вариантов исправления.

function makeArmy() {

    var shooters = [],
        shooter;

    for (var i = 0; i < 10; i++) {
        shooter = function (x) {
            return function () {
                alert(x);
            }
        }(i);
        shooter.i = i;
        shooters.push(shooter);
    }
    console.log(shooters);
    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9


function makeArmy2() {

    var shooters = [],
        shooter;

    for (var i = 0; i < 10; i++) (function (x) {
        shooter = function () {
            alert(x);
        };
        shooter.i = i;
        shooters.push(shooter);
    })(i);
    console.log(shooters);
    return shooters;
}

var army2 = makeArmy2();

army2[0](); // стрелок выводит 10, а должен 0
army2[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

(function f() {
    function f() {
        return 1;
    }

    return f();
    function f() {
        return 2;
    }
})();
