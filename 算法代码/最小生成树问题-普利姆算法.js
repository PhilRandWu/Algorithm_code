/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-16 11:22:18
 * @LastEditTime: 2022-01-16 13:33:22
 * @LastEditors: PhilRandWu
 */

const max = 100000;
const pointSet = [];  // 节点集
const distance = [  // 节点之间的权值
    [0, 5, 9, 7, max],
    [5, 0, max, max, 8],
    [9, max, 0, max, 8],
    [7, max, max, 0, max],
    [max, 8, 8, max, 0]
];

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');

pointSet.push(A);
pointSet.push(B);
pointSet.push(C);
pointSet.push(D);
pointSet.push(E);

function getIndex(pointSet, value) {
    for(let i = 0; i < pointSet.length; i ++) {
        if(pointSet[i].value === value) {
            return i;
        }
    }
    return -1;
}

/**
 * @description: 
 * @param {*} pointSet  节点集
 * @param {*} distance  节点之间的权值
 * @param {*} nowPoint  已连接的节点集合
 * @return {*} 最小权值对应的节点
 */
function getMinDisNode(pointSet, distance, nowPoint) {
    let fromNode = null; // 开始连接的节点
    let minDisNode = null; // 结束的节点
    let minDis = max; // 最小权值
    for(let i = 0; i < nowPoint.length; i ++) {
        let nowPointIndex = getIndex(pointSet, nowPoint[i].value); // 得到已经连接的节点的在原集合中地下标值
        for(let j = 0; j < distance[nowPointIndex].length; j ++) {
            let thisNode = pointSet[j];  // 得到打算判断的节点
            let thisValue = distance[nowPointIndex][j]; // 得到打算判断的节点的权值
            if(nowPoint.indexOf(thisNode) === -1 && thisValue < minDis) { // 如果当前节点没有被连接 并且 他的权值小于最小值
                fromNode = nowPoint[i];
                minDisNode = thisNode;
                minDis = thisValue;
            }
        }
    }
    fromNode.neighbor.push(minDisNode); // 将当前节点连接起来
    minDisNode.neighbor.push(fromNode); // 最小权值的节点连接开始节点
    return minDisNode; // 返回已连接的节点，方便添加到已连接节点的集合里
}

/**
 * @description: 
 * @param {*} pointSet  节点集
 * @param {*} distance  节点之间的权值
 * @param {*} start  最先连接的节点
 * @return {*} 
 */
function prim(pointSet, distance, start) {
    const nowPoint = []; // 已连接的节点集
    nowPoint.push(start);
    while(true) {
        if(pointSet.length === nowPoint.length) { // 如果所有的节点都已经连接则跳出循环
            break;
        }
        let minDisNode = getMinDisNode(pointSet, distance, nowPoint); // 得到最小权值所对应的节点
        nowPoint.push(minDisNode); // 连接最小权值所对应地节点
    }
}

prim(pointSet, distance, pointSet[0]);
console.log(pointSet);
