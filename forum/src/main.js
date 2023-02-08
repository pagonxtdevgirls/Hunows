const app = require("./app");
const client = require("./repositories/clientDatabase");

const port = process.env.PORT;

const Connection = async () => {
  try {
    await client.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

app.listen(port, () => {
  console.log(`Forun app listening on port ${port}`);
  Connection();
});
