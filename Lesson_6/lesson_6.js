//Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3],

var list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};

function arrayToList(arr) {
    var rest = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        rest = {value: arr[i], rest: rest};
    }
    return rest;
}

console.log(arrayToList([10, 20, 50, 5, 90, 667]));

function arrayToList2(arr) {
    var rest;
    if (arr.length == 0) {
        rest = null;
    } else {
        rest = {value: arr.shift(), rest: arrayToList2(arr)};
    }

    return rest;
}

console.log(arrayToList2([10, 20, 50, 5, 90, 667]));

// а также функцию listToArray, которая создаёт массив из списка.

function listToArray(rest) {
    var valuesOfList = [];
    while (rest) {
        valuesOfList.push(rest.value);
        rest = rest.rest;
    }
    return valuesOfList;
}

console.log(listToArray({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}})); // → [10, 20, 30]

function listToArray2(list) {
    var valuesOfList = [];

    function restToArray(rest, arr) {
        if (rest !== null) {
            arr.push(rest.value);
            restToArray(rest.rest, arr);
        }
    }

    restToArray(list, valuesOfList);

    return valuesOfList;
}

console.log(listToArray2({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}})); // → [10, 20, 30]

//Также напишите вспомогательную функцию prepend, которая получает элемент и
//создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth,
//которая в качестве аргументов принимает список и число, а возвращает элемент на заданной
//позиции в списке, или же undefined в случае отсутствия такого элемента.

function prepend(element, list) {
    return {value: element, rest: list};
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}


function nth(rest, num) {
    var valuesOfList = [];

    while (rest) {
        valuesOfList.push(rest.value);
        rest = rest.rest;
    }

    return valuesOfList[num] || undefined;
}

console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20


//Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как
//аргумент и выдаёт новый массив, с обратным порядком элементов.

function reverseArray(arr) {
    var reverseArr = [];

    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

console.log(reverseArray([10, 20, 50, 5, 90, 667]));

//Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
//который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

function reverseArrayInPlace(arr) {

    for (var i = arr.length - 1; i >= 0; i--) {
        arr.push(arr.splice(i, 1)[0]);
    }
}

var arr = [10, 20, 50, 5, 90, 667];
reverseArrayInPlace(arr);
console.log(arr);


//Реализовать функцию pick(obj, keys), которая принимает аргументами объект и массив строк
//(названия ключей). Возвращает новый объект, куда вошли все ключи, указанные в
//массиве keys, и соответствующие значения из объекта obj. Если в объекте obj, нет ключа,
//указанного в массиве keys, в результирующем объекте этот ключ не должен присутствовать.

function pick(obj, keys) {
    var pickedObj = {},
        properties = Object.keys(obj);

    for (var i = 0; i < properties.length; i++) {
        if (~keys.indexOf(properties[i])) {
            pickedObj[properties[i]] = obj[properties[i]];
        }
    }
    return pickedObj;
}

var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
};

console.log(pick(user, ['friends']));


//Задание 4.
//Создайте класс Person. Объявите приватные свойства (в js нет приватных свойств, но вы можете
// их имитировать с помощью замыкания) name и age. Добавьте методы setAttribute и getAttribute
// - первый должен устанавливать приватное свойство, например, setAttribute('name', 'Вася'), а
// второй соответственно получать - getAttribute('name'). Создайте несколько экземпляров класса.

function Person() {
    var attribute = {};

    this.getAttribute = function (key) {
        return attribute[key];
    };

    this.setAttribute = function(key, value){
      attribute[key] = value;
    }
}

var petya = new Person();
petya.setAttribute('name', 'Vasya');
console.log(petya.getAttribute('name'));
console.log(petya.name);

petya.name = 'Petya';
console.log(petya.name);
console.log(petya.getAttribute('name'));
console.log(petya.name);
console.log(petya.getAttribute('name'));

//Задание 5.
//В ходе 6 урока мы с вами написали аналог встроенного метода bind, но он имел урезанный функционал,
// мы с помощью него могли фиксировать только контекст, но не параметры. Расширьте нашу функцию bind
// такой возможностью, реализуйте в ней фиксацию параметров.


function bind() {
    var args = [].slice.call(arguments),
        f = args.shift(),
        context = args.shift();

    return function () {
        f.apply(context, args.concat([].slice.call(arguments)));
    };
}

var binded = bind(function (param1, param2, param3) {
    console.log(param1, param2, param3);
}, {}, 11, 13);

binded(2, 3, 4, 6);


Function.prototype.myBind = function () {
    var args = [].slice.call(arguments),
        f = this,
        context = args.shift();

    return function () {
        f.apply(context, args.concat([].slice.call(arguments)));
    };
};

function test(param1, param2, param3) {
    console.log(param1, param2, param3);
}

var binded2 = test.myBind({}, 11, 12);

binded2(4, 6);
