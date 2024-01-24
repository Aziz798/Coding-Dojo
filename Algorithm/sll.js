// Singly Linked List 

class Sll {
    constructor() {
        this.head = null;
    };

    isEmpty() {
        return !this.head;
    };

    addToFrontWithData(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        };
        return this;
    };

    addToFrontWithNode(node) {
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        };
        return this;
    };
};

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

const sll = new Sll();
const node1 = new Node(24);
const node2 = new Node(2);
const node3 = new Node(-30);
const node4 = new Node(73);

sll.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;