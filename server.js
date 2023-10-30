const express = require('express');
const mongoose = require('mongoose');
const booksRoute = require("./src/routes/books.routes");

const app = express();

// Connection to database
mongoose.connect('mongodb+srv://dbUser:Root111000@learningcluster.tcjx5.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB!");
});

// Middleware to parse JSON requests
app.use(express.json());

// Books route for all endpoints
app.use("/books", booksRoute);

// Server listening
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
