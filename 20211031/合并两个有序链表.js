/*递归法*/
var mergeTwoLists = function (l1, l2) {
    if(l1 === null) return l2;
    else if(l2 === null) return l1;
    else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
};
/*迭代法*/
var mergeTwoLists = function (l1, l2) {
    const prehead = new ListNode(-1);
    let prePoint = prehead;//创建指针

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prePoint.next = l1;
            l1 = l1.next;
        }
        else {
            prePoint.next = l2;
            l2 = l2.next;
        }
        prePoint = prePoint.next
    }
    prePoint.next = l1 === null ? l2 : l1
    return prehead.next
};