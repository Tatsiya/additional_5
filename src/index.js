function typeOfBrackets(bracketsConfig) { 
    var typeOfBrackets;
    var openingBrackets = [];
    var closingBrackets = [];
    var twoTypesOfBrackets = {
        opening: [],
        closing: [] 
    };

    for (var elementOfBracketsConfig = 0; elementOfBracketsConfig < bracketsConfig.length; elementOfBracketsConfig++) {
        typeOfBrackets = bracketsConfig[elementOfBracketsConfig];
        openingBrackets.push(typeOfBrackets[0]);
        closingBrackets.push(typeOfBrackets[1]);
        twoTypesOfBrackets.opening = openingBrackets;
        twoTypesOfBrackets.closing = closingBrackets;
    }
    return twoTypesOfBrackets;
}

function isRightBracket(bracketsConfig, bracket, openBracket) {
    var typeOfBrackets;
    var openingBracket;
    var closingBracket;

    for (var elementOfBracketsConfig = 0; elementOfBracketsConfig < bracketsConfig.length; elementOfBracketsConfig++) {
        typeOfBrackets = bracketsConfig[elementOfBracketsConfig];
        openingBracket = typeOfBrackets[0];
        closingBracket = typeOfBrackets[1];

        if (bracket === closingBracket) {
            if (openBracket === openingBracket) {
                return true;
            } else {
                return false;
            }
        }
    }
}

module.exports = function check(str, bracketsConfig) {
    var stack = [];
    var bracket;
    var openBracket;
    var twoTypesOfBrackets = typeOfBrackets(bracketsConfig);

    for (var indexOfBracket = 0; indexOfBracket < str.length; indexOfBracket++) {
        bracket = str.charAt(indexOfBracket);

        if (twoTypesOfBrackets.opening.indexOf(bracket) !== -1) {
            if (twoTypesOfBrackets.closing.indexOf(bracket) !== -1) {
                if (stack[stack.length - 1] !== bracket) {
                    stack.push(bracket);
                } else {
                    stack.pop();
                }
            } else {
                stack.push(bracket);
            }
        } else if (twoTypesOfBrackets.closing.indexOf(bracket) !== -1) {
                openBracket = stack[stack.length - 1];
                if (isRightBracket(bracketsConfig, bracket, openBracket)) {
                  stack.pop();
                } else {
                    return false;
                }
        }
    }
    if (stack.length !== 0) {
        return false;
    } else  {
        return true;
    } 
}
