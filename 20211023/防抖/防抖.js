function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}

var node = document.getElementById('layout')
function getUserAction(e) {
    console.log(this, e,'调用')  // 分别打印：node 这个节点 和 MouseEvent
};
node.onclick = debounce(getUserAction, 1000)
