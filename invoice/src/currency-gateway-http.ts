import axios from "axios";
import { CurrencyGateway } from "./currency-gateway";

export class CurrencyGatewayHttp implements CurrencyGateway {
  async getCurrencies(): Promise<any> {
    const currenciesResponse = await axios.get("http://localhost:3001/currencies");
    const currencies = currenciesResponse.data;
    return currencies;
  }
}
