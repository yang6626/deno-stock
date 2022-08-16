import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import stockRouter from "./stock.ts";
// import { db } from "./database.ts";

const router = new Router({ prefix: "/api" });

router.use(stockRouter.routes());

export default router;
