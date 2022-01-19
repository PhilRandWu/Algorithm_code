/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-19 12:02:05
 * @LastEditTime: 2022-01-19 12:05:52
 * @LastEditors: PhilRandWu
 */

function Node(value) {
    this.value = value;
    this.child = [];
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

A.child.push(B);
A.child.push(C);
A.child.push(D);
B.child.push(E);
C.child.push(F);
C.child.push(G);

function deepSearch(root) {
    if(root === null) {
        return;
    }
    console.log(root.value);
    for(let i = 0; i < root.child.length; i++) {
        deepSearch(root.child[i]);
    }
}

deepSearch(A);
