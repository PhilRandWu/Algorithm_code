/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-01-21 12:13:51
 * @LastEditTime: 2022-01-21 12:22:25
 * @LastEditors: PhilRandWu
 */

// 如果一个青蛙可以一次跳 一级 台阶或者跳 两级 台阶,
// 那么请问如果有 n 个台阶, 青蛙有多少种跳法？

// 可以通过动态规划方法解决, 分为两个子问题
// 青蛙在向第 n 级台阶跳的时候必然先处于第 n - 1 或第 n - 2 级台阶上
// 那么跳上第 n 级台阶的跳法等于 跳上第 n - 1 级台阶的跳法加上 跳上第 n - 2 级台阶的跳法

// 按照此逻辑的跳法, 跳上第 n - 1 级台阶的跳法等于 跳上第 n - 2 级台阶的跳法加上 跳上第 n - 3 级台阶的跳法
// 故 f(n) = f(n-1) + f(n-2);

function jump(n) {
    if(n < 0) return -1;
    if(n === 1) return 1; // 只有一种跳法
    if(n === 2) return 2; // 两种跳法, 连续跳两次一级或者一次跳两级
    return jump(n - 1) + jump(n - 2);
}

console.log(jump(3));
