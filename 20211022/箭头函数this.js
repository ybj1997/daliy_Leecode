//箭头的函数的父级函数的this指向哪里，箭头函数的this就指向哪里
//箭头函数体内的this就是定义时所在的对象，而不是使用时所在对象-----阮一峰

function Person(name) {
    console.log(this,'父级this');
    let obj = new Object();
    obj.name = name;
    obj.fun = () => {
        console.log(this,'箭头函数this');
    }
    return obj;
}

let person = new Person('ybj');
person.fun();
console.log(person,'实例this');