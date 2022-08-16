import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { getStocks } from "../api/stock.ts";
const stockRouter = new Router({ prefix: "/stock" });

stockRouter.get("/", getStocks);

export default stockRouter;
