function padString(str, strLength, addSymb, checkAdd){
    if(str === null || str === ""){
        return `Error!String is missing!`;
    };

    if(strLength === null || strLength === ""){
        return `Error!Number of symbols is missing!`;
    }else if(isNaN(strLength)){
        return `Error!It's not a Number`;
    }else if(strLength.length() !== 1 ){
        return `Only 1 symbol!!`;
    };

    if(addSymb === null || addSymb === ""){
        return `Error!Symbol is missing!`;
    };

    if(checkAdd === true ){
        for(i = 0 ;i < strLength; i++){
            if(str < strLength){
                let right = str + addSymb;
                return right;
            };

            if(str > strLength){
                str.substr(str.length - 1);
            };
        }
    }

    if(checkAdd === false){
        return addSymb + str;
    }

    if(checkAdd === null){
        return padString(str, strLength, addSymb, checkAdd = right);
    }

    str.length = strLength;

};


let str = prompt(`Введите строку:`);

let strLength = +prompt(`Введите желаемое количество символов:`);

let addSymb = prompt(`Введите необходимый символ:`);

let checkAdd = confirm(`Добавить символ справа - ok, слева - cancel`);

const result = console.log(padString(str, strLength, addSymb, checkAdd));