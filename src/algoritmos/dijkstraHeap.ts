import City from "src/entity/city";
import Edge from "src/entity/edge";
import Graph from "src/entity/graph";
import { HeapMin } from "./heap";
import Node1 from "src/entity/node";

// Função que implementa o algoritmo de Dijkstra
function dijkstra(graph: Graph, start: City, end: City): { [key: string]: number } {
  const distances: { [key: string]: number } = {};
  const visited: { [key: string]: boolean } = {};
  const heap = new HeapMin<{ node: Node1; distance: number }>();

  // Inicializa as distâncias de todos os nós como infinito, exceto o nó de partida
  graph.nodes.forEach((node) => {
    distances[node.city.name] = Infinity;
    visited[node.city.name] = false;
  });
  distances[start.name] = 0;


  // Insere o nó de partida no heap
    if(!graph.getNodebyCity(start) == undefined){
        const nodeABC = graph.getNodebyCity(start)!;
        heap.inserir(0, { node: nodeABC, distance: 0 });         // ADD EVENT LISTENER TO THE BUTTON

    }

  while (!heap.estaVazio()) {
    // Extrai o nó com menor distância do heap
    const { elemento, distancia } = heap.extrair()!;
    const {node, distance } = elemento;

    // Verifica se o nó já foi visitado
    if (visited[node.city.name]) {
      continue;
    }

    // Marca o nó como visitado
    visited[node.city.name] = true;

    // Atualiza as distâncias dos nós vizinhos
    node.list.forEach((neighbor) => {
      const edge = graph.getEdge(node, neighbor)!;
      const newDistance = distance + edge.weight;
      if (newDistance < distances[neighbor.city.name]) {
        distances[neighbor.city.name] = newDistance;
        heap.inserir(newDistance, { node: neighbor, distance: newDistance });
      }
    });
  }

  return distances;
}
