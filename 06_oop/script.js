const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;


// globals
ctx.lineWidth = 10;
ctx.strokeStyle = 'magenta';


class Line{
    constructor() {
        this.startX = Math.random()*canvas.width; // random value between 0 and canvas width.
        this.startY = Math.random()*canvas.height; // random value between 0 and canvas height.
        this.endX = Math.random()*canvas.width; // random value between 0 and canvas width.
        this.endY = Math.random()*canvas.height; // random value between 0 and canvas height.
    }
    draw_line() {
        
    }
}