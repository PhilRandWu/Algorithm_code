const arr = [1, 8, 54, 74, 21, 215, 4542, 1121, 512];


function quickSort(arr) {
    if(arr == null || arr.length == 0) {
        return;
    }
    sort(arr,0,arr.length)
}

function sort(arr,begin,end) {
    if(begin > end - 1) {
        return;
    }
    let left = begin;
    let right = end;
    do {
        do {
            left ++;
        } while(left < right && arr[left] < arr[begin]);  // 找到 大于 begin 的第一个数
        do {
            right --;
        } while(left < right && arr[right] > arr[begin]); // 找到从后向前 的 第一个小于 begin 的数
        if(left < left) {
            swap(arr, left, right); // 交换
        }
    } while(left < right)
    let swapPoint = left === right ? right - 1 : right + 1; //
    swap(arr,begin,swapPoint);
    sort(arr,begin,swapPoint); // 重新排序 左边
    sort(arr,swapPoint + 1,end) // 重新排序 右边
}

function swap(arr,a,b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


quickSort(arr);
console.log(arr);
