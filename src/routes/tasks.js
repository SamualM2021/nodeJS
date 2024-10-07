const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, task: 'Do laundry' },
  { id: 2, task: 'Buy groceries' }
];

// Get all tasks
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Get a specific task by ID
router.get('/task/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) res.json(task);
  else res.status(404).send('Task not found');
});

// Create a new task
router.post('/task', (req, res) => {
  const newTask = { id: tasks.length + 1, task: req.body.task };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

//Update a task
router.patch('/task/:id', (req, res) => {
  const newTask = req.body.task
  let task = tasks.find(t => t.id == req.params.id);
  task.task = newTask
  if (task) res.json(task);
  else res.status(404).send('Task not found');
})

// router.put('/task', (req, res) => {

// })

router.delete('/task/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id == req.params.id);
  if (taskIndex) {
    tasks.splice(taskIndex, 1)
    res.status(200).send(tasks)
  } else {
    res.status(404).send('Task not found');
  }
})

module.exports = router;
