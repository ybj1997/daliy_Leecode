const ajax = url => {
    return new Promise((resolve, reject) => {
        //兼容ie5，6没有XMLHttpRequest对象，使用ActiveXObject对象
        const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("GET", url);
        //设置setRequestHeader请求头方法，必须在open和send之间设置
        xhr.setRequestHeader("Accept", "application/json");//客户端处理类型为json
        xhr.send();
        xhr.onreadystatechange = function () {
            if(xhr.readyState !== 4) return;
            if(xhr.status === 200 && xhr.status === 304){
                resolve(xhr.responseText);
            }else{
                reject(new Error(xhr.responseText))
            }
        }
    })
}

