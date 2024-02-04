import { clienteRepository } from "../repositories/cliente";
import { calcularRota } from "../utils/calcularRota";

export const findRota = async () => {
    try {
        const repository = new clienteRepository();
        const clientes = await repository.getCoordenadasClientes();
        const shortestRoute = calcularRota(clientes);
        return shortestRoute;
    } catch (error: any) {
        throw new Error(`Error finding the shortest route: ${error.message}`);
    }
};