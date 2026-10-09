//definition for singly linked list
function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

// input:
//      head of singly linked list
// output:
//      the middle node of linked list
// lưu ý:
//      nếu có 2 middle node thì return node thứ 2
// công thức:
//      stepHeadToMiddle = Math.floor(length / 2)
//      middleIndex = Math.floor(length / 2)
//      (index của linked list bắt đầu từ 0)

// solution 1:
// tìm length của linkedlist
// tìm số step để di chuyển từ head đến middle: length / 2
// time complexity: O(n) vì duyệt cả linked list
// space complexity: O(1)

const middleNode = (head) => {
  //find the length of linked list
  let count = 0; //the number of node

  //traverse linked list to the last node
  let p = head; //initial the pointer
  while (p) {
    count++;
    p = p.next;
  }

  //the number of step from head to middle node
  let step = Math.floor(count / 2);

  //traverse linked list to the middle node
  p = head;
  for (let i = 0; i < step; i++) {
    p = p.next;
  }

  return p;
};

// solution 2: fast and slow
//fast go 2 node each step, slow go 1 node each step
// when fast go to the last node, slow go to the middle
// time: O(n)
// space: O(1)
const middleNode2 = (head) => {
  let fast = head,
    slow = head;
  //traverse the fast to last linked list then
  //the slow auto go to the middle node
  //if length is even (2k), step is 2k-1, fast go to null
  //if length is odd (2k+1), step is 2k,
  //fast go to the last node
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
