import { cliente } from "../models/cliente";

interface ClienteComDistancia extends cliente {
    distanciaTotal?: number;
}

function calcularRota(clientes: cliente[]): cliente[] {
    const n = clientes.length;

    const empresa: cliente = { id: 0, nome: "Empresa ( Início )", email: "", telefone: "", coordenada_x: 0, coordenada_y: 0 };
    clientes.unshift(empresa);
    clientes.push(empresa);

    const distances: number[][] = precomputeDistances(clientes);

    const startNode = 0;
    let shortestPath: number[] = nearestNeighborHeuristic(startNode, n + 1, distances);
    let shortestDistance = calcularDistanciaTotal(shortestPath, distances);

    const clientesNaRota: cliente[] = shortestPath.map(index => clientes[index]);

    return clientesNaRota;

    function precomputeDistances(clientes: cliente[]): number[][] {
        const distances: number[][] = [];
        for (let i = 0; i < n + 2; i++) {
            distances[i] = new Array(n + 2).fill(0);
            for (let j = 0; j < n + 2; j++) {
                distances[i][j] = distanciaEuclidiana(clientes[i], clientes[j]);
            }
        }
        return distances;
    }

    function distanciaEuclidiana(cliente1: cliente, cliente2: cliente): number {
        return Math.sqrt(
            Math.pow(cliente1.coordenada_x - cliente2.coordenada_x, 2) +
            Math.pow(cliente1.coordenada_y - cliente2.coordenada_y, 2)
        );
    }

    function nearestNeighborHeuristic(startNode: number, n: number, distances: number[][]): number[] {
        const visited: Set<number> = new Set();
        const path: number[] = [startNode];
        visited.add(startNode);

        while (visited.size < n) {
            let nearestIndex = -1;
            let nearestDistance = Infinity;

            for (let i = 0; i < n; i++) {
                if (!visited.has(i)) {
                    const distance = distances[path[path.length - 1]][i];
                    if (distance < nearestDistance) {
                        nearestIndex = i;
                        nearestDistance = distance;
                    }
                }
            }

            path.push(nearestIndex);
            visited.add(nearestIndex);
        }

        return path;
    }

    function calcularDistanciaTotal(path: number[], distances: number[][]): number {
        let totalDistance = 0;
        for (let i = 0; i < path.length - 1; i++) {
            totalDistance += distances[path[i]][path[i + 1]];
        }
        return totalDistance;
    }
}

export { calcularRota };