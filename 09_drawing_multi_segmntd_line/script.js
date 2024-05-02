const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;


class Line {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.history = [
            { x: this.x, y: this.y }
        ];
        this.hue = Math.floor(Math.random() * 360);
    }

    draw(context, segments) {
        context.strokeStyle = 'hsl( ' + this.hue + ' , 100%, 50%)';
        context.beginPath();
        
        // Accumulate some points
        for (let i = 0; i<segments; i++) {
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.history.push({ x: this.x, y: this.y })
        }

        // Move to first location
        context.moveTo(this.history[0].x, this.history[0].y);

        // connect them all
        for (let i = 1; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y);
        }
        context.stroke();
    }
}

const line1 = new Line(canvas);
line1.draw(ctx, 77);