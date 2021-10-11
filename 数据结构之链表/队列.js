// 队列
// 先进先出
// 队列相当于两端开 的水管
class Queue {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        this.arr.shift();
    }
}


const queue = new Queue();

queue.push(1);
queue.push(4);
console.log(queue);
queue.pop();
console.log(queue);
