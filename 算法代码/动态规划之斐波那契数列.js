/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-21 11:48:44
 * @LastEditTime: 2022-01-21 11:58:37
 * @LastEditors: PhilRandWu
 */

// 动态规划题目一般在笔试的大题中

// 斐波那契数列
// 0 1 1 2 3 5 8 13 21

// 传统方法
/**
 * @description: 
 * @param {*} n 查看斐波那契数列的 第 n 位是多少
 * @return {*}
 */
function fibo1(n) {
    if(n <= 0) return -1;
    if(n === 1) return 0;
    if(n === 2) return 1;
    let a = 0;
    let b = 1;
    let c = 0;
    for(let i = 3; i <= n; i ++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
console.log(fibo1(6));


// 动态规划解决斐波那契数列

/**
 * @description: 
 * @param {*} n 查看斐波那契数列的 第 n 位是多少
 * @return {*}
 */
function fibo2(n) {
    if(n <= 0) return -1;
    if(n === 1) return 0;
    if(n === 2) return 1;
    return fibo1(n - 1) + fibo2(n - 2); // 只需要遵循相应的规律，在逻辑上当前项等于上一项加上上一项的上一项，故只需递归遍历即可
}

console.log(fibo2(6));
