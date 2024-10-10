const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "webapp"))); // Upewnij się, że używasz folderu webapp

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
