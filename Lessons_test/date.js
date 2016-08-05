/**
 * Created by User on 04.08.2016.
 */
//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
//Временная зона – местная. Выведите его на экран.

var feb20_2012 = new Date(2012, 1, 20, 3, 12);
console.log(feb20_2012);


//Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
//Например:
////var date = new Date(2012,0,3);  // 3 января 2012
//alert( getWeekDay(date) );      // Должно вывести 'вт'

function getWeekDay(date) {
    var options = {
        weekday: 'short'
    };

    return date.toLocaleString('ru', options);
}

var date = new Date(2012, 0, 3);
console.log(getWeekDay(date));


function getWeekDay2(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}

console.log(getWeekDay2(date));


//Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
//День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
//var date = new Date(2012, 0, 3);  // 3 янв 2012
//alert( getLocalDay(date) );       // вторник, выведет 2


function getLocalDay(date) {
    var result = date.getDay();
    return result || 7; // заменяем 0 (вс) на 7
}

date = new Date(2012, 0, 8);  // 3 янв 2012
console.log(getLocalDay(date));       // вторник, выведет 2


//Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
//Например, для 2 января 2015:
//var date = new Date(2015, 0, 2);
//alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
//alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
//alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
//P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.

function getDateAgo(date, days) {
    var dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
console.log(getDateAgo(date, 365)); // 2, (2 января 2014)


//Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
//
//Параметры:
//year – 4-значный год, например 2012.
//month – месяц от 0 до 11.
//Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1)); // 29


//Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
//Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:
//getSecondsToday() == 36000 // (3600 * 10)

function getSecondsToday() {
    var now = new Date(),
        startToday = new Date(now);

    startToday.setHours(0, 0, 0, 0);
    return Math.round((now - startToday) / 1000);
}

console.log(getSecondsToday());


//Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

function getSecondsToTomorrow() {
    var now = new Date(),
        tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return Math.round((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());


function getSecondsToTomorrow2() {
    var secondsNow = getSecondsToday();

    return Math.round(3600 * 24 - secondsNow);
}

console.log(getSecondsToTomorrow2());


//Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
//Например:
//var d = new Date(2014, 0, 30); // 30 января 2014
//alert( formatDate(d) ); // '30.01.14'
//P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.

function formatDate(date) {
    var options = {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric'
    };
    return date.toLocaleString('ru', options);
}

var d = new Date(2014, 0, 0);
console.log(formatDate(d));

function formatDate2(date) {
    var yy = date.getFullYear().toString().slice(2,4);
    mm = date.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    dd = date.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    var result = dd + '.' + mm + '.' + yy;
    return result;
}

console.log(formatDate2(d)); // '30.01.14'

//Напишите функцию formatDate(date), которая форматирует дату date так:
//    Если со времени date прошло менее секунды, то возвращает "только что".
//    Иначе если со времени date прошло менее минуты, то "n сек. назад".
//    Иначе если прошло меньше часа, то "m мин. назад".
//    Иначе полная дата в формате "дд.мм.гг чч:мм".
//    Например:
//function formatDate(date) { /* ваш код */ }
//alert( formatDate(new Date(new Date - 1)) ); // "только что"
//alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг

function formatDate3(date) {
    var diff = new Date() - date;
    if (diff < 1 * 1000) {
        return 'только что';
    }
    else if (diff < 60 * 1000) {
        var n = diff / 1000;
        return n + ' сек. назад';
    }
    else if (diff < 60 * 60 * 1000) {
        var m = diff / 60000;
        return m + ' мин. назад';
    }
    else
        return formatDate2(date);
}

console.log(formatDate3(new Date(new Date - 1)));
console.log(formatDate3(new Date(new Date - 30 * 1000)));
console.log(formatDate3(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate3(new Date(new Date - 86400 * 1000)));