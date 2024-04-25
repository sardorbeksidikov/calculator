// script.js
function calculateArea() {
  const shape = document.getElementById("shape").value;
  let area;

  switch (shape) {
    case "square":
      const width = parseFloat(document.getElementById("width").value);
      area = width * width;
      break;
    case "rectangle":
      const rectWidth = parseFloat(document.getElementById("width").value);
      const rectHeight = parseFloat(document.getElementById("height").value);
      area = rectWidth * rectHeight;
      break;
    case "circle":
      const radius = parseFloat(document.getElementById("radius").value);
      area = Math.PI * radius ** 2;
      break;
    default:
      area = "Invalid shape";
  }

  document.getElementById("result").textContent = `Area: ${area}`;
}
