import { IParametrosBuscaUsuario, cliente } from "../models/cliente";
import { clienteRepository } from "../repositories/cliente";

export const findClientes = async (params: IParametrosBuscaUsuario) => {
    const queryParams = params || null;
    const repository = new clienteRepository();
    const result = await repository.findClientes(queryParams);
    return result;
};
export const saveClientes = async (body: cliente) => {    

    if (!body.nome || !body.email || !body.telefone || !body.coordenada_x || !body.coordenada_y ||
        body.nome.trim() === '' || body.email.trim() === '' || body.telefone.trim() === '' ||
        isNaN(body.coordenada_x) || isNaN(body.coordenada_y)) {            
        throw new Error('Os atributos nome, email, telefone, coordenada_x e coordenada_y são obrigatórios e não podem estar vazios ou nulos.');
    }

    const repository = new clienteRepository();
    const createdCliente = await repository.createCliente(body);
    return createdCliente;
};