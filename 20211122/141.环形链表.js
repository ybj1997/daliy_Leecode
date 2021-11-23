var hasCycle = function(head) {
    let map = new Map();

    while(head){
        if(map.has(head)) return true;
        map.set(head,true);
        head = head.next;
    }
    return false;
};