// 栈
// 先进后出
// 相当于一个瓶子，只能从口出，先进去的压在最底下

class Stack {
    constructor() {
        this.arr = [];
    }
    push(value) {
        this.arr.push(value);
    }
    pop() {
        this.arr.pop();
    }
}


const stack = new Stack();
stack.push(1);
stack.push(4);
console.log(stack);
stack.pop();
console.log(stack);

