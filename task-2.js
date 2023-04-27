function filterObjectsByPropertyValue(arr, key, value) {
    return arr.filter(obj => obj[key] === value);
  }
  const users = [
    { name: 'John', age: 25 },
    { name: 'Sarah', age: 30 },
    { name: 'Bob', age: 35 },
    { name: 'Alice', age: 25 },
  ];
  const filteredUsers = filterObjectsByPropertyValue(users, 'age', 25);
console.log(filteredUsers); 
