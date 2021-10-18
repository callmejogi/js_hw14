function padString(str, strLength, addSymb, checkAdd = true ){

    if(typeof (str) !== "string"){
        return `First argument is supposed to be a String!`;
    };

    if(strLength === null || strLength === ""){
        return `Error!Number of symbols is missing!`;
    }else if(isNaN(strLength)){
        return `Error!Second argument is supposed to be a Number!`;
    }

    if(addSymb === "" || addSymb === null){
        return `Error!Here is supposed to be char`;
    }else if(addSymb === undefined){
        return str.substr(0, strLength);
    }else if(addSymb.length !== 1 ){
        return `Error!Here is supposed to be only one char`;
    }

    if(strLength > str.length){

        addSymb = addSymb.repeat(strLength - str.length);

        if(checkAdd === true ){
            return str + addSymb;
        }else{
            return addSymb + str;
        };
    }else if(strLength < str.length){
        str = str.substr(0, strLength);
        return str;
    }else if(strLength === str.length){
        return str;
    };


};


let str = prompt(`Введите строку:`);

let strLength = +prompt(`Введите желаемое количество символов:`);

let addSymb = prompt(`Введите необходимый символ:`);

let checkAdd = prompt(`Добавить символ справа(true) или слева(false)`);

const result = console.log(padString(str, strLength, addSymb, Boolean(checkAdd)));

console.log(padString(`hello`,8,`*`));

console.log(padString(`hello`,6,`*`,false));

console.log(padString(`hello`,2));


//for(i = 0 ;i <= strLength; i++){
//    if(str.length < strLength){//
//       return str + addSymb;
//    };
//
//    if(str.length > strLength ){
//        addSymb = null;
//        return str.substr(str.length - 1);
//    }
//
//    if(str.length = strLength){
//        return padString(str, strLength, addSymb = null, checkAdd);
//    }
//}
//}else{
//for(i = 0 ;i <= strLength; i++){
//    if(str.length < strLength){
//        return  addSymb + str;
//    };
//}    
//}



//prev version

//str = str.substr(0, strLength);
//addSymb = addSymb.repeat(strLength - str.length);

//if(checkAdd === true ){
//    return str + addSymb;
//}else{
//    return addSymb + str;
//};