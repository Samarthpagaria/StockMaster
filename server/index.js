import "dotenv/config";
import express from "express";
import db from "./db/db.js";
import { app } from "./app.js";

db.connect()
  .then(() => {
    app.on("error", (error) => {
      console.log("Errrr: " + error);
      throw error;
    });
    const server = app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT || 8000}`);
    });
    server.on("connection", (socket) => {
      console.log("A new client has connected!");
    });

    server.on("close", () => {
      console.log("The server is shutting down.");
    });
  })
  .catch((error) => {
    console.log("DB connection failed: ", error);
  });
