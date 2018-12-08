// Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

// Try to solve it in linear time/space.

// Example :

// Input : [1, 10, 5]
// Output : 5 
// Return 0 if the array contains less than 2 elements.

// You may assume that all the elements in the array are non-negative integers and fit in the 32-bit signed integer range.
// You may also assume that the difference will not overflow.


function MaximumConsecutiveGap(arr){
    let minimum = Infinity, maximum = -Infinity, maxDiff = 0;
    if(arr.length < 2) return 0;
    for(let i = 0; i < arr.length; i++){
            minimum = Math.min(arr[i], minimum);
            maximum = Math.max(arr[i], maximum);
    }

    var maxBuckets = [], minBuckets = [];
     for(let i = 0; i < arr.length; i++){
            maxBuckets.push(-Infinity);
            minBuckets.push(Infinity);
    }

    var numberOfBuckets = arr.length - 1;
    var widthOfBucket = (maximum - minimum) / (arr.length - 1);
        

    for(i = 0; i < arr.length; i++){
        if(arr[i] === maximum || arr[i] === minimum) continue;
        var bucketIndex = Math.floor((arr[i] - minimum) / widthOfBucket);

        maxBuckets[bucketIndex] = (maxBuckets[bucketIndex] === -Infinity) ? arr[i] : Math.max(maxBuckets[bucketIndex], arr[i]);
        minBuckets[bucketIndex] = (minBuckets[bucketIndex] === Infinity) ? arr[i] : Math.min(minBuckets[bucketIndex], arr[i]);
    }

    var prev = minimum, maxGap = 0;
    for(i = 0; i < arr.length - 1; i++){
        if(minBuckets[i] === Infinity) continue;
        maxGap = Math.max(maxGap, minBuckets[i] - prev);
        prev = maxBuckets[i];
    }
    maxGap = Math.max(maxGap, maximum-prev);
    return maxGap;
}