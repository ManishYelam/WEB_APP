const express = require('express');
const app = express();
const http = require('http'); 
const routes = require('./routes/index');
const cors = require('cors');
require('./models/index');

// Create HTTP server and bind Socket.IO to it
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST']
  }
});

app.use(express.json());
app.use(cors());

app.use('/api', routes);

// Socket.IO event handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Emit a welcome message to the connected client
  socket.emit('welcome', 'Welcome to the Socket.IO server!');

  // Listen for messages from the client
  socket.on('chatMessage', (msg) => {
    console.log(`Message received: ${msg}`);
    
    // Broadcast the message to all clients
    io.emit('chatMessage', msg);
  });

  // Handle client disconnect
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
