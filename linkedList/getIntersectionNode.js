import {createLinkedList, showLinkedList} from './createLinkedList.js';
import {lastKNode} from './lastKNode.js';

const getIntersectionNode = (list1, list2) => {
    let len1 = 0;
    let len2 = 0;

    // 这里要复制一下
    let [li1, li2] = [list1, list2]
    while (li1) {
        len1++;
        li1 = li1.next;
    }
    while (li2) {
        len2++;
        li2 = li2.next;
    }
    let [long, short] = len1 > len2 ? [list1, list2] : [list2, list1];
    let i;
    for (i = 0; i < Math.abs(len1 - len2); i++) {
        long = long.next
    }
    while (long && short){
        if(long.value === short.value){
            return long
        }
        long = long.next
        short = short.next
    }
    return undefined;
};


let list1 = createLinkedList([1, 8, 3, 4, 5, 9, 2]);
let list2 = createLinkedList([5, 6, 7, 8, 9, 10, 11]);

let last3 = lastKNode(list1, 3);
let last1 = lastKNode(list2, 1);

last1.next = last3;

list1.show();
list2.show()
getIntersectionNode(list1, list2).show();
