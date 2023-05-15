import Edge1 from "./edge";
import Node1 from "./node";


export default class Graph {
    nodes: Node1[];
    edges: Edge1[];

    constructor(){
        this.nodes = [];
        this.edges = [];
    }

    addNode(newNode: Node1):void {
        this.nodes.push(newNode);
    }

    addEdge(newEdge: Edge1): void{

        var nodeA = this.nodes.findIndex(x => x.id == newEdge.begin);
        var nodeB = this.nodes.findIndex(x => x.id == newEdge.end);

        console.log(nodeA);
        console.log(nodeB);

        this.nodes[nodeA].list.push(this.nodes[nodeB])
        
        this.edges.push(newEdge);
    }


}