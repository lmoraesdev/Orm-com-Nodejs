import bodyParser from "body-parser";
import express from "express";
//import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/teste", (req, res) =>
	res.status(200).send({ mensagem: "boas-vindas a api" })
);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

export default app;
