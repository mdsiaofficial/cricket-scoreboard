import { createServer } from 'http';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import matchRoutes from './routes/matches';
import authRoutes from './routes/auth';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});


const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO || 'mongodb://localhost:27017/cricket-scoreboard';


// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(csurf({ cookie: true }));


// Connect to MongoDB
mongoose.connect(MONGO)
.then(()=>{
  console.log('Connected to MongoDB');
})
.catch((err)=>{
  console.log(err);
})
// Routes
app.use('/api/matches', matchRoutes);
app.use('/api/auth', authRoutes);

// Socket.io
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('updateScore', (data) => {
    io.emit('scoreUpdated', data);
  });

  socket.on('updateMatchStatus', (data) => {
    io.emit('matchStatusUpdated', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});