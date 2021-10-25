let imgList = [...document.querySelectorAll('img')];
let length = imgList.length;

const lazyLoad = (function(){
    let count = 0;

    return function(e){
        console.log(arguments[0],e,this);
        let deleteIndexList = [];
        imgList.forEach((img, index) => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
                img.src = img.dataset.src
                deleteIndexList.push(index);
                count++;
                if (count === length) {
                    document.removeEventListener('scroll',lazyLoad);
                }
            }
        })
        imgList = imgList.filter((img,index) => !deleteIndexList.includes(index))
    }
})()

function debounce (func,wait){
    let timer;
    return function() {
        const _this = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(_this, arguments);
        },wait)
    }
}

document.addEventListener('scroll',debounce(lazyLoad,1000));