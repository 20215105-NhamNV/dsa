// kiểm tra chuỗi đối xứng  
// (bỏ qua các ký tự không phải chữ cái và số, 
// không phân biệt hoa thường)
// input:string s
// output: boolean

//solution two pointer
const isPalindrome = (str) => {
    //clean string
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    //init 2 pointer
    let left = 0;
    let right = cleanStr.length - 1;

    //loop two pointer
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) return false
        left++;
        right--;
    }
    return true;
}
//time complexcity: O(n) vì duyệt qua chuỗi 1 lần
//space complexcity: O(n) vì tạo thêm mảng mới cleanStr
//tối ưu space complex xuống O(1): 
//=>kiểm tra ký tự hợp lệ trong vòng while

const isValidChar = (c) => {
    return /[a-zA-Z0-9]/.test(c);
}
const isPalindrome1 = (s) => {
    //init 2 pointer
    let l = 0;
    let r = s.length - 1;

    //loop two pointer
    while (l < r) {
        //find valid char in the left
        if (l < r && !isValidChar(s[l])) {
            l++;
            continue;
        }
        //find valid char in the right
        if (l < r && !isValidChar(s[r])) {
            r--;
            continue;
        }
        //compare
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
}

console.log(isPalindrome1("abc@dcba"));