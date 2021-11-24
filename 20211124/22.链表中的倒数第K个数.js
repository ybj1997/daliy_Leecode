var getKthFromEnd = function (head, k) {
    let node = head,flag = 0;
    while(node){
        node = node.next;
        flag++;
    }
    node = head;
    for(let i=0;i<flag-k;i++){
        node = node.next;
    }
    return node;
};