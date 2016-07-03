//Задание 1. Написать функцию преобразования цвета из 10-ного представления в 16-ный. Функция
//должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.

function getHexadecimal(num10) {
    var num16;
    num16 = num10 > 15 ? num10.toString(16) : "0" + num10.toString(16);
    return num16;
}

function getHexadecimalColor(red, green, blue) {
    var color;
    color = getHexadecimal(red) + getHexadecimal(green) + getHexadecimal(blue);
    return color;
}

console.log(getHexadecimalColor(0, 255, 11));


//Задание 2. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы
//должны получить на выходе объект, в котором в соответствующих свойствах описаны
//единицы, десятки и сотни. Например для числа 245 мы должны получить следующий объект:
//{‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. Если число превышает 999, необходимо выдать
//соответствующее сообщение с помощью console.log и вернуть пустой объект.

function createObjectOfNumber(num) {
    var obj = {};
    if (num > 999) {
        console.log('Ошибка. Число больше 999.');
        return obj;
    }
    num = String(1e3 + num).substr(-3);
    obj = {
        'единицы': +num.charAt(2),
        'десятки': +num.charAt(1),
        'сотни': +num.charAt(0)
    };
    return obj;
}

console.log(createObjectOfNumber(67));


//Задание 3. Реализовать функцию objectToQueryString(object), которая принимает аргументом объект,
//возвращает строку. Примеры работы:
//console.log(objectToQueryString({user: "Dmitry"})); // user=Dmitry
//console.log(objectToQueryString({user:"Dmitry", password: "pass"})); //user=Dmitry&password=pass
//console.log(objectToQueryString({user: "Dmitry", password: "pass", id=1})); // user=Dmitry&password=pass&id=1

function objectToQueryString(obj) {
    var properties = [],
        string;
    for (var i in obj) {
        properties.push(i + '=' + obj[i]);
    }
        string = properties.join('&')
    console.log(string);
    return string;
}

objectToQueryString({user: "Dmitry", password: "pass", id: 1});
