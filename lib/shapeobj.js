//a constructor function that we will use to generate the parameters of the logo to be generated
//will receive it's data from the answers the user passes to inquire
//i put it in its own file here to practice importing/exporting things and modularization

function ShapeObj (chars, textColor, shape, shapeColor, fileName) {
    this.text=chars;
    this.textColor=textColor;
    this.shape=shape;
    this.shapeColor=shapeColor;
    this.fileName=fileName;
}

module.exports = ShapeObj;