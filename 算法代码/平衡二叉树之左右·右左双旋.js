/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-18 18:54:59
 * @LastEditTime: 2022-01-18 19:57:09
 * @LastEditors: PhilRandWu
 */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const node2 = new Node('2');
const node4 = new Node('4');
const node5 = new Node('5');
const node7 = new Node('7');
const node8 = new Node('8');

node8.left = node7;
node7.left = node5;
node5.left = node4;
node4.left = node2;

/**
 * @description: 获取树的度
 * @param {*} root
 * @return {*} 返回具体深度
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
 * @description: 判断是否平衡
 * @param {*} root
 * @return {*} 返回 false true
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
 * @description: 左旋
 * @param {*} root
 * @return {*} 返回新的根节点
 */
function leftRotate(root) {
    const newRoot = root.right;
    const changeBranch = root.right.left;
    newRoot.left = root;
    root.right = changeBranch;
    return newRoot;
}

/**
 * @description: 右旋
 * @param {*} root
 * @return {*} 返回新的根节点
 */
function rightRotate(root) {
    const newRoot = root.left;
    const changeBranch = root.left.right;
    newRoot.right = root;
    root.left = changeBranch;
    return newRoot;
}

/**
 * @description: 改进之后的变为 平衡二叉树
 * @param {*} root
 * @return {*} 返回新的根节点
 */
function Change(root) {
    if(isBalance(root)) {
        return root;
    }
    if(root.left !== null) {
        root.left = Change(root.left);
    }
    if(root.right !== null) {
        root.right = Change(root.right);
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if(leftDeep > rightDeep) {
        let changeBranchDeep = getDeep(root.left.right);
        let noChangeBranchDeep = getDeep(root.left.left);
        if(changeBranchDeep > noChangeBranchDeep) { // 先进行左旋 变化分支成为了最深分钟
            root.left = leftRotate(root.left); // 左旋
        }
        return rightRotate(root);
    } else {
        let changeBranchDeep = getDeep(root.right.left);
        let noChangeBranchDeep = getDeep(root.right.right);
        if(changeBranchDeep > noChangeBranchDeep) { // 先进行右旋 变化分支成为了最深分钟
            root.right = rightRotate(root.right); // 右旋
        }
        return leftRotate(root);
    }
}

// console.log(isBalance(node8)); // 未改变之前不平衡  false

// const newRoot = Change(node8); // 进行改变
// console.log(newRoot);  // 改变之后的根节点
// console.log(isBalance(newRoot)); // 改变之后变为平衡


const arr = [];
for(let i = 0; i < 10000; i ++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

function addNode(root, num) {
    if(root.value > num) {
        if(root.right !== null) {
            addNode(root.right, num);
        } else {
            root.right = new Node(num);
        }
    } else {
        if(root.left !== null) {
            addNode(root.left, num);
        } else {
            root.left = new Node(num);
        }
    }
}

function buildBinarySearchTrees(arr) {
    if(arr === null || arr.length === 0) {
        return null;
    }
    let root = new Node(arr[0]);
    for(let i = 0; i < arr.length; i ++) {
        addNode(root, arr[i]);
    }
    return root;
}

let num = 0; // 内部搜索次数
function search(root, target) {
    if(root === null || target === null) {
        return false;
    }
    num ++;
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
console.log(getDeep(root)); // 层数
console.log(isBalance(root)); // 是否平衡
console.log(search(root, 1000));
console.log(num); // 搜索次数

num = 0;
const newRoot1 = Change(root);
console.log(getDeep(newRoot1)); // 层数
console.log(isBalance(newRoot1)); // 是否平衡 可能任然不平衡，因为还有特殊情况
console.log(search(newRoot1, 1000));
console.log(num);; // 搜索次数
