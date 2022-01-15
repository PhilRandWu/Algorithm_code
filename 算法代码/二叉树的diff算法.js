/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-15 20:12:07
 * @LastEditTime: 2022-01-15 20:39:19
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
const G2 = new Node('M');

A2.left = B2;
A2.right = C2;
B2.right = E2;
C2.left = F2;
C2.right = G2;
E2.left = D2;

/**
 * @description: 比较两个二叉树的改变
 * @param {*} root1 第一个二叉树的根节点
 * @param {*} root2 第二个二叉树的根节点
 * @param {*} diffList 详细记录具体的改变细节
 * [
 *    {type: '新增', origin: null, now: A},
 *    {type: '删除', origin: A, now: null},
 *    {type: '修改', origin: A, now: B},
 * ]
 * @return {*}
 */
function diff(root1, root2, diffList) {
    if(root1 === root2) { // 两个节点信息相同
        return diffList;
    } else if(root1 === null && root2 !== null) { // 新增节点
        diffList.push({type: '新增', origin: null, now: root2});
    } else if(root1 !== null && root2 === null) { // 删除节点
        diffList.push({type: '删除', origin: root1, now: null});
    } else if(root1.value !== root2.value) { // 修改节点, 值不同, 修改了当前的值但左右子节点还存在继续搜素
        diffList.push({type: '修改', origin: root1, now: root2});
        // 继续搜素节点的左右节点
        diff(root1.left, root2.left, diffList);
        diff(root1.right, root2.right, diffList);
    } else {
        // 继续搜素节点的左右节点
        diff(root1.left, root2.left, diffList);
        diff(root1.right, root2.right, diffList);
    }
}

const diffList = [];
diff(A1, A2, diffList);
console.log(diffList);
