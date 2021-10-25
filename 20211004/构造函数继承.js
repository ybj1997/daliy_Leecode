/*解决原型链继承，引用值共享和子组件不能传参的缺点*/

function Person(name,age) {
    this.name = name;
    this.age= age;
}

Person.prototype.getname = function() {
    return this.name;
}

function Student(name,age) {
    Person.call(this,name,age);
}

let stu1 = new Student('ybj',24);
let stu2 = new Student('gzy',22);

stu1.name = 'wangmazi';

console.log(stu2);