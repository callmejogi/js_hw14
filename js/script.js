function padString(str, strLength, addSymb, checkAdd){

    if(typeof (str) !== "string"){
        return `First argument is supposed to be a String!`;
    };

    if(strLength === null || strLength === ""){
        return `Error!Number of symbols is missing!`;
    }else if(isNaN(strLength)){
        return `Error!Second argument is supposed to be a Number!`;
    }



    const regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if(addSymb.length !== 1 || ( regex.test(addSymb) !== true )){
        return `Error!Here is supposed to be 1 spec. symbol`;
    };

    if(str.length = strLength){
        addSymb = null;
    }

    let right = str + addSymb;

    if(checkAdd === true ){
        for(i = 0 ;i < strLength; i++){
            if(str.length < strLength){
                return addSymb + str;
            };

            if(strLength < str.length){
                return str.substr(str.length - 1);
            }
        }
    }else{
        return padString(str, strLength, addSymb, checkAdd = right);
    }

};


let str = prompt(`Введите строку:`);

let strLength = +prompt(`Введите желаемое количество символов:`);

let addSymb = prompt(`Введите необходимый символ:`);

let checkAdd = prompt(`Добавить символ справа или слева`);

const result = console.log(padString(str, strLength, addSymb, Boolean(checkAdd)));


// Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:
// 1. строку
// 2. число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
// 3. символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
// 4. параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)
// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, 
// и если каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’). 
// Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.
// Результат вызова функции нужно вывести в консоль — после завершения функции.

// Например:
// Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***
// А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello
// Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем размер введенной строки,
// нужно строку обрезать при помощи метода substr