const jsonp = ({ url, params, callbackName }) => {
    const genetateURL = () => {
        let dataurl = '';
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                dataurl += `${key}=${params[key]}&`;
            }
        }
        dataurl += `callback=${callbackName}`;
        return `${url}?${dataurl}`;
    }

    return new Promise((resolve, reject) => {
        let scriptEle = document.createElement('script');
        scriptEle = genetateURL();
        document.body.appendChild(scriptEle);
        window[callbackName] = data => {
            resolve(data);
            document.body.removeChild(scriptEle);
        }
    })
}
