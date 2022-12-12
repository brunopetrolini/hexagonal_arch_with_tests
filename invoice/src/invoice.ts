export class Invoice {
  constructor(private readonly transactions: any, private readonly currencies: any) {}

  getTotal(): number {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.currency === "BRL") {
        total += parseFloat(transaction.amount);
      }
      if (transaction.currency === "USD") {
        total += parseFloat(transaction.amount) * this.currencies.usd;
      }
    }
    return total;
  }
}
