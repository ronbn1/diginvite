const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/invited", require("./routes/api/invited"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
