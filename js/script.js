function padString(str, strLength, symb, right = true ){
    if(typeof(str) !== "string") return 'It`s not a string';
    if(typeof(strLength) !== "number" || isNaN(strLength)) return `strLength is not number`;
    if(str.length >= strLength) return str.substring(0, strLength);

    if(typeof(symb) !== "string" && addSymb.length !== 1) return  `symb is invalid`;
    if(typeof (right) !== "boolean") return `flag is invalid`;

    let localString = '';

    for(let i = str.length; i < strLength; i++){
        localString += symb;
    }

    return right? str + localString : localString + str;

};

    console.log(padString(prompt('Write a string'), +prompt('Type a number of symbols u want in result'), prompt('Add 1 symbol'), Boolean (prompt('right/left?')) ));
    console.log(padString(`hello`,2));
    console.log(padString(`hellooooooo`,20,"%"));
    console.log(padString(`westtt`,20,"#",false));
    console.log(padString(`east`,10,"#"));

