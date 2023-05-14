import { Numeric } from "d3";

export default class Heap{

    heap: number[];
    tail: number;

    constructor(){
        this.heap = [];
        this.tail = 0;
    }


    add(num: number): void{
        if(this.tail == 0)
            this.heap.push(num);

        
        this.tail++;
        
    }
}