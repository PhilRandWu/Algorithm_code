/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-14 20:33:26
 * @LastEditTime: 2022-01-14 21:01:07
 * @LastEditors: PhilRandWu
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
 * @description: 
 * @param {*} rootList 将根节点按 [ A ] 格式传入作为参数
 * @param {*} target 目标值
 * @return {*}
 */
function borderSearch(rootList, target) {
    if(rootList === null || !rootList.length || !target) {
        return false;
    }
    const childList = [];
    for(let i = 0; i < rootList.length; i++) {
        if(rootList[i] !== null && rootList[i].value === target) {
            return true;
        } else {
            rootList[i].left && childList.push(rootList[i].left); // 防止叶子节点的 left 与 right 为 null
            rootList[i].right && childList.push(rootList[i].right); // 如果有则添加
        }
    }
    return borderSearch(childList, target);
}

console.log(borderSearch([A], 'J'));
