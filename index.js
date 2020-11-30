const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const sizeItem = 20;
const widthMatrix = 10;
const heightMatrix = 20;
canvas.width = widthMatrix*sizeItem;
canvas.height = heightMatrix*sizeItem;
const matrix = [];

(function initMatrix() {
  for (let i = 0; i < widthMatrix; i++) {
    const rowMatrix = [];
    for (let j = 0; j < heightMatrix; j++){
      let rand = Math.random() * 10;
      if (rand > 5) {
        rowMatrix.push(1)
      } else {
        rowMatrix.push(0);
      }
    }
    matrix.push(rowMatrix);
  }
})()
console.table(matrix)

function drawMatrix() {
 for (var i = 0; i <= widthMatrix; i++) {
    ctx.beginPath();
    ctx.moveTo(i*sizeItem, 0);
    ctx.lineTo(i*sizeItem, canvas.height);
    ctx.stroke();
  }
  
  for (var j = 0; j <= heightMatrix; j++){
    ctx.beginPath();
    ctx.moveTo(0, j*sizeItem);
    ctx.lineTo(canvas.width, j*sizeItem);
    ctx.stroke();
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        ctx.fillStyle = "red";
        ctx.fillRect(i*sizeItem, j*sizeItem, sizeItem, sizeItem);
      }
      ctx.strokeRect(i*sizeItem, j*sizeItem, sizeItem, sizeItem);
      
    }
  }
}

drawMatrix();