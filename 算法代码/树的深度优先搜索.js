/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-19 12:02:05
 * @LastEditTime: 2022-01-19 12:26:29
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

function deepSearch(root, target) {
    if(root === null) {
        return false;
    }
    if(root.value === target) {
        return true;
    }
    let result = false;
    for(let i = 0; i < root.child.length; i++) {
        result |= deepSearch(root.child[i], target);
    }
    return result ? true : false;
}

console.log(deepSearch(A, 'C'));
