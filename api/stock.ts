import { ObjectId } from "https://deno.land/x/mongo@v0.31.0/mod.ts";
import { Context } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { stockDB } from "../database.ts";

interface Stock {
  _id: ObjectId;
  name: string;
  price: number;
  code: string;
  industry: string;
}

export const getStocks = async ({ response }: Context) => {
  const stockCollection = stockDB.collection<Stock>("stock");
  const stocks = await stockCollection.find();
  response.status = 200;
  response.body = stocks;
};
