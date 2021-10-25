function Super(name,age){
    this.name = name;
    this.age = age;
}
Super.prototype.getName = function(){
    return this.name
}
function Sub(name,age){
    Super.call(this,name,age);
}

Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;