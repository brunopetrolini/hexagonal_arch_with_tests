import { CalculateInvoice } from "./calculate-invoice";
import { HttpServer } from "./http-server";

export class InvoiceController {
  constructor(private readonly httpServer: HttpServer, private readonly calculateInvoice: CalculateInvoice) {
    this.httpServer.register("get", "/cards/:cardNumber/invoices", async (params: any, body: any) => {
      const total = await this.calculateInvoice.execute(params.cardNumber);
      return total;
    });
  }
}
