var isValid = function (s) {
    let stack = [];
    let arr = s.split('');

    for (let x of arr) {
        if (x === '{' || x === '[' || x === '(') {
            stack.push(x)
        }
        else if (x === '}' && stack[stack.length - 1] === '{' ||
            x === ']' && stack[stack.length - 1] === '[' ||
            x === ')' && stack[stack.length - 1] === '('
        ) {
            stack.pop();
        }else{
            return false;//首先进入右括号时
        }
    }
    if(stack.length === 0) return true;
    return false;//只有左括号进入时
};