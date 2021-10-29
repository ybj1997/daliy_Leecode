/*父类构造函数*/
function Person(name,age){
    this.name = name;
    this.age = age;
    this.colors = ['red','blue'];
}
Person.prototype.getself = function(){
    return this.name;
}
/*子类构造函数*/
function Wang(){}

/*原型链继承*/
Wang.prototype = new Person('xiaowang',8);//利用父组件进行传参，
                                          //而直接使用子组件传参不行
// Wang.prototype = new Person();

let x = new Wang();
let x1 = new Wang();

x.__proto__.colors.push('white')//不隐藏__proto__
x1.colors.push('balck')//隐藏__proto__

console.log(x.__proto__ === x1.__proto__);//证明：x和x1的原型对象相同，是Person实例对象;