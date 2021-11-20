/*
    思路：
    1.一个变量保存初始数组不变，一个数组用于操作
    2.等概率随机打乱：Math.random()生成0-1之间随机数，将数组分成等间距，采用轮盘赌
*/


 var Solution = function (nums) {
    this.fixedArr = nums;//初始数组
    this.initArr = nums;//操作数组
};

Solution.prototype.reset = function () {
    this.initArr = this.fixedArr;
    return this.initArr;
};


Solution.prototype.shuffle = function () {
    const len = this.initArr.length;
    let shuffleArr = [];

    /*轮盘赌产生随机索引*/
    const shuffleIndex = (length) => {
        let Index = Math.floor(Math.random() / (1 / length))
        return Index
    }

    while (shuffleArr.length !== len) {
        let crtIndex = shuffleIndex(this.initArr.length);
        let crtValue = this.initArr[crtIndex];
        if (!shuffleArr.some(item => item === crtValue)) {
            shuffleArr.push(crtValue);
            this.initArr = this.initArr.filter(item => item !== crtValue);
        }

    }
    this.initArr =this.fixedArr;
    return shuffleArr;
};