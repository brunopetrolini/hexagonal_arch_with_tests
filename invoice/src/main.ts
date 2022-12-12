import express from "express";
import { AxiosAdapter } from "./axios-adapter";
import { CalculateInvoice } from "./calculate-invoice";
import { CurrencyGatewayHttp } from "./currency-gateway-http";
import { TransactionDAODatabase } from "./transaction-dao-database";

const app = express();
app.get("/cards/:cardNumber/invoices", async (request, response) => {
  const transactionDAO = new TransactionDAODatabase();
  const httpClient = new AxiosAdapter();
  const baseUrl = "http://localhost:3001";
  const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl);
  const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
  const total = await calculateInvoice.execute(request.params.cardNumber);
  response.json({ total });
});
app.listen(3000);
