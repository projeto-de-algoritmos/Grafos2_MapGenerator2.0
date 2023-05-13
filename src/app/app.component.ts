import { Component } from '@angular/core';
import Node1 from 'src/entity/node';
import Graph from 'src/entity/graph';
import City from 'src/entity/city';
import Edge from 'src/entity/edge';
import * as d3 from 'd3'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graph2';

  idNode: number = 0;
  idEdge: number = 0;

  name: string = "";
  description: string = "";
  listNode: Node1[] = [];
  listPesos: number[] = [1,2,3,4,5,6,7,8,9];

  nodeA: Node1 | null = null;
  nodeB: Node1 | null = null;
  pesoEdge: number = 0;
  
  //instancia o grafo
  Grafo = new Graph();
  
  addNode():void {
    
    var city = new City(this.name, this.description);
    var node = new Node1(this.idNode++, city);

    this.listNode.push(node);
    this.Grafo.addNode(node);
  }

  addEdge():void {

    if(this.nodeA == null || this.nodeB == null){
      alert("Selecione cidades");
      return;
    }
    
    var edge = new Edge(this.idEdge++,this.nodeA.id, this.nodeB.id, this.pesoEdge);
    this.Grafo.addEdge(edge);
  }
}
