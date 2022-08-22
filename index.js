import express from 'express';
import { app } from "./server/app.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});
app.listen(PORT, (error) => {
    if (error) console.error("Error: ", error);
    console.log("SERVER IS UP AND RUNNING ON PORT ", PORT);
  });

