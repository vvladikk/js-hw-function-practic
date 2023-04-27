const tasks = [
    { id: 1, title: 'Завдання 1', completed: true },
    { id: 2, title: 'Завдання 2', completed: false },
    { id: 3, title: 'Завдання 3', completed: true },
    { id: 4, title: 'Завдання 4', completed: false },
  ];

  function markCompleted(tasks, taskId) {
    return tasks.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
  }
  const updatedTasks = markCompleted(tasks, 2);
  console.log(updatedTasks);
 
    