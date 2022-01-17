/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-17 12:03:06
 * @LastEditTime: 2022-01-17 12:21:08
 * @LastEditors: PhilRandWu
 */

const arr = [];
for(let i = 0; i < 10; i ++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

/**
 * @description: 创建节点
 * @param {*} value
 * @return {*}
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root, num) {
    if(root === null || root.value === num) {
        return;
    }
    if(root.value > num) {
        if(root.left === null) {
            root.left = new Node(num);
        } else {
            addNode(root.left, num);
        }
    } else {
        if(root.right === null) {
            root.right = new Node(num);
        } else {
            addNode(root.right, num);
        }
    }
}

function buildBinarySearchTrees(arr) {
    if(arr === null || arr.length === 0) {
        return;
    }
    let root = new Node(arr[0]);
    for(let i = 0; i < arr.length; i ++) {
        addNode(root, arr[i]);
    }
    return root;
}

// 构建二叉树过程注释参考上一部分 专题构建二叉树

/**
 * @description: 根据 target 查找 是否有对应值
 * @param {*} root
 * @param {*} target 目标值
 * @return {*} Boolean 值
 */
function search(root, target) {
    if(root === null || target === null) {
        return false;
    }
    if(root.value === target) {
        return true;
    }
    if(root.value > target) {
        return search(root.left, target);
    } else {    
        return search(root.right, target);
    }
}

const root = buildBinarySearchTrees(arr);
console.log(search(root, 1000));
