/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-21 11:29:37
 * @LastEditTime: 2022-01-21 11:35:13
 * @LastEditors: PhilRandWu
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
 * @description: 广度优先搜素
 * @param {*} roots 节点集
 * @param {*} target 目标值
 * @param {*} path 路径
 * @return {*}
 */
function wideSearch(roots, target, path) {
    if(roots === null || roots.length === 0) {
        return false;
    }
    let nextNodes = []; // 下一次需要循环查找的节点集
    for(let i = 0; i < roots.length; i ++) {
        path.push(roots[i]); // 将当前节点添加到路径中
        if(roots[i].value === target) {
            return true;
        } else {
            nextNodes = nextNodes.concat(roots[i].neighbor);
        }
    }
    return wideSearch(nextNodes, target, path);
}

console.log(wideSearch([A], 'E', []));
