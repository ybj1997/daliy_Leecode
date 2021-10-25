var romanToInt = function (s) {
    let romen =
        [{ 'I': 1 },
        { 'V': 5 },
        { 'X': 10 },
        { 'L': 50 },
        { 'C': 100 },
        { 'D': 500 },
        { 'M': 1000 }];

    const map = new Map();
    for (let x of romen) {
        map.set(Object.keys(x)[0], Object.values(x)[0]);
    }
    //Map(7) {
    //     'I' => 1,
    //     'V' => 5,
    //     'X' => 10,
    //     'L' => 50,
    //     'C' => 100,
    //     'D' => 500,
    //     'M' => 1000
    //   }
    let sum = 0;
    let arr = [...s]
    for (let x = 0;x< arr.length; x++) {
        if (map.get(arr[x]) < map.get(arr[x + 1])) {
            sum -= map.get(arr[x]);
        }else{
            sum += map.get(arr[x]);
        }
    }
    return sum
};
//console.log(romanToInt('III'));
//console.log(romanToInt("IV"));
console.log(romanToInt("MCMXCIV"));