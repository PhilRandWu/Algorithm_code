/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-14 19:36:50
 * @LastEditTime: 2022-01-14 19:54:40
 * @LastEditors: PhilRandWu
 */
const InSequence = ['D', 'B', 'E', 'A', 'F', 'C', 'G'];
const AfterOrder = ['D', 'E', 'B', 'F', 'G', 'C', 'A'];

/**
 * @description: 
 * @param {*} value
 * @return {*}
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/**
 * @description: 后序中序还原二叉树
 * @param {*} InSequence 中序
 * @param {*} AfterOrder 后序
 * @return {*}
 */
function Reduction(InSequence, AfterOrder) {
    if(InSequence === null || AfterOrder === null || InSequence.length !== AfterOrder.length || InSequence.length === 0 || AfterOrder.length === 0) {
        return null;
    }
    let root = new Node(AfterOrder[AfterOrder.length - 1]);
    let rootIndex = InSequence.indexOf(root.value);
    const InLeft = InSequence.slice(0, rootIndex);
    const InRight = InSequence.slice(rootIndex + 1, InSequence.length);
    const AfterLeft = AfterOrder.slice(0, rootIndex);
    const AfterRight = AfterOrder.slice(rootIndex, AfterOrder.length - 1);
    root.left = Reduction(InLeft, AfterLeft);
    root.right = Reduction(InRight, AfterRight);
    return root;
}

const treeRoot = Reduction(InSequence,AfterOrder);
console.log(treeRoot);
