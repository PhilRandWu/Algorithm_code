/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-18 10:27:50
 * @LastEditTime: 2022-01-18 10:58:39
 * @LastEditors: PhilRandWu
 */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const node2 = new Node('2');
const node3 = new Node('3');
const node5 = new Node('5');
const node6 = new Node('6');

node2.right = node5;
node5.left = node3;
node5.right = node6;

/**
 * @description: 获取深度
 * @param {*} root
 * @return {*}
 */
function getDeep(root) {
    if(root === null) {
        return 0;
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

/**
 * @description: 判断一颗二叉树是否是平衡二叉树
 * @param {*} root
 * @return {*}
 */
function isBalance(root) {
    if(root === null) {
        return true;
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

/**
 * @description: 进行左旋
 * @param {*} root
 * @return {*}
 */
function leftRotate(root) {
    // 变化步骤：
    // 1.找到新根
    let newRoot = root.right;
    // 2.找到变化分支
    let changeBranch = root.right.left;
    // 3.改变旋转节点的右孩子为变化分支
    root.right = changeBranch;
    // 4.新根的左孩子为旋转节点
    newRoot.left = root;
    // 5.返回新根
    return newRoot;
}

/**
 * @description: 进行右旋
 * @param {*} root
 * @return {*}
 */
function rightRotate(root) {
    // 步骤：
    // 1.找到新根
    let newRoot = root.left;
    // 2.找到变化分支
    let changeBranch = root.left.right;
    // 3.旋转节点的左孩子为变化分支
    root.left = changeBranch;
    // 4.新根的右孩子为旋转节点
    newRoot.right = root;
    // 5.返回新根
    return newRoot;
}

/**
 * @description: 进行单旋操作，将一颗二叉树变为平衡二叉树
 * @param {*} root
 * @return {*} 改变后的根节点
 */
function Change(root) {
    if(isBalance(root)) {
        return root;
    }
    // 先单旋子树
    if(root.left !== null) {
        root.left = Change(root.left); // change 返回树更新之后的根节点
    }
    if(root.right !== null) {
        root.right = Change(root.right); // change 返回树更新之后的根节点
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2) {
        // 已经平衡
        return root;
    } else if (leftDeep > rightDeep) {
        // 进行右单旋
        return rightRotate(root);
    } else {
        // 进行左单旋
        return leftRotate(root);
    }
}
const newRoot = Change(node2);
console.log(newRoot);
