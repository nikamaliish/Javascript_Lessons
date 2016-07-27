/**
 * Created by User on 26.07.2016.
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


function listToArray(list) {
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


//Вывести односвязный список
//var list = { value: 1 };
//list.next = { value: 2 };
//list.next.next = { value: 3 };
//list.next.next.next = { value: 4 };

//1. Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
//2. Напишите функцию printList(list) при помощи рекурсии.
//3. Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии.
// Для списка выше она должна выводить 4,3,2,1
//4. Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    var tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

printList(list);


function printList2(list) {
    console.log(list.value);
    if (list.next) {
        printList2(list.next);
    }
}

printList2(list);


function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    console.log(list.value);
}

printReverseList(list);


function printReverseList2(list) {
   var tmp = list,
       arr = [];

    while(tmp){
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for(var i = arr.length-1; i >= 0 ; i--){
        console.log(arr[i]);
    }
}

printReverseList2(list);