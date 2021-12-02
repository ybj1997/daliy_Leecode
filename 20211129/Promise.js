/*
    IIFE:文件内部变量私有化
*/
(function (window) {
    /*
        Promise构造函数：
            1.new Promise时，执行Promise构造函数，返回一个有状态和结果的promise对象
            2.参数为excutor执行器函数
            3.同步执行excutor函数，函数的参数为resolve和reject两个函数
            4.resolve和reject函数用于改变状态
    */
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';
    const PENDING = 'pending';
    function Promise(excutor) {
        let _this = this;
        /*状态初始化*/
        this.status = PENDING;
        this.data = undefined;
        //promise可能先产生回调函数，再改变状态;也可能先改变状态，再产生回调函数;因此用一个数组来存
        this.callbacks = [];//每个回调函数{onResolved(){},onRejected(){}}

        /*执行器函数中调用resolve函数(注意_this指向)*/
        function resolve(value) {
            //3.promise状态只能改一次
            if (_this.status !== PENDING) return;

            //执行resolve方法有两个事情要做：
            //1.改变promise对象内部参数   
            _this.status = RESOLVED;
            _this.data = value;
            //2.如果先产生回调函数，由于此时改变了状态，满足回调函数触发的两个条件所以要异步执行then中的回调函数
            setTimeout(function () {
                if (_this.callbacks.length > 0) {
                    _this.callbacks.forEach(cbObj => {
                        cbObj.onResolved(value);
                    })
                }
            })
        }
        /*执行器函数中调用reject函数*/
        function reject(reason) {
            _this.status = REJECTED;
            _this.data = reason;
            setTimeout(function () {
                if (_this.callbacks.length > 0) {
                    _this.callbacks.forEach(cbObj => {
                        cbObj.onRejected(reason);
                    })
                }
            })
        }

        /*excutor函数中抛出异常，promise返回失败状态*/
        try {
            excutor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    Promise.prototype.then = function (onResolved, onRejected) {
        onResolved = typeof onResolved === 'function' ? onResolved : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        let _this = this;
        return new Promise((resolve, reject) => {
            /*封装改变promise状态的函数*/
            function handlePromise(cb) {
                try {
                    let result = cb(_this.data);
                    if (result instanceof Promise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result)
                    }
                } catch (err) {
                    reject(err);
                }
            }
            /*先产生回调函数,后改变状态*/
            if (_this.status === PENDING) {
                _this.callbacks.push({
                    onResolved() {
                        handlePromise(onResolved);
                    },
                    onRejected() {
                        handlePromise(onRejected);
                    }
                });
            }
            /*先改变状态，后产生回调函数，同步执行then的时候，异步调用回调*/
            else if (_this.status === RESOLVED) {
                setTimeout(() => {
                    handlePromise(onResolved);
                })
            } else {
                setTimeout(() => {
                    handlePromise(onRejected);
                })
            }
        })
    }

    Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    }

    Promise.resolve = function (value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        })
    }

    Promise.reject = function (reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }

    /*
        参数为一个可迭代对象：
            对象为空时返回一个已完成的promise;
            当对象不为空时,内部全不是promise则返回一个异步完成promise;内部全是promise时，全真才真，一假则假
    */
    Promise.all = function (promises) {
        let len = promises.length;
        let values = new Array(len);
        let resolvedPromiseCount = 0;
        return new Promise((resolve, reject) => {
            if (len === 0) {
                resolve(promises);
            }
            else {
                promises.forEach((p, index) => {
                    if (p instanceof Promise) {
                        p.then(
                            value => {
                                values[index] = value;//按索引顺序保存成功的value
                                /*成功回调的次数等于promises的长度时，则全部成功*/
                                resolvedPromiseCount++;
                                if (resolvedPromiseCount === promises.length) {
                                    //返回成功回调的数组
                                    resolve(values)
                                }
                            },
                            reason => {
                                reject(reason);
                            }
                        )
                    } else {
                        values[index] = p;
                        resolvedPromiseCount++;
                        if (resolvedPromiseCount === promises.length) {
                            //返回成功回调的数组
                            resolve(values)
                        }
                    }
                })
            }
        })
    }

    Promise.race = function (promises) {
        let len = promises.length;
        return new Promise((resolve, reject) => {
            promises.forEach((p, index) => {
                Promise.resolve(p).then(resolve,reject)
            })
        })
    }

    window.Promise = Promise;
})(window)