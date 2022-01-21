/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-21 10:48:44
 * @LastEditTime: 2022-01-21 11:03:12
 * @LastEditors: PhilRandWu
 */

/**
 * @description: 构建节点
 * @param {*} value
 * @return {*}
 */
function Node(value) {
    this.value = value;
    this.neighbor = [];
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');

A.neighbor.push(C);
A.neighbor.push(B);
B.neighbor.push(A);
B.neighbor.push(C);
B.neighbor.push(D);
B.neighbor.push(E);
C.neighbor.push(A);
C.neighbor.push(D);
D.neighbor.push(B);
D.neighbor.push(C);
E.neighbor.push(B);

/**
 * @description: 查看图中是否存在指定的数
 * @param {*} root 根节点
 * @param {*} target 目标值
 * @param {*} path 路径
 * @return {*}
 */
function deepSearch(root, target, path) {
    if(root === null) {
        return false;
    }
    if(path.indexOf(root) !== -1) { // 如果原先的路径中已经包含当前节点表示已经搜索过该节点，不再进行搜索
        return false;
    }
    if(root.value === target) {
        return true;
    }
    path.push(root); // 将已经搜索过的节点添加到路径中
    let result = false;
    for(let i = 0; i < root.neighbor.length; i ++) {
        result |= deepSearch(root.neighbor[i], target, path); // 如果有一个为真，则 result 为真
    }
    return result ? true : false;
}

console.log(deepSearch(A, 'E', []));
