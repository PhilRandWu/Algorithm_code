/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-14 18:39:50
 * @LastEditTime: 2022-01-14 18:39:50
 * @LastEditors: PhilRandWu
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const A = new Node('a');
const B = new Node('b');
const C = new Node('c');
const D = new Node('d');
const E = new Node('e');
const F = new Node('f');
const G = new Node('g');

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

/**
 * @description: 
 * @param {*} root
 * @return {*}
 */
function forEachNode(root) {
    if(root === null) {
        return;
    }
    console.log(root.value);
    forEachNode(root.left);
    forEachNode(root.right);
}

forEachNode(A);
