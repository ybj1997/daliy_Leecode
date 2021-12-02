/*哈希表*/
var getIntersectionNode = function (headA, headB) {
    let pA = headA;

    let map = new Map();
    while (pA) {
        map.set(pA,true);
        pA = pA.next;
    }
    let pB = headB;
    while(pB){
        if(map.has(pB)) return pB
        pB = pB.next;
    }
    return null
};
/*暴力法*/
var getIntersectionNode = function (headA, headB) {
    let pA = headA;

    let map = new Map();
    while (pA) {
        let pB = headB;
        map.set(pA,true);
        while(pB){
            if(map.has(pB)) return pA;
            pB = pB.next;
        }
        pA = pA.next;
    }
    return null
};