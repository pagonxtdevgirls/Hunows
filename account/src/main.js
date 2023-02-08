import cors from "cors";
import client from "./repositories/databaseClient.js";
import { app } from "./app.js";

const port = process.env.MYSQL_URL_DATABASE;

app.use(cors());

app.listen(port, function () {
  console.log("accounts is running");

  client
    .authenticate()
    .then(() => {
      console.log("Db connection OK!");
    })
    .catch((error) => {
      console.error(error);
    });
});
