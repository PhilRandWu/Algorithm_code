function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

function forEachNode(root) {
    if(root === null) {
        return;
    }
    forEachNode(root.left);
    forEachNode(root.right);
    console.log(root.value);
}

forEachNode(A);
