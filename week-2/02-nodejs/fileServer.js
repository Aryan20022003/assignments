/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.get("/files", async (req, resp) => {
  try {
    const filesName = await fs.promises.readdir(path.join(__dirname, "/files"));
    return resp.status(200).json(filesName);
  } catch {
    return resp.status(500).send("internal server error");
  }
});

app.get("/file/:filename", async (req, resp) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, `/files/${filename}`);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return resp.status(404).send("File not found");
    }
    return resp.status(200).send(data);
  });
});

app.all("*", (req, resp) => {
  return resp.status(404).send("Route not found");
});
module.exports = app;
