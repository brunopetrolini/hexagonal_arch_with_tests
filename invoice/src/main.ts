import { AxiosAdapter } from "./axios-adapter";
import { CalculateInvoice } from "./calculate-invoice";
import { CurrencyGatewayHttp } from "./currency-gateway-http";
import { ExpressAdapter } from "./express-adapter";
import { InvoiceController } from "./invoice-controller";
import { PgPromiseAdapter } from "./pg-promise-adapter";
import { TransactionDAODatabase } from "./transaction-dao-database";

const connection = new PgPromiseAdapter();
const transactionDAO = new TransactionDAODatabase(connection);
const httpClient = new AxiosAdapter();
const baseUrl = "http://localhost:3001";
const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl);
const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
const httpServer = new ExpressAdapter();
new InvoiceController(httpServer, calculateInvoice);
httpServer.listen(3000);
