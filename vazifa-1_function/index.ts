
interface Shape {
  type: string;
  width?: number;
  height?: number;
  radius?: number;
}


function calculateAreaa(shape: Shape): number {
  switch (shape.type) {
    case "square":
      if (shape.width) {
        return shape.width ** 2;
      } else {
        throw new Error("Width is required for a square.");
      }
    case "rectangle":
      if (shape.width && shape.height) {
        return shape.width * shape.height;
      } else {
        throw new Error("Width and height are required for a rectangle.");
      }
    case "circle":
      if (shape.radius) {
        return Math.PI * shape.radius ** 2;
      } else {
        throw new Error("Radius is required for a circle.");
      }
    default:
      throw new Error("Invalid shape type");
  }
}


const square: Shape = { type: "square", width: 5 };
const rectangle: Shape = { type: "rectangle", width: 4, height: 6 };
const circle: Shape = { type: "circle", radius: 3 };

console.log("Area of square:", calculateAreaa(square));
console.log("Area of rectangle:", calculateAreaa(rectangle));
console.log("Area of circle:", calculateAreaa(circle));
