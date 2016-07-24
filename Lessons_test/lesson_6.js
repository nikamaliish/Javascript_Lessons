//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
//    Работать должно так:
//    function isEmpty(obj) {
//        /* ваш код */
//    }
//var schedule = {};
//alert( isEmpty(schedule) ); // true
//schedule["8:30"] = "подъём";
//alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "подъём";
console.log(isEmpty(schedule)); // false

//Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
//Если объект пустой, то результат должен быть 0.
//Например:
//
//var salaries = {
//    "Вася": 100,
//    "Петя": 300,
//    "Даша": 250
//};

var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    },
    sum = 0;

for (var key in salaries) {
    sum += salaries[key];
}
console.log(sum);


//Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
//Если объект пустой, то пусть он выводит «нет сотрудников».

var max = 0;
for (var key in salaries) {
    if (salaries[key] > max)
        max = salaries[key];
}
console.log(max);


//Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
//// до вызова
//var menu = {
//    width: 200,
//    height: 300,
//    title: "My menu"
//};
//
//multiplyNumeric(menu);
//
//// после вызова
//menu = {
//    width: 400,
//    height: 600,
//    title: "My menu"
//};


function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNaN(obj[key]))
            continue;

        obj[key] *= 2;
    }
}

// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);


//Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return i;
        }
    }
    return -1;
}

arr = ["test", 2, 1.5, false];

console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1


//В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
//
//    var obj = {
//        className: 'open menu'
//}
//Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
//
//addClass(obj, 'new'); // obj.className='open menu new'
//addClass(obj, 'open'); // без изменений (класс уже существует)
//addClass(obj, 'me'); // obj.className='open menu new me'
//
//alert( obj.className ); // "open menu new me"
//P.S. Ваша функция не должна добавлять лишних пробелов.

var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var className = obj.className.split(' ');

    for (var i = 0; i < className.length; i++) {
        if (className[i] === cls) {
            return obj;
        }

        className.push(cls);
        obj.className = className.join(' ');
        return obj;
    }
}

console.log(addClass(obj, 'new')); // obj.className='open menu new'
console.log(addClass(obj, 'open')); // без изменений (класс уже существует)
console.log(addClass(obj, 'me')); // obj.className='open menu new me'

console.log(obj.className); // "open menu new me"


//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть, дефисы удаляются, а все слова после них получают заглавную букву.
//Например:
//
//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';
//Такая функция полезна при работе с CSS.
//P.S. Вам пригодятся методы строк charAt, split и toUpperCase.


function camelize(str) {
    var arr = str.split('-');
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

console.log(camelize("background-color")); // 'backgroundColor';
console.log(camelize("list-style-image")); // 'listStyleImage';
console.log(camelize("-webkit-transition")); // 'WebkitTransition';


//Решето Эратосфена
//Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.
//Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:
//
//    Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
//    Пусть p=2, это первое простое число.
//    Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
//    Поменять значение p на первое не зачеркнутое число после p.
//    Повторить шаги 3-4 пока p2 < n.
//    Все оставшиеся не зачеркнутыми числа – простые.
//    Посмотрите также анимацию алгоритма.
//
//    Реализуйте «Решето Эратосфена» в JavaScript, используя массив.
//    Найдите все простые числа до 100 и выведите их сумму.

function getPrimeNumbersByEratosphen(n) {
    var arr = [],
        length;
        sum = 0;
    for (var i = 2; i <= n; i++) {
        arr.push(i);
    }

    length = arr.length;
    for (i = 0; i*i < n; i++) {
        if(arr[i] < 1) continue;
        for (var j = i+1; j < length; j++) {
            if (arr[j] % arr[i] === 0) {
                arr[j] = 0;
            }
        }
    }
    for (i = 0; i < length; i++){
        sum += arr[i];
    }
    console.log(sum, arr);
    return sum;
}

getPrimeNumbersByEratosphen(100);



//Подмассив наибольшей суммы
//На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
//    Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.
//    Ваша функция должна возвращать только эту сумму.

function getMaxSubSum(arr) {
    var sum,
        maxSum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = 0;
        for (var j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(sum, maxSum);
        }
    }
    console.log(maxSum);
    return maxSum;
}

getMaxSubSum([1, -2, 3, 4, -9, 6]);

getMaxSubSum([-1, 2, 3, -9]); //= 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]); // = 6
getMaxSubSum([-1, 2, 3, -9, 11]); //= 11
getMaxSubSum([-2, -1, 1, 2]); // = 3
getMaxSubSum([100, -9, 2, -3, 5]); // = 100
getMaxSubSum([1, 2, 3]); //= 6 (неотрицательные - берем всех)


function getMaxSubSumQuickly(arr) {
    var maxSum = 0,
        partialSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partialSum += arr[i]; // накапливаем частичную сумму
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0; // если в какой-то момент частичная сумма < 0, значит она уже не нужна, обнуляем ее и идем дельше
    }
    return maxSum;
}

getMaxSubSumQuickly([1, -2, 3, 4, -9, 6]);

getMaxSubSumQuickly([-1, 2, 3, -9]); //= 5 (сумма выделенных)
getMaxSubSumQuickly([2, -1, 2, 3, -9]); // = 6
getMaxSubSumQuickly([-1, 2, 3, -9, 11]); //= 11
getMaxSubSumQuickly([-2, -1, 1, 2]); // = 3
getMaxSubSumQuickly([100, -9, 2, -3, 5]); // = 100
getMaxSubSumQuickly([1, 2, 3]); //= 6 (неотрицательные - берем всех)