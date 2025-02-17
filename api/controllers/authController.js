const generateToken = require("../utils/generateToken");

let users = []; // In-memory user store (no DB)

const register = (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = { username, password };
  users.push(newUser);

  const token = generateToken(username); // Generate JWT token
  res.json({ message: "User registered successfully", token });
};

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(username);
  res.json({ message: "Login successful", token });
};

module.exports = { register, login };
