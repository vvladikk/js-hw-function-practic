const students = [
    { name: 'John', grades: [3, 4, 5, 4] },
    { name: 'Jane', grades: [4, 5, 4, 4] },
    { name: 'Mark', grades: [5, 4, 5, 5] }
  ];
  
  function calculateAverage(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
  }
  
  students.forEach(student => {
    const average = calculateAverage(student.grades);
    console.log(`${student.name}: ${average}`);
  });
      