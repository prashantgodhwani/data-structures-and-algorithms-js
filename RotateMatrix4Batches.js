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


function RotateMatrix4Batches(arr){
    var tmp;
    for(let i = 0; i < arr.length / 2; i++){
        for(let j = i; j < arr.length - 1 - i; j++){
            tmp = arr[i][j];
            arr[i][j] = arr[arr.length - 1 - j][i];
            arr[arr.length - 1 - j][i] = arr[arr.length -i - 1][arr.length - 1 - j];
            arr[arr.length - i - 1][arr.length - 1 - j] = arr[j][arr.length - i - 1];
            arr[j][arr.length- i - 1] = tmp;
            console.log(JSON.stringify(arr));
        }
    }
    return arr;
}