/*
思路:利用哈希表
*/
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    let map = new Map();
    let nodeA = headA;//创建指针
    while(nodeA){
        map.set(nodeA,true);
        nodeA = nodeA.next;
    }
    let nodeB = headB;//创建指针
    while(nodeB){
        if(map.has(nodeB)) return nodeB;
        nodeB = nodeB.next;
    }
};