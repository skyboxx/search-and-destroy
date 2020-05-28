'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  //if the tail.next doesn't point to null then it has a loop
  let visited =[]
  //if(linkedlist.tail.next !== null) return true

  let currentNode = linkedlist.head

  while(currentNode){
    if(visited.includes(currentNode)) return true
    else{
      visited.push(currentNode)
    }
    currentNode = currentNode.next
  }



  return false


};

//[p|data|n]<-->


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
