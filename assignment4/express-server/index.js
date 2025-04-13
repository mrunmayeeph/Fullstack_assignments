const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON

app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

const users = [
  { id: 1, name: "John", email: "john@example.com" }
];

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Add a new user
app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user by ID
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    const deleted = users.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
