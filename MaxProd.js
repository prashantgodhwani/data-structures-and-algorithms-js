// You are given an array A containing N integers. The special product of each ith integer in this array is defined as the product of the following:<ul>

// LeftSpecialValue: For an index i, it is defined as the index j such that A[j]>A[i] (i>j). If multiple A[j]’s are present in multiple positions, the LeftSpecialValue is the maximum value of j. 

// RightSpecialValue: For an index i, it is defined as the index j such that A[j]>A[i] (j>i). If multiple A[j]s are present in multiple positions, the RightSpecialValue is the minimum value of j.

// Write a program to find the maximum special product of any integer in the array.

// Input: You will receive array of integers as argument to function.

// Return: Maximum special product of any integer in the array modulo 1000000007.

// Note: If j does not exist, the LeftSpecialValue and RightSpecialValue are considered to be 0.
function MaxProd2(arr){
    let lstack = [], max = arr[0], maxProd = 0, rstack = [], sp = [], lsp, rsp, prod = 0;
    lstack.push(0); sp.push(0);
    for(let i = 1; i < arr.length; i++){
       while(arr[lstack[lstack.length - 1]] <= arr[i] && (lstack.length) > 0){
           lstack.pop();
       }
       lsp = lstack[lstack.length - 1];
       sp.push((lsp === undefined) ? 0 : lsp);
       lstack.push(i);
       //console.log(JSON.stringify(lstack), JSON.stringify(sp));
    }
    
    rstack.push(arr.length - 1);
    for(let i = arr.length - 2; i >= 0; i--){
       while(arr[rstack[rstack.length - 1]] <= arr[i] && (rstack.length) > 0){
           rstack.pop();
       }
       rsp = rstack[rstack.length - 1];
       rsp = (rsp !== undefined) ? rsp : 0;
       //console.log(sp[i], rsp);
       prod = (sp[i] * rsp).toString();
       maxProd = Math.max(parseInt(maxProd), parseInt(prod)).toString();
       rstack.push(i);
       //console.log(maxProd, JSON.stringify(rstack), sp[i], (rsp === undefined) ? 0 : rsp, prod);
    }
    

    return parseInt(maxProd);
}