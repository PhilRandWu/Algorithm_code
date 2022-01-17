/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-17 11:32:51
 * @LastEditTime: 2022-01-17 12:00:15
 * @LastEditors: PhilRandWu
 */

const arr = [];
for(let i = 0; i < 10; i ++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

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

/**
 * @description: 添加节点
 * @param {*} root 根节点
 * @param {*} num 值
 * @return {*}
 */
function addNode(root, num) {
    if(root == null || root === num) {
        return;
    }
    if(root.value > num) { // 将 num 添加向 root 的左边
        if(root.left === null) { // 如果根节点的左节点为 null, 则直接添加
            root.left = new Node(num);
        } else { // 递归调用判断根节点的左节点
            addNode(root.left, num);
        }
    } else {
        if(root.right === null) { // 如果根节点的右节点为 null, 则直接添加
            root.right = new Node(num);
        } else { // 递归调用判断根节点的右节点
            addNode(root.right, num);
        }
    }
}

/**
 * @description: 将传入的数组构建一颗二叉搜索树
 * @param {*} arr 传入数组
 * @return {*} 返回一个二叉搜索树
 */
function buildBinarySearchTrees(arr) {
    if(arr === null || arr.length === 0) {
        return;
    }
    let root = new Node(arr[0]);
    for(let i = 1; i < arr.length; i ++) {
        addNode(root, arr[i]);
    }
    return root;
}

const root = buildBinarySearchTrees(arr);
console.log(root);
