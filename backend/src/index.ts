import express, { json } from "express";
import db from "./database/config";
import { router } from "./routes";

const app = express();


app.use(json());
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log(`App running on 3000!`);
});