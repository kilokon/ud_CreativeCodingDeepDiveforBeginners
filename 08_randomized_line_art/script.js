const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;

class Line {
    constructor(canvas) {
        this.canvas = canvas;
        this.startX = Math.random()*this.canvas.width;
        this.startY = Math.random()*this.canvas.height;
        this.endX = Math.random()*this.canvas.width;
        this.endY = Math.random()*this.canvas.height;
        this.hue = Math.floor(Math.random()*360);
    }
    draw(context) {
        context.strokeStyle = 'hsl(' + this.hue + ' ,100%, 50%)';
        context.beginPath();
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        context.stroke();
    }
}

const lineArray = [];
const numberOfLines = 150;
for(let i=0; i<numberOfLines; i++) {
    lineArray.push(new Line(canvas));
}

lineArray.forEach(element => {
    element.draw(ctx);
});