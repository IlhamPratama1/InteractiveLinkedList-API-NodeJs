const express = require('express');
const cors = require('cors');

const app = express();

require('dotenv').config();

var corsOptions = {
    origin: "http://localhost:3000"
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Connect
const db = require("./app/models/index");
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send({ message: "Welcome to Exam App server"});
});

// Routes
require("./app/routes/auth.routes.js")(app);

// Start
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});