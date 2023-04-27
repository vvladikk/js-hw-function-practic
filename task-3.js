function filterByAge(arr) {
  return arr.filter(obj => obj.age > 18).map(obj => obj.name);
}

const people = [
  { name: 'John', age: 25 },
  { name: 'Sarah', age: 18 },
  { name: 'Bob', age: 35 },
  { name: 'Alice', age: 21 },
];

const filteredNames = filterByAge(people);

console.log(filteredNames); 
