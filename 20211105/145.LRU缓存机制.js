/*
思路：利用Map来保存键值对
      1.map的长度为map.size
      2.如何找到最久未被使用的值？
        String,Array,Map,Set自带iterator迭代器;
        利用next().value可以得到最早(即索引为0)的键
      3.为保证新鲜性，使用过的值应该先删除，再set;
        本题中get方法和set方法更新value都算作使用，因此都要先删除，再set
*/

var LRUCache = function (capacity) {
    this.MAXLen = capacity;
    this.cache = new Map();
};
LRUCache.prototype.get = function (key) {
    
    if (this.cache.size === 0) {
        return -1;
    } else {
        if (this.cache.has(key)) {
            let value = this.cache.get(key);
            this.cache.delete(key);//先删除再set，保证get的key的新鲜性
            this.cache.set(key, value);
            return this.cache.get(key);
        } else {
            return -1;
        }
    }
};
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        /**********************/
        this.cache.delete(key);//先删除再set，保证get的key的新鲜性
        this.cache.set(key, value);
    } else {
        if (this.cache.size < this.MAXLen) {
            this.cache.set(key, value);
        } else {
            this.cache.delete(this.cache.keys().next().value);//利用迭代器
            this.cache.set(key, value);
        }
    }
};