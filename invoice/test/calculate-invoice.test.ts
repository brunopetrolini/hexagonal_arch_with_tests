import { CalculateInvoice } from "../src/calculate-invoice";
import { CurrencyGateway } from "../src/currency-gateway";
import { TransactionDAO } from "../src/transaction-dao";

it("Deve calcular a fatura", async () => {
  const transactionDAO: TransactionDAO = {
    async getTransactions(cardNumber, month, year) {
      return [
        { amount: 100, currency: "BRL" },
        { amount: 1000, currency: "BRL" },
        { amount: 600, currency: "USD" },
      ];
    },
  };
  const currencyGateway: CurrencyGateway = {
    async getCurrencies() {
      return { usd: 2.74 };
    },
  };
  const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
  const output = await calculateInvoice.execute("1234");
  expect(output.total).toBe(2744);
});
