/*
    思路：
        Map自带迭代器，通过调用通过调用next()可以按加入时间先后设置
*/
 var LRUCache = function (capacity) {
    this.size = capacity;
    this.map = new Map();
};
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;
    let useValue = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, useValue);
    return useValue;
};
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key, value);
    } else {
        if (this.map.size < this.size) {
            this.map.set(key, value);
        } else {
            let lastKey = this.map.keys().next().value;
            this.map.delete(lastKey);
            this.map.set(key, value);
        }
    }

};