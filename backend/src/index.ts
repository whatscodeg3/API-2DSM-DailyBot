import express, { json } from "express";

import db from "./database/config";
import { router } from "./routes";
import cors from 'cors';

const app = express();


app.use(cors({
  methods: "GET,OPTIONS,PUT,POST,DELETE",
  origin: "*"
}))
app.use(json());
app.use(router);





app.listen(7071, async () => {
  await db.sync();
  console.log(`App running on 7071!`);
});

