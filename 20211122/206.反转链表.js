
/*迭代*/
var reverseList = function(head) {
    //创建指针
    let prev = null;
    let crt = head;

    while(crt){
        const next = crt.next;
        crt.next = prev;
        prev = crt;
        crt = next;
    }

    //最后一次迭代时，prev指向crt，crt指向null，因此返回crt
    return prev;
};

/*递归*/

var reverseList = function(head) {
    if(!head || !head.next) return head;
    
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p
};