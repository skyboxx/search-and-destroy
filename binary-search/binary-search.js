'use strict';

// Complete this algo
const binarySearch = (array, target, startIndex=0, endIndex=array.length) => {
    if (array.length <= 0)
        return false;

    // find the actual midpoint index
    const midpointIndex = Math.floor((startIndex + endIndex) / 2);

    // cache the actual value at the midpoint
    const midPointValue = array[midpointIndex];

    // found the value
    if (midPointValue === target)
        return true;

    // left with one value and we know its not teh target
    if (endIndex - startIndex <= 1)
        return false;

    // if it's more we're going to use the left side
    if (midPointValue > target) {
        return binarySearch(array, target, startIndex, midpointIndex);
    }
    else {
        return binarySearch(array, target, midpointIndex, endIndex);
    }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
