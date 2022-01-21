/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-21 14:48:20
 * @LastEditTime: 2022-01-21 15:14:57
 * @LastEditors: PhilRandWu
 */

// 动态规划之变态青蛙跳台阶问题
// 问: 如果一只青蛙可以跳 一级台阶, 两级台阶, ··· , n级台阶
// 那么当要到 n级 台阶有多少种跳法

// 同样可以用动态规划来解决
// f(n) = f(n - 1) + f(n - 2) + f(n - 3) +  ··· + f(2) + f(1);

function jump(n) {
    if(n <= 0) return -1;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let result = 0;
    for(let i = 1; i < n; i ++) {
        result += jump(n - i); 
    }
    return result + 1; // 此时的 加1 是指从第 0 级台阶直接跳到第 n 级台阶
}

console.log(jump(4));
// 1 1 1 1
// 1 2 1
// 2 1 1
// 1 1 2
// 2 2 
// 3 1
// 1 3
// 4
// 共 8 种
