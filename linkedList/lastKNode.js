import {createLinkedList} from './createLinkedList.js';

export const lastKNode = (head, k) => {
    let p1 = head;
    let p2 = head;

    for (let i = 0; i < k; i++) {
        p2 = p2.next;
    }
    while(p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1
};


// const head = createLinkedList([1, 4, 2, 8, 9, 10]);

// console.log(lastKNode(head, 3).value);