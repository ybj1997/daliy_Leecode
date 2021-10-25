var compareVersion = function (version1, version2) {
    let a = version1.split('.');
    let b = version2.split('.');
    for (let i = 0; i < a.length || i < b.length; i++) {
        let x = 0;
        let y = 0;
        if (i < a.length) {
            x = parseInt(a[i]);
        }
        if (i < b.length) {
            x = parseInt(b[i]);
        }
        if (x > y) return 1;
        if (x < y) return - 1;
    }
    return 0;
};
let constructor = new Date().constructor;
console.log(/^(RegExp|Date)$/i.test(constructor.name))