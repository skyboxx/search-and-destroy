'use strict';

// Complete this algo
const minJumps = arr => {
 let jumps = 1
 let startidx = 0

 while(true){
   let value = arr[startidx]
   let maxJump = value + startidx
   if(maxJump >= arr.length-1) break;

   let maxNextJumpIdx = startidx + 1;

   for(let i = startidx + 2; i <= maxJump; i++){
     if(arr[i] > arr[maxNextJumpIdx]) {
       maxNextJumpIdx = i
     }
   }

   startidx = maxNextJumpIdx
   jumps++
  //  console.log('JUMPS=====', jumps)
 }

 return jumps

};

module.exports = minJumps
