/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-15 19:23:10
 * @LastEditTime: 2022-01-15 19:46:28
 * @LastEditors: PhilRandWu
 */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const A1 = new Node('A');
const B1 = new Node('B');
const C1 = new Node('C');
const D1 = new Node('D');
const E1 = new Node('E');
const F1 = new Node('F');
const G1 = new Node('G');

A1.left = B1;
A1.right = C1;
B1.left = D1;
B1.right = E1;
C1.left = F1;
C1.right = G1;

const A2 = new Node('A');
const B2 = new Node('B');
const C2 = new Node('C');
const D2 = new Node('D');
const E2 = new Node('E');
const F2 = new Node('F');
const G2 = new Node('G');

A2.left = C2;
A2.right = B2;
B2.left = D2;
B2.right = E2;
C2.left = G2;
C2.right = F2;

/**
 * @description: 二叉树的比较-左右完全相同
 * @param {*} root1 第一个二叉树的根节点
 * @param {*} root2 第二个二叉树的根节点
 * @return {*}
 */
function compare(root1, root2) {
    if(root1 === root2) {
        return true; // 如果两个根节点均相同则相同
    }
    if(root1 === null && root2 !== null || root1 !== null && root2 === null) {
        return false; // 如果其中一个为 null，并且另一个不为 null 则两颗二叉树不相同
    }
    if(root1.value !== root2.value) {
        return false; // 两个节点的值不同
    }
    return compare(root1.left, root2.left) && compare(root1.right, root2.right) || compare(root1.left, root2.right) && compare(root1.right, root2.left);
}

console.log(compare(A1, A2));
