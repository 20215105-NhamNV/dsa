// input:
//      mảng đã sắp xếp: numbers[]
//      1 số bất kì: target
// output:
//      tìm 2 chỉ số [i,j] (i < j) sao cho:
//      a[i] + a[j] = target
// biết: trong mảng a[] chỉ 
// tồn tại chính xác 1 cặp i,j thỏa mãn


// solution brute force 
// time: O(n^2)
// loop all the sum of 2 element in array.
// don't care the array is sorted or not
// space: O(1)
const twoSum2 = (numbers, target) => {
    let i = 0, j = 0;

    for (i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++)
            if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    }
    return [];
}

// solution two pointer
// time: O(n)
// becase total count of element the 
// two pointer l and r loop is equal to n
// space: O(1)
const twoSum2* = (numbers, target) => {
    //init 2 pointer l and r
    let l = 0;
    let r = numbers.length - 1;

    //compare the sum of left and the right element with target
    //if equal then return because there is exactly 1 result
    //if not equal then increase and decrease the left and right
    //because the array is sorted
    while (l < r) {
        let currentSum = numbers[l] + numbers[r];
        if (currentSum === target) return [l + 1, r + 1]
        if (currentSum < target) l++;
        else r--;
    }
    return [];
}