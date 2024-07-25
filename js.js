//câu 1
 
let array = [1,2,3,4,5,6,"hh","9",80,100];

// xoá những phần tử không phải dạng number
let arr_filter = array.filter(item => item === 'number');

console.log('arr_filter đã xoá các phần tử không phải dạng number' );

// tạo ra một array mới tên là mSquared thỏa mãn: mSquared[i] = pow(m[i],2)

let mSquared = m.map(item => item ** 2);
console.log(mSquared); // Output: [1, 4, 9, 16, 25, 36, 6400, 10000]




//câu 2
const str = " High knowledge, high return";

// Chuyển đổi string thành array
const arr = str.split(" ");

// Xóa bỏ các phần tử có giá trị là " "
const filteredArr = arr.filter(item => item !== "");

