// 牺牲空间来实现算法
const arr = [1, 8, 54, 74, 21, 215, 4542, 1121, 512];

function quickSort(arr) {
    if(arr == null || arr.length <= 0) {
        return [];
    }
    let Leader = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < Leader) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    left = quickSort(left);
    // console.log(left);
    right = quickSort(right);
    left.push(Leader);
    return left.concat(right);
}


console.log(quickSort(arr));
