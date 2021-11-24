# Symbol

一、特性

​	Symbol是唯一的，不可更改的；

```javascript
//创建symbol
let mysymbol1 = Symbol();//匿名Symbol
let mysymbol2 = Symbol('description');//全局共享Symbol
```

------

```javascript
//查找key为‘description’的全局共享Symbol，没有就创建一个
let findsymbol1 = Symbol.for('description')
console.log(findsymbol1)                          //Symbol('description')
```

------

```javascript
//通过Symbol查找key
let x = Symbol.keyFor(mysymbol1);
console.log(x);                                  //undefined,这个Symbol是匿名的所以找不到

let x2 = Symbol.keyFor(mysymbol2);
console.log(x2);                                 //description,这个Symbol是全局共享的
```

二、用途

 用 `Symbol` 表示对象内部状态，可以很好地隔离用户数据和程序状态。 

- 解决命名冲突:因为Symbol作为键名是唯一的

- 模拟私有属性：

  ```javascript
  function getObj(){
      let mySymbol = Symbol('test');
      const obj = {};
      obj[mySymbol] = '私有属性';
      return obj;
  }
  
  let obj = getObj();
  
  //访问测试
  console.log(obj.mySymbol);//undefined
  
  // 用 getOwnPropertySymbols() 依然可以拿到 symbol 的引用
  const [symbol] = Object.getOwnPropertySymbols(obj);
  obj[symbol]; // 'test'
  ```

  

三、注意

Object.keys()无法获取Symbol属性值

JSON.stringify忽略对象中键名为Symbol