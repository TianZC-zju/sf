import {createLinkedList, Node} from './createLinkedList.js';

const mergeList = (list1, list2)=>{
    let p1 = list1;
    let p2 = list2;
    let cur = new Node()
    const head = cur
    while (p1 && p2){
        if(p1.value < p2.value){
            cur.next = p1;
            p1 = p1.next;
            cur = cur.next;
        }else{
            cur.next = p2;
            p2 = p2.next;
            cur = cur.next
        }
    }
    if(p1) cur.next = p1;
    if(p2) cur.next = p2;

    return head.next;

}





let list1 = createLinkedList([1, 4, 8, 9, 15, 20])
console.log(list1.show());
let list2 = createLinkedList([3, 5, 6, 10, 15])
console.log(list2.show());
let list3 = mergeList(list1, list2)
console.log(list3.show());
