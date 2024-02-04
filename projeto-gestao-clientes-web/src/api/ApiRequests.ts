import axios from "axios"
import { API_URL } from "../variables"
import { Cliente } from "../models/cliente"

export const getClientes = async (filterType?: string, filterValue?: string) => {
    const params: { [key: string]: string } = {};

    if (filterType && filterValue) {
        params[filterType] = filterValue;
    }
    const response = await axios.get(`${API_URL}/clientes`, {params});
    return response.data;
}

export const postClientes = async (cliente: Cliente) => {
    const response = await axios.post(`${API_URL}/clientes`, {...cliente});
    return response.data;
}

export const getRotas = async () => {
    const response = await axios.get(`${API_URL}/rota`);
    return response.data;
}