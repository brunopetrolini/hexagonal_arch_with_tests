import express from "express";

const app = express();
app.get("/currencies", (request, response) => {
  response.json({ usd: 5 });
});
app.listen(3001);
