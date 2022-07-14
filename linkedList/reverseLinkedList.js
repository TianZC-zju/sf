import {createLinkedList, showLinkedList} from './createLinkedList.js';

const reverseLinkedList=(head)=>{
    let pPrev = head
    let pCurrent = head.next

    pPrev.next = null
    while (pCurrent){
        let pNext = pCurrent.next
        pCurrent.next = pPrev
        pPrev = pCurrent
        pCurrent = pNext
    }

    return pPrev
}

const head = createLinkedList([1,2,3,4,5])


console.log(showLinkedList(reverseLinkedList(head)));