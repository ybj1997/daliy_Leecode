let url = 'https://juejin.cn/post/6946022649768181774?utm_campaign=sembaidu&utm_medium=sem_baidu_jj_pc_dc01&utm_source=bdpcjj00239#heading-11&abc';

function parseParam(url) {
    const resObj = {};
    const params = /.+\?(.+)/.exec(url)[1];
    const paramsArr = params.split('&');

    paramsArr.forEach(params => {
        if (/=/.test(params)) {//是否携带参数
            let [key, val] = params.split('=');
            val = decodeURIComponent(val);//解码val
            val = /^\d+$/.test(val) ? parseFloat(val) : val;

            if(resObj.hasOwnProperty(key)) {
                resObj[key] = [].concat(resObj[key],val);//把元素包装成数组
            }else{
                resObj[key] = val;
            }
        }else{
            resObj[params] = true;
        }
    })
    return resObj
}
console.log(parseParam(url));