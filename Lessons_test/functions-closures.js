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