import express from "express";
import { CalculateInvoice } from "./calculate-invoice";

const app = express();
app.get("/cards/:cardNumber/invoices", async (request, response) => {
  const calculateInvoice = new CalculateInvoice();
  const total = await calculateInvoice.execute(request.params.cardNumber);
  response.json({ total });
});
app.listen(3000);
