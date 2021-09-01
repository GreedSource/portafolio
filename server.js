const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const BASE_URL = process.env.PORT || "http://localhost";

// the __dirname is the current directory from where the script is running
app.use(express.static(path.resolve(__dirname, "dist")));

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${BASE_URL}:${PORT}`);
});
