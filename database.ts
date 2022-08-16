import { MongoClient } from "https://deno.land/x/atlas_sdk@v1.0.2/mod.ts";

const client = new MongoClient({
  endpoint: "https://data.mongodb-api.com/app/data-wwnxp/endpoint/data/v1",
  dataSource: "stock",
  auth: {
    apiKey: Deno.env.get("MONGO_API_KEY") ?? "",
  },
});
export const stockDB = client.database("stock");
