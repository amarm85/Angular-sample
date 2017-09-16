
interface Point {

    drawLine(x?: number, y?: number): void

}



export class XPoint implements Point {


    constructor(private x?: number, private y?: number) {
        //this.x = x; this.y = y;
    };

    drawLine = (x?: number, y?: number): void => {
        console.log('drawing the line with  x = ' + this.x + ' y =' + this.y);
    }


}
