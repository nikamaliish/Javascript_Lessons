/**
 * Created by User on 03.07.2016.
 */
//Задание 1.
//Объекты могут быть использованы для построения различных структур данных. Часто
//встречающаяся структура – список (не путайте с массивом). Список – связанный набор
//объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
//    var list = { value: 1, rest: { value: 2, rest: {value: 3, rest: null } } };
//Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два
//списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную
//переменную. Это два независимых списка, при этом у них есть общая структура list, которая включает
// три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои
//свойства как отдельный список из трёх элементов. Напишите функцию arrayToList, которая строит
//такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт
//массив из списка. Также напишите вспомогательную функцию prepend, которая получает элемент и
//создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth,
//которая в качестве аргументов принимает список и число, а возвращает элемент на заданной
//позиции в списке, или же undefined в случае отсутствия такого элемента.

function arrayToList(arr) {

    var rest = null;

    for (var i = arr.length - 1; i >= 0; i--) {
        rest = {value: arr[i], rest: rest};
    }
    return rest;
}


function listToArray(list) { // черезчур заморочено получилось, кажется. Можно ведь сделать проще?
    var arr = [];
    listToArray1(list, arr);

    function listToArray1(list, arr) {
        arr.push(list.value);
        if (list.rest) {
            listToArray1(list.rest, arr);
        }
        return arr;
    }

    return arr;
}


function prepend(element, list) {
    var newList = {value: element, rest: list};
    return newList;
}


function nth(list, num) {
    if (!list) {
        return undefined;
    }
    else if (num === 0) {
        return list.value;
    }
    else {
        return nth(list.rest, num - 1);
    }
}


var list = arrayToList([1, 2, 3, 4, 5]);
console.log(list);

list = prepend(10, list);
console.log(list);

console.log(nth(list, 4));
console.log(nth(list, 7));

var arr = listToArray(list);
console.log(arr);


console.log(arrayToList([10, 20]));
console.log(listToArray({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));


//Задание 2.
//Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как
//аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как
//оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
//который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

function reverseArray(arr) {

    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}


function reverseArrayInPlace(arr) {

    for (var i = arr.length - 1; i >= 0; i--) {
        var n;
        n = arr.splice(i - arr.length, 1);
        arr.push(n[0]);
    }
    return arr;
}

console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));

//Задание 3.
//Реализовать функцию pick(obj, keys), которая принимает аргументами объект и массив строк
//(названия ключей). Возвращает новый объект, куда вошли все ключи, указанные в
//массиве keys, и соответствующие значения из объекта obj. Если в объекте obj, нет ключа,
//указанного в массиве keys, в результирующем объекте этот ключ не должен присутствовать.


function pick(obj, keys) {
    var newObj = {};
    for (var key in obj) {
        if (keys.indexOf(key) >= 0) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


var user = {
        name: 'Sergey',
        age: 30,
        email: 'sergey@gmail.com',
        friends: ['Sveta', 'Artem']
    },
    params = ['name', 'email', 'friends'];

console.log(pick(user, params));
console.log(pick(user, ['name']));

