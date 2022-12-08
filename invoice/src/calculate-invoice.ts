import axios from "axios";
import { CurrencyGateway } from "./currency-gateway";
import { TransactionDAO } from "./transaction-dao";

export class CalculateInvoice {
  constructor(private readonly transactionDAO: TransactionDAO, private readonly currencyGateway: CurrencyGateway) {}

  async execute(cardNumber: string): Promise<number> {
    // const connection = pgPromise()("postgres://postgres:postgrespw@localhost:55000");

    const currencies = await this.currencyGateway.getCurrencies();
    // const currenciesResponse = await axios.get("http://localhost:3001/currencies");
    // const currencies = currenciesResponse.data;

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    // const transactions = await connection.query(
    //   "select * from card_transaction where card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3",
    //   [cardNumber, month, year]
    // );

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
