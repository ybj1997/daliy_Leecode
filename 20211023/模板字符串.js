let template = '我是${name}，年龄${age}，性别${sex}';
let person = {
    name: '布兰',
    age: 12
}
console.log(render(template, person)) // 我是布兰，年龄12，性别undefined

function render(temple,data,i=0){
    let reg = /\$\{(\w+)\}/;
    //判断有没有模板字符串
    if(reg.test(temple)){
        const key = reg.exec(temple)[1];//获取模板字符串键名
        temple = temple.replace(reg,data[key]);//利用replace替换temple
        i++;
        console.log(temple,`第${i}次调用`);
        return render(temple,data,i);//递归调用替换剩余
    }else{
        console.log('出口');
        return temple;
    }
}