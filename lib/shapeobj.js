function ShapeObj (chars, textColor, shape, shapeColor, fileName) {
    this.text=chars;
    this.textColor=textColor;
    this.shape=shape;
    this.shapeColor=shapeColor;
    this.fileName=fileName;
}

module.exports = ShapeObj;