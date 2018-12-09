// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// You need to do this in place.

// Note that if you end up using an additional array, you will only receive partial score.

// Example:

// If the array is

// [
//     [1, 2],
//     [3, 4]
// ]
// Then the rotated array becomes:

// [
//     [3, 1],
//     [4, 2]
// ]

function RotateMatrix2(arr){
    var k = -1;
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            [arr[i][j],arr[j][i]] = [arr[j][i],arr[i][j]];
        }
    }
    var left = 0, right = arr.length - 1, i = 0;
    while(left < right){
        while(i < arr.length){
            [arr[i][left], arr[i][right]] = [arr[i][right], arr[i][left]];
            i++;
        }
        left++, right--;
        i = 0;
    }
    return arr;
}