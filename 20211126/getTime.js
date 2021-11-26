function getTime (){
    let time = new Date();

    let y = time.getFullYear();
    let m = time.getMonth()+1;
    let d = time.getDate();
    let h = time.getHours();
    let f = time.getMinutes();
    let s = time.getSeconds();
    let ms = time.getMilliseconds();
    let w = time.getDay()

    console.log(y ,
        m ,
        d ,
        h ,
        f ,
        s ,
        ms,w);
}
getTime()