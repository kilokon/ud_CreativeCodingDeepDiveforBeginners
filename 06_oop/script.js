const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;


// globals
ctx.lineWidth = 10;
ctx.strokeStyle = 'magenta';


class Line{
    constructor(canvas) {
        this.canvas = canvas
        this.startX = Math.random()*this.canvas.width; // random value between 0 and canvas width.
        this.startY = Math.random()*this.canvas.height; // random value between 0 and canvas height.
        this.endX = Math.random()*this.canvas.width; // random value between 0 and canvas width.
        this.endY = Math.random()*this.canvas.height; // random value between 0 and canvas height.
    }
    draw_line(context) {
        context.beginPath();
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        context.stroke();
    }
}

const line1 = new Line(canvas);
line1.draw_line(ctx);