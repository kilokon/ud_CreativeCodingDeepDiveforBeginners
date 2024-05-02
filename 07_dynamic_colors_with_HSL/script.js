const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;


class Line{
    constructor(canvas) {
        this.canvas = canvas;
        this.startX = Math.random() * this.canvas.width;
        this.startY = Math.random() * this.canvas.height;
        this.endX = Math.random() * this.canvas.width;
        this.endY = Math.random() * this.canvas.height;
        this.hue = Math.floor(Math.random()*360);
    }

    draw(context) {
        // context.strokeStyle = 'red'; Instead of giving proper color names using HSL 
        // color declaration. the hue part in HSL is 0 to 360 representing color
        // the second is saturation nad finally the darkness or lightness.
        context.strokeStyle = 'hsl(' + this.hue + ', 100%, 50%)';
        context.beginPath();
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        context.stroke();
    }
}

const line1 = new Line(canvas);
line1.draw(ctx);