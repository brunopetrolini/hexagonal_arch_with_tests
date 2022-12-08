import { CurrencyGateway } from "./currency-gateway";
import { TransactionDAO } from "./transaction-dao";

export class CalculateInvoice {
  constructor(private readonly transactionDAO: TransactionDAO, private readonly currencyGateway: CurrencyGateway) {}

  async execute(cardNumber: string): Promise<number> {
    const currencies = await this.currencyGateway.getCurrencies();

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const transactions = await this.transactionDAO.getTransactions(cardNumber, month, year);

    let total = 0;
    for (const transaction of transactions) {
      if (transaction.currency === "BRL") {
        total += parseFloat(transaction.amount);
      }
      if (transaction.currency === "USD") {
        total += parseFloat(transaction.amount) * currencies.usd;
      }
    }

    return total;
  }
}
