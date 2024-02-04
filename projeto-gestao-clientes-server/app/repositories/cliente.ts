import { IParametrosBuscaUsuario, cliente } from "../models/cliente";
import client from "../utils/database";

class clienteRepository {
    public async findClientes(queryParams: IParametrosBuscaUsuario) {
        let queryText = 'SELECT * FROM CLIENTES';

        let whereClause = '';

        if (queryParams) {
            if (queryParams.id) {
                whereClause += ` id = ${queryParams.id}`;
            }
            
            if (queryParams.nome) {
                const nomeLowerCase = queryParams.nome.toLowerCase();
    whereClause += whereClause ? ` AND LOWER(nome) LIKE '%${nomeLowerCase}%'` : ` LOWER(nome) LIKE '%${nomeLowerCase}%'`;
            }
            
            if (queryParams.telefone) {
                whereClause += whereClause ? ` AND telefone LIKE '%${queryParams.telefone}%'` : ` telefone LIKE '%${queryParams.telefone}%'`;
            }

            if (queryParams.email) {
                const emailLowerCase = queryParams.email.toLowerCase();
                whereClause += whereClause ? ` AND LOWER(email) LIKE '%${emailLowerCase}%'` : ` LOWER(email) LIKE '%${emailLowerCase}%'`;
            }

            if (whereClause) {
                queryText += ` WHERE ${whereClause}`;
            }
        }
        try {
            const result = await client.query(queryText);
            return result.rows
        } catch (error) {
            throw new Error(`Erro ao buscar clientes: ${error}`);
        }
    }

    public async createCliente(body: cliente){
        const { nome, email, telefone, coordenada_x, coordenada_y } = body;

        const queryText = `
            INSERT INTO CLIENTES (nome, email, telefone, coordenada_x, coordenada_y)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;

        const values = [nome, email, telefone, coordenada_x, coordenada_y];

        try {
            const result = await client.query(queryText, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao criar cliente: ${error}`);
        }
    }

    public async getCoordenadasClientes() {
        const queryText = 'SELECT * FROM CLIENTES';
        try {
            const result = await client.query(queryText);
            return result.rows;
            
        } catch (error) {
            throw new Error(`Erro ao obter clientes: ${error}`);
        }
    }

}

export {clienteRepository};