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
    function Promise(excutor) {
        let _this = this;
        /*状态初始化*/
        this.status = 'pending';
        this.data = undefined;
        //promise可能先产生回调函数，再改变状态;也可能先改变状态，再产生回调函数;因此用一个数组来存
        this.callbacks = [];//每个回调函数{onResolved(){},onRejected(){}}

        /*执行器函数中调用resolve函数(注意_this指向)*/
        function resolve(value) {
            //3.promise状态只能改一次
            if (_this.status !== 'pending') return;

            //执行resolve方法有两个事情要做：
            //1.改变promise对象内部参数   
            _this.status = 'resolved';
            _this.data = value;
            //2.如果先产生回调函数，由于此时改变了状态，满足回调函数触发的两个条件所以要异步执行then中的回调函数
            if (_this.callbacks.length > 0) {
                setTimeout(function () {//模拟异步执行，但是不准确，因为定时器是宏队列，但是promise回调时微队列
                    _this.callbacks.forEach(cbObj => {
                        cbObj.onResolved(value);
                    })
                })
            }
        }
        /*执行器函数中调用reject函数*/
        function reject(reason) {
            _this.status = 'rejected';
            _this.data = reason;
            if (_this.callbacks.length > 0) {
                setTimeout(function () {
                    _this.callbacks.forEach(cbObj => {
                        cbObj.onRejected(reason);
                    })
                })
            }
        }

        /*excutor函数中抛出异常，promise返回失败状态*/
        try {
            excutor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    Promise.prototype.then = (onResolved, onRejected) => {
        let _this = this;
        return new Promise((resolve, reject) => {
            /*封装改变promise状态的函数*/
            function handlePromise(cb) {
                try {
                    const result = cb(_this.data);
                    console.log(result, '1111');
                    if (result instanceof Promise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(_this.data)
                    }
                } catch (err) {
                    reject(err);
                }
            }
            /*先产生回调函数,后改变状态*/
            if (_this.status === 'pending') {
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
            else if (_this.status === 'resolved') {
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

    window.Promise = Promise;
})(window)