/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-19 12:13:10
 * @LastEditTime: 2022-01-19 12:32:51
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

function wideSearch(roots, target) {
    if(roots === null || roots.length === 0) {
        return false;
    }
    let childs = [];
    for(var i = 0; i < roots.length; i ++) {
        if(roots[i].value === target) {
            return true;
        } else {
            childs = childs.concat(roots[i].child); // 连接指定的节点的子节点数组
        }
    }
    return wideSearch(childs, target);
}

console.log(wideSearch([A], 'X'));
