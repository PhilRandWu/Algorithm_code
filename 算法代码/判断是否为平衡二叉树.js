/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-17 18:24:41
 * @LastEditTime: 2022-01-17 18:40:38
 * @LastEditors: PhilRandWu
 */

/**
 * @description: 构建节点
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
const H = new Node('H');
const I = new Node('I');

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;
D.right = H;
E.right = I;

/**
 * @description: 返回一个树的度
 * @param {*} root
 * @return {*}
 */
function getDeep(root) {
    if(root === null) {
        return 0;
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1; // 最开始有一层
}

/**
 * @description: 判断一个二叉树是否是平衡树
 * @param {*} root 根节点
 * @return {*} true false
 */
function isBalance(root) {
    if(root === null) {
        return true;
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1) {
        return false; // 不是一颗平衡树
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

console.log(isBalance(A));
