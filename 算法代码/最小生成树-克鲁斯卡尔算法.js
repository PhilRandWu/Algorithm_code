/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-16 21:21:33
 * @LastEditTime: 2022-01-16 22:39:50
 * @LastEditors: PhilRandWu
 */

const max = 100000;
const pointSet = [];
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

/**
 * @description: 判断是否可以连接
 * @param {*} beginTemp 临时的开始节点
 * @param {*} endTemp 临时的结束节点
 * @param {*} resultList 一个二维数组代表有多少个部落
 * @return {*} 返回 true false
 */

function canLink(beginTemp, endTemp, resultList) {
    let beginIn = null; // 接入部落
    let endIn = null; // 接出部落
    for(let i = 0; i < resultList.length; i ++) {
        if(resultList[i].indexOf(beginTemp) > -1) { // 如果当前部落包含临时的开始节点
            beginIn = resultList[i]; // 接入部落等于当前部落
        }
        if(resultList[i].indexOf(endTemp) > -1) { // 如果当前部落包含临时的结束节点
            endIn = resultList[i]; // 接出部落等于当前部落
        }
    }
    // 1. 如果 beginIn 与 endIn 均为 null, 表示两个节点都是新节点(均不在部落里), 可产生一个新部落
    // 2. 如果 beginIn 存在 而 endIn 为 null, 表示 beginTemp 在一个部落里, 而 endTemp 没有部落, beginTemp 所在部落扩张
    // 3. 如果 beginIn 为 null 而 endIn 存在, 表示 beginTemp 没有部落, 而 endTemp 在一个部落里, endTemp 所在部落扩张
    // 4. beginIn 在 A 部落, endIn 在 B 部落, 合并两个部落
    // 5. 如果 beginIn === endIn, 表示二者在同一个部落, 不可以连接
    if(beginIn !== null && endIn !== null && beginIn === endIn) {
        return false;
    }
    return true;
}


function link(begin, end, resultList) {
    let beginIn = null; // 接入部落
    let endIn = null; // 接出部落
    for(let i = 0; i < resultList.length; i ++) {
        if(resultList[i].indexOf(begin) > -1) { // 如果当前部落包含临时的开始节点
            beginIn = resultList[i]; // 接入部落等于当前部落
        }
        if(resultList[i].indexOf(end) > -1) { // 如果当前部落包含临时的结束节点
            endIn = resultList[i]; // 接出部落等于当前部落
        }
    }
    // 1. 如果 beginIn 与 endIn 均为 null, 表示两个节点都是新节点(均不在部落里), 可产生一个新部落
    // 2. 如果 beginIn 存在 而 endIn 为 null, 表示 beginTemp 在一个部落里, 而 endTemp 没有部落, beginTemp 所在部落扩张
    // 3. 如果 beginIn 为 null 而 endIn 存在, 表示 beginTemp 没有部落, 而 endTemp 在一个部落里, endTemp 所在部落扩张
    // 4. beginIn 在 A 部落, endIn 在 B 部落, 合并两个部落
    // 5. 如果 beginIn === endIn, 表示二者在同一个部落, 不可以连接
    if(beginIn === null && endIn === null) {
        const newArr = [];
        newArr.push(begin);
        newArr.push(end);
        resultList.push(newArr);
    } else if(beginIn !== null && endIn === null) {
        beginIn.push(end);
    } else if(beginIn === null && endIn !== null) {
        endIn.push(begin);
    } else if(beginIn !== null && endIn !== null && beginIn !== endIn) {
        let allIn = beginIn.concat(endIn); // 连接两个部落
        let needRemove = resultList.indexOf(beginIn);
        resultList.splice(needRemove, 1); // 删除原接入部落
        needRemove = resultList.indexOf(endIn);
        resultList.splice(needRemove, 1); // 删除原接出部落
        resultList.push(allIn);
    }
    begin.neighbor.push(end);
    end.neighbor.push(begin);
}

/**
 * @description: 
 * @param {*} pointSet  节点集
 * @param {*} distance  节点所对应的权值(二维数组)
 * @return {*}
 */
function Kruskal(pointSet, distance) {

    const resultList = []; // 一个二维数组代表有多少个部落
    
    while (true) {
        let minDis = max; // 最小权值
        let begin = null; // 开始节点
        let end = null; // 结束节点
    
        for (let i = 0; i < distance.length; i ++) {
            for (let j = 0; j < distance[i].length; j ++) {
                let beginTemp = pointSet[i]; // 临时的开始节点
                let endTemp = pointSet[j]; // 临时的结束节点
                let valueTemp = distance[i][j]; // 临时的权值
                if (i !== j && valueTemp < minDis && canLink(beginTemp, endTemp, resultList)) {
                    // 可以连接
                    begin = beginTemp;
                    end = endTemp;
                    minDis = valueTemp;
                }
            }
        }
        link(begin, end, resultList); // 连接节点
        if(resultList.length === 1 && resultList[0].length === pointSet.length) {
            //如果只有一个部落并且这个部落的节点数等于所有的要连接地节点数，则表示已经全部连接成功
            break;
        }
    }
}

Kruskal(pointSet, distance);
console.log(pointSet);
