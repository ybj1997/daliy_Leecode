window.addEventListener('load', () => {
    const imgs = document.querySelectorAll('img');

    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                console.log('触发',cb);
            }
        })
    }
    //IntersectionObserver是浏览器提供的构造函数(存在兼容性问题)
    //IntersectionObserver(交叉观察)
    const DomEle = new IntersectionObserver(cb);
    imgs.forEach(item => {
        //实例对象的oberve方法：观察DOM节点，交叉时触发cb函数，出现触发，消失触发
        DomEle.observe(item)
    })
})