import axios from "axios";
import express from "express";

const app = express();
app.get("/currencies", async (request, response) => {
  const result = await axios.get("https://economia.awesomeapi.com.br/last/USD-BRL");
  const output = result.data;

  response.json({ usd: output.USDBRL.bid });
});
app.listen(3001);
