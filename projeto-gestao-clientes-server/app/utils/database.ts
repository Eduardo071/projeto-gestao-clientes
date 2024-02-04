import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Projeto-gestao-cliente',
    password: 'suaSenha',
    port: 5432,
});

export default {
    query: (text: string, params?: any) => pool.query(text, params),
};