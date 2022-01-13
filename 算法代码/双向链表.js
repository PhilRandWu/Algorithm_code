class BidirectionalList {
    constructor(value) {
        this.value = value;
        this.pre = null;
        this.next = null;
    }
}


const list1 = new BidirectionalList(1);
const list2 = new BidirectionalList(2);
const list3 = new BidirectionalList(3);
const list4 = new BidirectionalList(4);


list1.next = list2;
list2.pre = list1;
list2.next = list3;
list3.pre = list2;
list3.next = list4;
list4.pre = list3;

function ergodic(root) {
    let temp = root;
    while(true) {
        if(temp != null) {
            console.log(temp.value);
        } else {
            break;
        }
        temp = temp.pre;
    }
}

ergodic(list4);
