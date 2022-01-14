/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-14 20:19:00
 * @LastEditTime: 2022-01-14 20:29:53
 * @LastEditors: PhilRandWu
 */

/**
 * @description: 
 * @param {*} value
 * @return {*}
 */
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

/**
 * @description: 深度优先遍历
 * @param {*} root 根节点
 * @param {*} target 目标值
 * @return {*}
 */
function deepSearch(root, target) {
    if(root === null || !target) {
        return false;
    }
    if(root.value === target) {
        return true;
    }
    const left = deepSearch(root.left, target);
    const right = deepSearch(root.right, target);
    return left || right;
}

console.log(deepSearch(A, 'T'));
