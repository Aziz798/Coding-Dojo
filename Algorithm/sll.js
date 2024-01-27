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
    removeFront() {
        if (this.isEmpty()) {
            return false
        } else {
            this.head = this.head.next;
            return this;
        }
    };
    print() {
        if (this.isEmpty()) {
            return false;
        } else {
            let runner = this.head;
            while (runner) {
                console.log(runner.data);
                runner = runner.next;
            };
        };
    };
    contains(value) {
        if (this.isEmpty()) {
            return false;
        } else {
            let runner = this.head;
            while (runner) {
                if (runner.data === value) {
                    return true;
                };
                runner = runner.next;
            };
        };
        return false;
    };
    length() {
        let count = 1;
        if (this.isEmpty()) {
            console.log("Sll is empty");
            return false;
        } else {
            let runner = this.head;
            while (runner.next) {
                count++;
            };
            runner = runner.next;
        };
        return count;
    };
    addToBack(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this;
    };
    delete(value) {
        if (this.isEmpty()) {
            return false;
        }
        if (this.head.data === value) {
            this.head = this.head.next;
            return true;
        }
        let runner = this.head;
        while (runner.next && runner.next.data !== value) {
            runner = runner.next;
        }
        if (runner.next && runner.next.data === value) {
            runner.next = runner.next.next;
            return true;
        }
        return false;
    };
    reverse(){
        if(this.isEmpty()){
            return false;
        }
        const newSll=new Sll();
        let runner = this.head;
        while (runner){
            newSll.addToFrontWithNode(runner.data)
            runner=runner.next;
        }
        return newSll;
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
