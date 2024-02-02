// Binary Search Tree:
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return !this.root;
    }

    min() {
        if (this.isEmpty()) {
            return false;
        } else {
            let runner = this.root;
            let minValue = runner.data;
            while (runner.left) {
                runner = runner.left;
                minValue = runner.data;
            }
            return minValue;
        }
    }

    max() {
        if (this.isEmpty()) {
            return false;
        } else {
            let runner = this.root;
            let maxValue = runner.data;
            while (runner.right) {
                runner = runner.right;
                maxValue = runner.data;
            }
            return maxValue;
        }
    }
    insert(data) {
        const newNode = new Node(data);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }
    find(value){
        if (this.isEmpty()) {
            return false;
        }else{
            let runner
        }
    }
    removeMaxValue(){
        if (this.isEmpty()) {
            return false;
        }
        let runner = this.root;
        let maxValue = runner.left;
        while(runner.left){
            maxValue=runner.left.data;
            runner=runner.left;
        }
        console.log(maxValue)
        maxValue=null;
        return this
    }
}

const node1 = new Node(26);
const node2 = new Node(12);
const node3 = new Node(62);
const node4 = new Node(11);
const node5 = new Node(19);
const node6 = new Node(17);
const node7 = new Node(38);
const node8 = new Node(45);
const node9 = new Node(73);
const node10 = new Node(83);

// node1.left = node2;
// node1.right = node3;

// node2.left = node4;
// node2.right = node5;

// node5.left = node6;

// node3.left = node7;
// node3.right = node9;

// node7.right = node8;

// node9.right = node10;

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.root = node1;
// binarySearchTree.insert(5);
// console.log(binarySearchTree.min());
// binarySearchTree.insert(100);
// console.log(binarySearchTree.removeMaxValue());

const bst = new BinarySearchTree();

bst.root = node1;
bst.removeMaxValue();
console.log(bst);

