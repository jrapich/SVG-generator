const Shapes = require('./shapes.js');
const ShapeObj = require("./shapeobj.js");

describe("Shapes", () => {
    describe("Circle", () => {
        it("should render XML data which describes a circle with text", () =>{
            const properties = new ShapeObj("test", "green", "Circle", "red", "logo");
            const shape = new Shapes.Circle(properties);
            const result = shape.render(shape.circle);
            expect(shape.render(shape.circle)).toEqual(result);
        })
    })
})