import {createLinkedList} from './createLinkedList.js';
const deleteDuplication=(list)=>{
    let cur = list;
    while (cur){
        if(cur?.value === cur?.next?.value){
            cur.next = cur.next?.next
            continue
        }
        cur = cur.next
    }
    return list;
}


let list = createLinkedList([1, 1, 1,  3, 3, 3, 4, 4, 6, 7, 7, 7])
let list2 = deleteDuplication(list)
list2.show()