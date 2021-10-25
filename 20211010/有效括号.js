var isValid = function (s) {
    let arr = [...s];
    console.log(s.match(/[{}()\[\]]/g));
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === '{' || arr[i] === '[' || arr[i] === '('){
            stack.push(arr[i]);
        }else{
            if(stack.length === 0) return false;
            let top = stack[stack.length - 1];//栈顶元素
            if(arr[i] === '}' && top ==='{' || arr[i] === '[' && top ===']' || arr[i] === '(' && top === ')'){ 
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return !stack.length
};

console.log(isValid("{[]}())((("));

