const app = require("./app");
const client = require("./repositories/clientDatabase")
const yaml = require('yamljs')
const swaggerUi = require('swagger-ui-express')

const port = process.env.PORT;
const swaggerDocs = yaml.load('api-docs.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
const Connection = async () => {
    try {
        await client.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
}

app.listen(port, () => {
    console.log(`Forun app listening on port ${port}`)
    Connection();
});
