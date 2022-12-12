import { CurrencyGateway } from "./currency-gateway";
import { HttpClient } from "./http-client";

export class CurrencyGatewayHttp implements CurrencyGateway {
  constructor(private readonly httpClient: HttpClient, private readonly baseUrl: string) {}

  async getCurrencies(): Promise<any> {
    const currencies = await this.httpClient.get(`${this.baseUrl}/currencies`);
    return currencies;
  }
}
