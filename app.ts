import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import router from "./routers/routes.ts";
import { cron } from "https://deno.land/x/deno_cron/cron.ts";

const app = new Application();
const PORT = 4002;

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", (_) =>
  console.log(`app runing at port ${PORT}`)
);

/** 每日15:10 工作日 */
cron("0 10 15 * * 1-5", () => {
  console.log("timer");
});
await app.listen({ port: PORT });
