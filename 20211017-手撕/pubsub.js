class PubSub {
    constructor() {
        this.types = {};
    }

    subscribe = (name, fn) => {
        if (this.types[name]) {
            this.types[name].push(fn)
        } else {
            this.types[name] = [fn]
        }
    }

    removeSub = (name, fn) => {
        if (!this.types[name]) {
            throw new Error('无效事件')
        }
        if (!fn) {
            delete this.types[name];
        } else {
            let index = this.types[name].findIndex(item => item === fn);//findIndex，数组满足条件的第一个值得索引
            if (index === 'undefined') {
                throw new Error(`${fn}未绑定`)
            }
            //数组塌陷是由于删除元素索引变化造成的
            this.types[name].splice(index, 1, null);//直接移除会造成数组塌陷问题
            if (this.types[name].length === 0) {
                delete this.types[name];
            }
        }
    }

    publish = (name, ...params) => {
        if (!this.types[name]) {
            throw new Error('当前事件未注册')
        }
        // this.types[name].forEach(item => {
        //     item(...params);
        // })
        /************当遍历当前name事件中，出现null时再删除**************/
        for (let i = 0; i < this.types[name].length; i++) {
            let crtItem = this.types[name][i];
            if(typeof crtItem !=='function'){
                this.types[name].splice(i,1);
                continue;
            }else{
                crtItem(...params);
            }
        }
    }
}

// /*******   调用实例   ******/
// let fn1 = (name,age) => {
//     console.log(`fn1--我的名字是${name},我的年龄是${age}`);
// }

// let fn2 = (name,age) => {
//     console.log(`fn2--我的名字是${name},我的年龄是${age}`);
// }

// let person = new PubSub();
// //订阅监听（观察者）
// person.subscribe('introduce',fn1);
// person.subscribe('introduce',fn2);
// //移除
// person.removeSub('introduce',fn2);
// //发布触发
// person.publish('introduce','ybj',24);

