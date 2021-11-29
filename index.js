new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1');
    }, 1000)
}).then(
    value => {
        return '2'
    }
).then(
    value => {
        setTimeout(() => { 
            return '3'
        }, 1000)
    }
).then(
    value => console.log(value)
)