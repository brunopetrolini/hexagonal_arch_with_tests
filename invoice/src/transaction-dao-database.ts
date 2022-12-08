import pgPromise from "pg-promise";
import { TransactionDAO } from "./transaction-dao";

export class TransactionDAODatabase implements TransactionDAO {
  async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
    const connection = pgPromise()("postgres://postgres:postgrespw@localhost:55000");
    const transactions = await connection.query(
      "select * from card_transaction where card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3",
      [cardNumber, month, year]
    );
    return transactions;
  }
}
