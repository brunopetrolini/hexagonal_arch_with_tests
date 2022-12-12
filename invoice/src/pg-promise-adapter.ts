import pgPromise from "pg-promise";
import pg from "pg-promise/typescript/pg-subset";
import { Connection } from "./connection";

export class PgPromiseAdapter implements Connection {
  private readonly connection: pgPromise.IDatabase<{}, pg.IClient>;

  constructor() {
    this.connection = pgPromise()("postgres://postgres:postgrespw@localhost:55000");
  }

  async query(statement: string, params: any): Promise<any> {
    const transactions = await this.connection.query(statement, params);
  }

  async close(): Promise<any> {
    return this.connection.$pool.end();
  }
}
