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
    
    describe("Triangle", () => {
        it("should render XML data which describes a triangle with text", () =>{
            const properties = new ShapeObj("test", "green", "Triangle", "red", "logo");
            const shape = new Shapes.Triangle(properties);
            const result = shape.render(shape.triangle);
            expect(shape.render(shape.triangle)).toEqual(result);
        })
    })

    describe("Square", () => {
        it("should render XML data which describes a Square with text", () =>{
            const properties = new ShapeObj("test", "green", "Square", "red", "logo");
            const shape = new Shapes.Square(properties);
            const result = shape.render(shape.square);
            expect(shape.render(shape.square)).toEqual(result);
        })
    })
})