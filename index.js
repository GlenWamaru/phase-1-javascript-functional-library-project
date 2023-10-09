// Function to determine if the collection is an array
function isArray(collection) {
    return Array.isArray(collection);
  }
  
  // Function to iterate over a collection
  function myEach(collection, callback) {
    if (isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  // Function to create a new array by applying a callback to each element
  function myMap(collection, callback) {
    const result = isArray(collection) ? [] : {};
    myEach(collection, (value, key, col) => {
      if (isArray(result)) {
        result.push(callback(value, key, col));
      } else {
        result[key] = callback(value, key, col);
      }
    });
    return result;
  }
  
  // Function to reduce a collection to a single value
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    return acc;
  }
  
  // Function to find the first element that passes a predicate test
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (value, key, col) => {
      if (predicate(value, key, col) && result === undefined) {
        result = value;
      }
    });
    return result;
  }
  
  // Function to filter elements in a collection based on a predicate
  function myFilter(collection, predicate) {
    const result = isArray(collection) ? [] : {};
    myEach(collection, (value, key, col) => {
      if (predicate(value, key, col)) {
        if (isArray(result)) {
          result.push(value);
        } else {
          result[key] = value;
        }
      }
    });
    return result;
  }
  
  // Function to get the size of a collection
  function mySize(collection) {
    return isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Example usage of the functions
  const arr = [1, 2, 3];
  const obj = { one: 1, two: 2, three: 3 };
  
  myEach(arr, (item) => console.log(item));
  myEach(obj, (value, key) => console.log(`${key}: ${value}`));
  
  const mappedArr = myMap(arr, (num) => num * 3);
  const mappedObj = myMap(obj, (num) => num * 3);
  
  console.log(mappedArr);
  console.log(mappedObj);
  
  const reducedArr = myReduce(arr, (acc, val) => acc + val, 10);
  const reducedObj = myReduce(obj, (acc, val) => acc + val);
  
  console.log(reducedArr);
  console.log(reducedObj);
  
  const foundArr = myFind(arr, (num) => num % 2 === 0);
  const foundObj = myFind(obj, (num) => num % 2 === 0);
  
  console.log(foundArr);
  console.log(foundObj);
  
  const filteredArr = myFilter(arr, (num) => num % 2 === 0);
  const filteredObj = myFilter(obj, (num) => num % 2 === 0);
  
  console.log(filteredArr);
  console.log(filteredObj);
  
  const sizeArr = mySize(arr);
  const sizeObj = mySize(obj);
  
  console.log(sizeArr);
  console.log(sizeObj);
  