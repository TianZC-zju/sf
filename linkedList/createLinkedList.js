export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    show() {
        let str = '', node = this;
        while (node) {
            str += node.value + (node.next?' -> ':'');
            node = node.next;
        }
        console.log(str);
    }
}

export const createLinkedList = (array) => {
    if (array.length <= 0) return null;

    const head = new Node(array[0]);
    let p = head;

    for (let i = 1; i < array.length; i++) {
        p.next = new Node(array[i]);
        p = p.next;
    }

    return head

};

export const showLinkedList = (head) => {

    let p = head
    const array = []
    while (p){
        array.push(p.value)

        // 错误：这里忘记写了
        p = p.next
    }

    return array.join('-->')
};

