import express, { Request, Response } from "express";
import { HttpServer } from "./http-server";

export class ExpressAdapter implements HttpServer {
  private readonly app: any;

  constructor() {
    this.app = express();
  }

  async register(method: string, url: string, callback: Function): Promise<void> {
    this.app[method](url, async (request: Request, response: Response) => {
      const output = await callback(request.params, request.body);
      response.json(output);
    });
  }

  async listen(port: number): Promise<void> {
    this.app.listen(port);
  }
}
