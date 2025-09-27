import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName)

const app = express();
const port = 3000

app.use(express.static(__dirName));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirName, "index.html"));
})

app.listen(3000, () => {
    console.log(`server running on port ${port}`)
})