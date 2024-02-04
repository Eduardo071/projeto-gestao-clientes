import express from 'express'
import clienteController from './controllers/cliente'
import rotaController from './controllers/rota'
import bodyParser from 'body-parser';
import cors from 'cors';


const port = 8081;
const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use('/clientes', clienteController);

app.use('/rota', rotaController);

app.listen(port, () => console.log(`Servidor em execução na porta ${port}`));