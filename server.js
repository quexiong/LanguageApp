'use strict';

const express = require("express");
const connect_DB = require("./config/db");
const app = express();

// connect db
connect_DB();

// Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("API is running!"));

// Define routes

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
