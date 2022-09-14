import express from "express";

const app = express();

app.get("/games", (_, res) => {
  return res.json([]);
});

app.post("/ads", (req, res) => {
  return res.status(201).json({ res: "res" });
});

app.get("/games/:id/ads", (_, res) => {
  return res.json([]);
});

app.get("/ads/:id/discord", (_, res) => {
  return res.json([]);
});

app.listen(3333);
