//definition singly linked list
function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

//input:
//  head of linked list
//output:
//  boolean: if the linked list has a cycle in it.
//note:
//  linked list có 1 chu trình khi tồn tại 1 node được
//  gặp 2 lần (reach again) khi duyệt linked list

//solution 1: check if a node is reached again
//            while traverse linked list (use Set data structure)
//time: O(n)
//space: O(n), use a Set with n elements
const hasCycle = (head) => {
  const s = new Set();

  //traverse linked list until null
  //or a node is reached again
  let p = head;
  while (p && !s.has(p)) {
    s.add(p);
    p = p.next;
  }
  //if p is not null, linked list has cycle
  return !!p;
};
