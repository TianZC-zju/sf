//快慢指针
// 时间复杂度 O(n)，空间复杂度O(1)，最大遍历节点数2n

const nodeMap = new Map()

function getIntersection(list) {
    let slow = list;
    // let fast = list;
    while (slow && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return slow;
    }
    return null;
}


function findLastKth(list, n) {
    let p1 = list;
    let p2 = list;
    for (let i = 0; i < n; i++) {
        if (!p2) return null;
        p2 = p2.next;
    }
    while (p2) {
        p2 = p2.next;
        p1 = p1.next;
    }
    return p1;
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    show() {
        let str = '', node = this;
        while (node) {
            str += node.val + ' ';
            node = node.next;
        }
        console.log(str);
    }
}

function createList(values) {
    if (values.length === 0) return null;
    let head = new Node(values[0]), p = head;
    for (let i = 1; i < values.length; i++) {
        p.next = new Node(values[i]);
        p = p.next;
    }
    return head;
}


let list = createList([1, 8, 3, 4, 5, 9, 2]);
let last5 = findLastKth(list, 4);
let last1 = findLastKth(list, 1);
last1.next = last5;
//console.log(list)

console.log(getIntersection(list));

