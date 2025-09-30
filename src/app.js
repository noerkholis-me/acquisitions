import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from container!",
    service: "hello-node",
    pod: process.env.POD_NAME || "unknown",
    time: new Date().toISOString(),
  });
});

export default app;
