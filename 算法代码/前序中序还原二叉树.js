/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-14 19:05:23
 * @LastEditTime: 2022-01-14 19:34:06
 * @LastEditors: PhilRandWu
 */
const BeforeOrder = ['A', 'B', 'D', 'E', 'C', 'F', 'G'];
const InSequence = ['D', 'B', 'E', 'A', 'F', 'C', 'G']

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
 * @description: 前序遍历与中序遍历还原二叉树
 * @param {*} BeforeOrder 前序
 * @param {*} InSequence 中序
 * @return {*}  根节点
 */
function Reduction(BeforeOrder, InSequence) {
    if(BeforeOrder === null || InSequence === null || BeforeOrder.length !== InSequence.length || BeforeOrder.length === 0 || InSequence.length === 0) {
        return null;
    }
    let root = new Node(BeforeOrder[0]);
    let rootIndex = InSequence.indexOf(root.value); // 得到根节点的 下标值
    const BeforeLeft = BeforeOrder.slice(1, rootIndex + 1);  // 截取前序遍历的从 1 开始到 rootIndex + 1|    B D E
    const BeforeRight = BeforeOrder.slice(rootIndex + 1, BeforeOrder.length);  // 截取前序遍历的从 rootIndex + 1 开始到最后 |   C F G
    const InLeft = InSequence.slice(0, rootIndex);  // 截取前序遍历的从 1 开始到 rootIndex |  D B E
    const InRight = InSequence.slice(rootIndex + 1, InSequence.length);  // 截取前序遍历的从 rootIndex + 1 开始到最后 |  F C G
    root.left = Reduction(BeforeLeft, InLeft); // 递归分割左子树
    root.right = Reduction(BeforeRight, InRight); // 递归分割右子树
    return root;
}

const treeRoot = Reduction(BeforeOrder, InSequence);
console.log(treeRoot);

