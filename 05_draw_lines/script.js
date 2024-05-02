const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 900;

ctx.beginPath();
// Lne drawing starts with beginPath() method it also
// closes all existing paths if exists any. We ca draw multiple paths in different color
// without beginPath() all the lines will join in one massive shape.

ctx.moveTo(300, 300);
// The moveTo() method creates a new sub-path. It is a way to
//start in x and y coordinates of our line.

ctx.lineTo(350, 400);
// The method lineTo() will create a straight line from the sub-path 
// from the point defined in moveTo(). It can mean it represents the
// x and y coordinates of where the line will end.

ctx.stroke();
// the moveTo() and lineTo() methods create the points but doesn't render
// the lines stroke() method renders the lines.