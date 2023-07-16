const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./connectDB");
const { router } = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("*", (req, res) => {
  res.status(404).send("<h1>Site not found</h1>");
});

app.use("/api/users", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
