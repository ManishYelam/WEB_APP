const express = require('express');
const app = express();
const routes = require('./routes/index');
const cors = require('cors')
require('./models/index');

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api', routes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


