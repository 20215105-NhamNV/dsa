//đảo ngược string 
//không được dùng mảng phụ
//yêu cầu place = O(1)
//input: mảng string
//output: mảng str đảo ngược


//use temporate array
//space: O(n)
//time: O(n)
const reverseString = (strArr) => {
    const reverseStrArr = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        reverseStrArr[i] = strArr[strArr.length - i - 1];
    }
    return reverseStrArr;
}


//use built-in method of javascript
//space: O(1)
//time: O(n)
const reverseString1 = (strArr) => {
    return strArr.reverse();
}

//solution two pointer
//space: O(1)
//time: O(n)
const reverseString2 = (strArr) => {
    let l = 0, r = strArr.length - 1;
    while (l < r) {
        [strArr[l], strArr[r]] = [strArr[r], strArr[l]];
        l++;
        r--;
    }
    return strArr;
}