const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.use(cors({
  origin: 'https://ai-code-reviewer-frontend-uefi.onrender.com',
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = { app, connectDB };
