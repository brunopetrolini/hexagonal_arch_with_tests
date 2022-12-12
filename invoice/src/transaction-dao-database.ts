import pgPromise from "pg-promise";
import { Connection } from "./connection";
import { TransactionDAO } from "./transaction-dao";

export class TransactionDAODatabase implements TransactionDAO {
  constructor(private readonly connection: Connection) {}

  async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
    const transactions = await this.connection.query(
      "select * from card_transaction where card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3",
      [cardNumber, month, year]
    );
    return transactions;
  }
}
