import express from "express";
import pgPromise from "pg-promise";
import axios from "axios";

const app = express();
app.get("/cards/:cardNumber/invoices", async (request, response) => {
  const connection = pgPromise()("postgres://postgres:postgrespw@localhost:55000");

  const currenciesResponse = await axios.get("http://localhost:3001/currencies");
  const currencies = currenciesResponse.data;

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const transactions = await connection.query(
    "select * from card_transaction where card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3",
    [request.params.cardNumber, month, year]
  );

  let total = 0;
  for (const transaction of transactions) {
    if (transaction.currency === "BRL") {
      total += parseFloat(transaction.amount);
    }
    if (transaction.currency === "USD") {
      total += parseFloat(transaction.amount) * currencies.usd;
    }
  }

  response.json({ total });
});
app.listen(3000);
