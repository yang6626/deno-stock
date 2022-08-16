import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import router from "./routers/routes.ts";

const app = new Application();
const PORT = 4002;

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", (_) =>
  console.log(`app runing at port ${PORT}`)
);
await app.listen({ port: PORT });
