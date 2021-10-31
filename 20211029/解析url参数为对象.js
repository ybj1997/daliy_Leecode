const parseURL = (url) => {
    let res = {};
    const params = /.+\?(.+)/.exec(url)[1];
    const paramsArr = params.split('&');

    for (let x of paramsArr) {
        if (/=/.test(x)) {
            let [key, val] = x.split('=');
            val = decodeURIComponent(val);//解码
            console.log(val);
            val = /^\d+$/.test(val) ? parseFloat(val) : val;//如果是纯数字就转换成数字

            if(res.hasOwnProperty(key)) {
                res[key] = [].concat(res[key],val);
            }else{
                res[key] = val;
            }
        } else {
            res[x] = true;
        }
    }
    return res;
}

parseURL('https://www.baidu.com/s?ie=utf-8&ie=utf-9&f=8&rsv_bp=1&ch=11&tn=98012088_5_dg&wd=Failed%20to%20connect%20to%20github.com%20port%20443%3A%20Timed%20out&oq=OpenSSL%2520SSL_read%253A%2520%2526lt%253Bonnection%2520was%2520reset%252C%2520errno%252010054&rsv_pq=c6113ee20000001b&rsv_t=2e03FKZD1ChrNZ%2Ffyz2UUw7xGIMIqWNdb8%2Fwn5EOQ8lcF8zLdW8WmIPC1RJo0L2KUPY3mA&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_n=2&rsv_sug3=1&rsv_btype=t&inputT=1430&rsv_sug4=1430')
// {
//     ie: [ 'utf-8', 'utf-9' ],
//     f: 8,
//     rsv_bp: 1,
//     ch: 11,
//     tn: '98012088_5_dg',
//     wd: 'Failed to connect to github.com port 443: Timed out',
//     oq: 'OpenSSL%20SSL_read%3A%20%26lt%3Bonnection%20was%20reset%2C%20errno%2010054',
//     rsv_pq: 'c6113ee20000001b',
//     rsv_t: '2e03FKZD1ChrNZ/fyz2UUw7xGIMIqWNdb8/wn5EOQ8lcF8zLdW8WmIPC1RJo0L2KUPY3mA',
//     rqlang: 'cn',
//     rsv_dl: 'tb',
//     rsv_enter: 0,
//     rsv_n: 2,
//     rsv_sug3: 1,
//     rsv_btype: 't',
//     inputT: 1430,
//     rsv_sug4: 1430
//   }