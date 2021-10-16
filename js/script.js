function padString(str, strLength, addSymb, checkAdd){
    if(str === null || str === ""){
        return `Error!String is missing!`;
    };

    if(strLength === null || strLength === ""){
        return `Error!Number of symbols is missing!`;
    }else if(isNaN(strLength)){
        return `Error!It's not a Number`;
    };

    if(addSymb === null || addSymb === ""){
        return `Error!Symbol is missing!`;
    };

    if(checkAdd === null ){
        return `Error!Check is missing!`;
    }else if(checkAdd === ""){
        return padString(str, strLength, addSymb, checkAdd === right);
    };

    strLength = [length.str];

};

let str = prompt(`Введите строку:`);

let strLength = +prompt(`Введите желаемое количество символов:`);

let addSymb = prompt(`Введите необходимый символ:`);

let checkAdd = prompt(`Добавить символ справа/слева?`);