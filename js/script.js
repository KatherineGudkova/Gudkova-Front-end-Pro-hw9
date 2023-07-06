const stringArray = prompt(`Enter array elements separated by commas (,):`);

const array = stringArray.split(",");

const sortArray = array.slice();
sortArray.sort((a, b) => a - b);

const newArray = sortArray.slice();
newArray.splice(1, 3);

alert(`
Your array: ${array}

Ascending sorted array: ${sortArray}

Array without elements 2 - 4 (inclusive): ${newArray}`);