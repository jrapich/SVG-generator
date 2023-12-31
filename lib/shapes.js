//basic Shape class, which has most of the relevant xml data to generate the .svg logo via xml code.
//also constructs the object with the properties object which contains the parameters passed by the user with inquire
class Shape {
    constructor (properties) {
        this.svgEnd = "</svg>";
        this.properties = properties;
        this.svgData = `
        <svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
        
        `
        this.svgText = `
        <text x='100' y='100' font-size='30' text-anchor='middle' fill='${this.properties.textColor}'>${this.properties.text}</text>
        
        `
    }
    render(shape){
        const finalSVG = `
        ${this.svgData}
        ${shape}
        ${this.svgText}
        ${this.svgEnd}
        `
        return finalSVG;
    }
}

//each specific shape class here will inherit most of its data from the Shape class above

class Square extends Shape {
    constructor (properties) {
        super(properties);
        this.square = `<rect x='50' y='50' width='100' height='100' fill='${this.properties.shapeColor}'/>`;
    }
}

class Circle extends Shape {
    constructor (properties) {
        super(properties);
        this.circle = `<circle cx="100" cy="100" r="80" fill="${this.properties.shapeColor}"/>`;
    }
}

class Triangle extends Shape {
    constructor (properties) {
        super(properties);
        this.triangle = `<polygon points="100, 18 144, 182 56, 182" fill='${this.properties.shapeColor}'/>`;
    }
}

//reference xml code I was using to base the generated svg information off of
{/* <svg width="200" height="200">

    <rect width="100%" height="100%" fill="red" />

    <circle cx="150" cy="100" r="80" fill="green" />
    
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}

//export the classes
module.exports = {
    Square,
    Circle,
    Triangle
}